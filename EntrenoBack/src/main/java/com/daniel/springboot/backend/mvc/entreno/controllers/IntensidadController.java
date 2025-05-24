package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.Intensidad;
import com.daniel.springboot.backend.mvc.entreno.services.IntensidadService;

@RestController
@RequestMapping("/api/intensidades")
@CrossOrigin(origins = "http://localhost:4200")
public class IntensidadController {

    @Autowired
    private IntensidadService intensidadService;

    // Obtener todas las intensidades
    @GetMapping
    public ResponseEntity<List<Intensidad>> listarIntensidades() {
        List<Intensidad> intensidades = intensidadService.listarIntensidades();
        return ResponseEntity.ok(intensidades);
    }

    // Obtener una intensidad por ID
    @GetMapping("/{id}")
    public ResponseEntity<Intensidad> obtenerPorId(@PathVariable Long id) {
        Optional<Intensidad> intensidad = intensidadService.obtenerPorId(id);
        return intensidad.map(ResponseEntity::ok)
                         .orElse(ResponseEntity.notFound().build());
    }

    // Crear nueva intensidad
    @PostMapping
    public ResponseEntity<Intensidad> crear(@RequestBody Intensidad intensidad) {
        Intensidad nueva = intensidadService.guardar(intensidad);
        return ResponseEntity.ok(nueva);
    }

    // Actualizar intensidad existente
    @PutMapping("/{id}")
    public ResponseEntity<Intensidad> actualizar(@PathVariable Long id, @RequestBody Intensidad intensidad) {
        if (!intensidadService.obtenerPorId(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        intensidad.setId(id);
        Intensidad actualizada = intensidadService.guardar(intensidad);
        return ResponseEntity.ok(actualizada);
    }

    // Eliminar intensidad
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (!intensidadService.obtenerPorId(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        intensidadService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
