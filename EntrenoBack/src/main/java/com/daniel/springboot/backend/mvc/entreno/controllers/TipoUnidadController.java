package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.daniel.springboot.backend.mvc.entreno.models.entity.TipoUnidad;
import com.daniel.springboot.backend.mvc.entreno.services.TipoUnidadService;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/tipos-unidad")
@CrossOrigin(origins = "http://localhost:4200")
public class TipoUnidadController {

    @Autowired
    private TipoUnidadService tipoUnidadService;

    @GetMapping
    public ResponseEntity<List<TipoUnidad>> listarTodos() {
        return ResponseEntity.ok(tipoUnidadService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoUnidad> buscarPorId(@PathVariable Long id) {
        Optional<TipoUnidad> tipo = tipoUnidadService.buscarPorId(id);
        return tipo.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TipoUnidad> crear(@RequestBody TipoUnidad tipo) {
        return ResponseEntity.ok(tipoUnidadService.guardar(tipo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoUnidad> actualizar(@PathVariable Long id, @RequestBody TipoUnidad tipo) {
        if (tipoUnidadService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        tipo.setId(id);
        return ResponseEntity.ok(tipoUnidadService.guardar(tipo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (tipoUnidadService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        tipoUnidadService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
