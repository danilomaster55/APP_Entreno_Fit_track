package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.Equipamiento;
import com.daniel.springboot.backend.mvc.entreno.services.EquipamientoService;

@RestController
@RequestMapping("/api/equipamientos")
@CrossOrigin(origins = "http://localhost:4200")
public class EquipamientoController {

    @Autowired
    private EquipamientoService equipamientoService;

    @GetMapping
    public ResponseEntity<List<Equipamiento>> listarTodos() {
        return ResponseEntity.ok(equipamientoService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Equipamiento> buscarPorId(@PathVariable Long id) {
        Optional<Equipamiento> e = equipamientoService.buscarPorId(id);
        return e.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Equipamiento> crear(@RequestBody Equipamiento e) {
        return ResponseEntity.ok(equipamientoService.guardar(e));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Equipamiento> actualizar(@PathVariable Long id, @RequestBody Equipamiento e) {
        if (equipamientoService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        e.setId(id);
        return ResponseEntity.ok(equipamientoService.guardar(e));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (equipamientoService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        equipamientoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}