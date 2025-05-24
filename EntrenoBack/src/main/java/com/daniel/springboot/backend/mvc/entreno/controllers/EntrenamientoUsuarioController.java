package com.daniel.springboot.backend.mvc.entreno.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.EntrenamientoUsuario;
import com.daniel.springboot.backend.mvc.entreno.services.EntrenamientoUsuarioService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/entrenamientos-usuario")
@CrossOrigin(origins = "http://localhost:4200")
public class EntrenamientoUsuarioController {

    @Autowired
    private EntrenamientoUsuarioService entrenamientoUsuarioService;

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<EntrenamientoUsuario>> listarPorUsuario(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(entrenamientoUsuarioService.listarPorUsuario(usuarioId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntrenamientoUsuario> buscarPorId(@PathVariable Long id) {
        Optional<EntrenamientoUsuario> eu = entrenamientoUsuarioService.buscarPorId(id);
        return eu.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<EntrenamientoUsuario> asignarEntrenamiento(@RequestBody EntrenamientoUsuario eu) {
        if (entrenamientoUsuarioService.yaAsignado(
                eu.getUsuario().getId(), eu.getEntrenamiento().getId())) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(entrenamientoUsuarioService.guardar(eu));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarAsignacion(@PathVariable Long id) {
        if (entrenamientoUsuarioService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        entrenamientoUsuarioService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}