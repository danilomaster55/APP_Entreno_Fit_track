package com.daniel.springboot.backend.mvc.entreno.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.daniel.springboot.backend.mvc.entreno.models.entity.EntrenamientoEjercicio;
import com.daniel.springboot.backend.mvc.entreno.services.EntrenamientoEjercicioService;

@RestController
@RequestMapping("/api/entrenamiento-ejercicio")
@CrossOrigin(origins = "http://localhost:4200")
public class EntrenamientoEjercicioController {

    @Autowired
    private EntrenamientoEjercicioService entrenamientoEjercicioService;

    // Obtener los ejercicios asociados a un entrenamiento
    @GetMapping("/entrenamiento/{entrenamientoId}")
    public ResponseEntity<List<EntrenamientoEjercicio>> listarPorEntrenamiento(@PathVariable Long entrenamientoId) {
        List<EntrenamientoEjercicio> lista = entrenamientoEjercicioService.listarPorEntrenamiento(entrenamientoId);
        return ResponseEntity.ok(lista);
    }

    // Obtener una relación específica por ID
    @GetMapping("/{id}")
    public ResponseEntity<EntrenamientoEjercicio> obtenerPorId(@PathVariable Long id) {
        Optional<EntrenamientoEjercicio> relacion = entrenamientoEjercicioService.buscarPorId(id);
        return relacion.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Crear una nueva relación entrenamiento-ejercicio
    @PostMapping
    public ResponseEntity<EntrenamientoEjercicio> crear(@RequestBody EntrenamientoEjercicio relacion) {
        EntrenamientoEjercicio guardado = entrenamientoEjercicioService.guardar(relacion);
        return ResponseEntity.ok(guardado);
    }

    // Actualizar una relación existente
    @PutMapping("/{id}")
    public ResponseEntity<EntrenamientoEjercicio> actualizar(@PathVariable Long id, @RequestBody EntrenamientoEjercicio relacion) {
        if (entrenamientoEjercicioService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        relacion.setId(id);
        EntrenamientoEjercicio actualizado = entrenamientoEjercicioService.guardar(relacion);
        return ResponseEntity.ok(actualizado);
    }

    // Eliminar una relación específica
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (entrenamientoEjercicioService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        entrenamientoEjercicioService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    // Eliminar todas las relaciones de un entrenamiento (opcional, útil para reemplazar el conjunto)
    @DeleteMapping("/entrenamiento/{entrenamientoId}")
    public ResponseEntity<Void> eliminarPorEntrenamiento(@PathVariable Long entrenamientoId) {
        entrenamientoEjercicioService.eliminarPorEntrenamiento(entrenamientoId);
        return ResponseEntity.noContent().build();
    }
}
