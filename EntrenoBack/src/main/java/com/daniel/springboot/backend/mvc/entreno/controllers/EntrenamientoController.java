package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.Entrenamiento;
import com.daniel.springboot.backend.mvc.entreno.services.EntrenamientoService;

@RestController
@RequestMapping("/api/entrenamientos")
@CrossOrigin(origins = "http://localhost:4200")
public class EntrenamientoController {

    @Autowired
    private EntrenamientoService entrenamientoService;

    @GetMapping
    public ResponseEntity<List<Entrenamiento>> listarTodos() {
        return ResponseEntity.ok(entrenamientoService.listarTodos());
    }

    @GetMapping("/{id:[0-9]+}")
    public ResponseEntity<Entrenamiento> obtenerPorId(@PathVariable Long id) {
        Optional<Entrenamiento> entrenamiento = entrenamientoService.buscarPorId(id);
        return entrenamiento.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }


    @GetMapping("/base")
    public ResponseEntity<List<Entrenamiento>> listarBases() {
        return ResponseEntity.ok(entrenamientoService.listarBases());
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Entrenamiento>> listarPorUsuario(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(entrenamientoService.listarPorUsuario(usuarioId));
    }

    @PostMapping
    public ResponseEntity<Entrenamiento> crear(@RequestBody Entrenamiento entrenamiento) {
        entrenamiento.setFechaCreacion(LocalDateTime.now());
        entrenamiento.setUltimaModificacion(LocalDateTime.now());
        return ResponseEntity.ok(entrenamientoService.guardar(entrenamiento));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Entrenamiento> actualizar(@PathVariable Long id, @RequestBody Entrenamiento entrenamiento) {
        if (entrenamientoService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        entrenamiento.setId(id);
        entrenamiento.setUltimaModificacion(LocalDateTime.now());
        return ResponseEntity.ok(entrenamientoService.guardar(entrenamiento));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (entrenamientoService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        entrenamientoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
    
    @PostMapping("/acciones/duplicar")
    public ResponseEntity<Long> duplicarEntrenamientoBase(
        @RequestParam Integer entrenamientoBaseId,
        @RequestParam Integer usuarioId) {

        try {
            Long nuevoId = entrenamientoService.duplicarEntrenamientoBase(entrenamientoBaseId, usuarioId);
            return ResponseEntity.ok(nuevoId);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
