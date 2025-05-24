package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.GrupoMuscular;
import com.daniel.springboot.backend.mvc.entreno.services.GrupoMuscularService;

@RestController
@RequestMapping("/api/grupos-musculares")
@CrossOrigin(origins = "http://localhost:4200")
public class GrupoMuscularController {

    @Autowired
    private GrupoMuscularService grupoMuscularService;

    @GetMapping
    public ResponseEntity<List<GrupoMuscular>> listarTodos() {
        return ResponseEntity.ok(grupoMuscularService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<GrupoMuscular> buscarPorId(@PathVariable Long id) {
        Optional<GrupoMuscular> grupo = grupoMuscularService.buscarPorId(id);
        return grupo.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<GrupoMuscular> crear(@RequestBody GrupoMuscular grupo) {
        return ResponseEntity.ok(grupoMuscularService.guardar(grupo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<GrupoMuscular> actualizar(@PathVariable Long id, @RequestBody GrupoMuscular grupo) {
        if (grupoMuscularService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        grupo.setId(id);
        return ResponseEntity.ok(grupoMuscularService.guardar(grupo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (grupoMuscularService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        grupoMuscularService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
