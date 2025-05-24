package com.daniel.springboot.backend.mvc.entreno.controllers;

import com.daniel.springboot.backend.mvc.entreno.dto.TipoUsuarioDTO;
import com.daniel.springboot.backend.mvc.entreno.models.entity.TipoUsuario;
import com.daniel.springboot.backend.mvc.entreno.services.TipoUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/tipos-usuarios")
@CrossOrigin(origins = "*")
public class TipoUsuarioController {

    @Autowired
    private TipoUsuarioService tipoUsuarioService;

    // 🔹 Obtener todos los tipos de usuario en formato DTO
    @GetMapping
    public List<TipoUsuarioDTO> getAllTiposUsuarios() {
        return tipoUsuarioService.findAll().stream()
                .map(tipo -> new TipoUsuarioDTO(tipo.getId(), tipo.getNombre(), tipo.getDescripcion()))
                .collect(Collectors.toList());
    }

    // 🔹 Obtener un tipo de usuario por ID en formato DTO
    @GetMapping("/{id}")
    public ResponseEntity<TipoUsuarioDTO> getTipoUsuarioById(@PathVariable Long id) {
        Optional<TipoUsuario> tipoUsuario = tipoUsuarioService.findById(id);
        return tipoUsuario.map(tipo -> ResponseEntity.ok(
                new TipoUsuarioDTO(tipo.getId(), tipo.getNombre(), tipo.getDescripcion())))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 🔹 Obtener un tipo de usuario por nombre en formato DTO
    @GetMapping("/nombre/{nombre}")
    public ResponseEntity<TipoUsuarioDTO> getTipoUsuarioByNombre(@PathVariable String nombre) {
        TipoUsuario tipoUsuario = tipoUsuarioService.findByNombre(nombre);
        return tipoUsuario != null ?
                ResponseEntity.ok(new TipoUsuarioDTO(tipoUsuario.getId(), tipoUsuario.getNombre(), tipoUsuario.getDescripcion())) :
                ResponseEntity.notFound().build();
    }

    // 🔹 Crear un nuevo tipo de usuario
    @PostMapping
    public ResponseEntity<TipoUsuarioDTO> createTipoUsuario(@RequestBody TipoUsuario tipoUsuario) {
        TipoUsuario nuevoTipo = tipoUsuarioService.save(tipoUsuario);
        return ResponseEntity.ok(new TipoUsuarioDTO(nuevoTipo.getId(), nuevoTipo.getNombre(), nuevoTipo.getDescripcion()));
    }

    // 🔹 Actualizar un tipo de usuario existente
    @PutMapping("/{id}")
    public ResponseEntity<TipoUsuarioDTO> updateTipoUsuario(@PathVariable Long id, @RequestBody TipoUsuario tipoUsuario) {
        if (!tipoUsuarioService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        tipoUsuario.setId(id);
        TipoUsuario actualizado = tipoUsuarioService.save(tipoUsuario);
        return ResponseEntity.ok(new TipoUsuarioDTO(actualizado.getId(), actualizado.getNombre(), actualizado.getDescripcion()));
    }

    // 🔹 Eliminar un tipo de usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTipoUsuario(@PathVariable Long id) {
        if (!tipoUsuarioService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        tipoUsuarioService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
