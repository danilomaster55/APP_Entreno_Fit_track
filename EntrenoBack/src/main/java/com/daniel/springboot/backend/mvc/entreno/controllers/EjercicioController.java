package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.Ejercicio;
import com.daniel.springboot.backend.mvc.entreno.services.EjercicioService;

@RestController
@RequestMapping("/api/ejercicios")
@CrossOrigin(origins = "http://localhost:4200")
public class EjercicioController {

    @Autowired
    private EjercicioService ejercicioService;

    // Listar todos los ejercicios
    @GetMapping
    public ResponseEntity<List<Ejercicio>> listarTodos() {
        return ResponseEntity.ok(ejercicioService.listarTodos());
    }

    // Buscar ejercicio por ID
    @GetMapping("/{id}")
    public ResponseEntity<Ejercicio> buscarPorId(@PathVariable Long id) {
        Optional<Ejercicio> ejercicio = ejercicioService.buscarPorId(id);
        return ejercicio.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Crear nuevo ejercicio
    @PostMapping
    public ResponseEntity<Ejercicio> crear(@RequestBody Ejercicio ejercicio) {
        Ejercicio nuevo = ejercicioService.guardar(ejercicio);
        return ResponseEntity.ok(nuevo);
    }

    // Actualizar un ejercicio
    @PutMapping("/{id}")
    public ResponseEntity<Ejercicio> actualizar(@PathVariable Long id, @RequestBody Ejercicio ejercicio) {
        if (ejercicioService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        ejercicio.setId(id);
        Ejercicio actualizado = ejercicioService.guardar(ejercicio);
        return ResponseEntity.ok(actualizado);
    }

    // Eliminar ejercicio
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (ejercicioService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        ejercicioService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}