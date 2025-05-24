package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.TipoEjercicio;
import com.daniel.springboot.backend.mvc.entreno.services.TipoEjercicioService;

@RestController
@RequestMapping("/api/tipos-ejercicio")
@CrossOrigin(origins = "http://localhost:4200")
public class TipoEjercicioController {

    @Autowired
    private TipoEjercicioService tipoEjercicioService;

    @GetMapping
    public ResponseEntity<List<TipoEjercicio>> listarTodos() {
        return ResponseEntity.ok(tipoEjercicioService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoEjercicio> buscarPorId(@PathVariable Long id) {
        Optional<TipoEjercicio> tipo = tipoEjercicioService.buscarPorId(id);
        return tipo.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TipoEjercicio> crear(@RequestBody TipoEjercicio tipo) {
        return ResponseEntity.ok(tipoEjercicioService.guardar(tipo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoEjercicio> actualizar(@PathVariable Long id, @RequestBody TipoEjercicio tipo) {
        if (tipoEjercicioService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        tipo.setId(id);
        return ResponseEntity.ok(tipoEjercicioService.guardar(tipo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (tipoEjercicioService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        tipoEjercicioService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}