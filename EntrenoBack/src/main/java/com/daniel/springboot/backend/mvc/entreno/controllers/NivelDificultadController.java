package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.NivelDificultad;
import com.daniel.springboot.backend.mvc.entreno.services.NivelDificultadService;

@RestController
@RequestMapping("/api/niveles-dificultad")
@CrossOrigin(origins = "http://localhost:4200")
public class NivelDificultadController {

    @Autowired
    private NivelDificultadService nivelDificultadService;

    @GetMapping
    public ResponseEntity<List<NivelDificultad>> listarTodos() {
        return ResponseEntity.ok(nivelDificultadService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<NivelDificultad> buscarPorId(@PathVariable Long id) {
        Optional<NivelDificultad> nivel = nivelDificultadService.buscarPorId(id);
        return nivel.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<NivelDificultad> crear(@RequestBody NivelDificultad nivel) {
        return ResponseEntity.ok(nivelDificultadService.guardar(nivel));
    }

    @PutMapping("/{id}")
    public ResponseEntity<NivelDificultad> actualizar(@PathVariable Long id, @RequestBody NivelDificultad nivel) {
        if (nivelDificultadService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        nivel.setId(id);
        return ResponseEntity.ok(nivelDificultadService.guardar(nivel));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (nivelDificultadService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        nivelDificultadService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
