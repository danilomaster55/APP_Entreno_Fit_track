package com.daniel.springboot.backend.mvc.entreno.controllers;

import com.daniel.springboot.backend.mvc.entreno.dto.UsuarioDTO;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Usuario;
import com.daniel.springboot.backend.mvc.entreno.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    // 🔹 Obtener todos los usuarios en formato DTO
    @GetMapping
    public List<UsuarioDTO> getAllUsuarios() {
        return usuarioService.findAll().stream()
                .map(usuario -> new UsuarioDTO(
                        usuario.getId(),
                        usuario.getUsername(),
                        usuario.getTelefono1(),
                        usuario.getTelefono2(),
                        usuario.getEmail(),
                        usuario.getEstado(),
                        usuario.getTipoUsuario().getNombre(),
                        usuario.getFoto() // 🔹 Incluir la ruta de la foto en el DTO
                ))
                .collect(Collectors.toList());
    }

    // 🔹 Obtener un usuario por ID en formato DTO
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> getUsuarioById(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.findById(id);
        return usuario.map(u -> ResponseEntity.ok(
                new UsuarioDTO(
                        u.getId(),
                        u.getUsername(),
                        u.getTelefono1(),
                        u.getTelefono2(),
                        u.getEmail(),
                        u.getEstado(),
                        u.getTipoUsuario().getNombre(),
                        u.getFoto() // 🔹 Incluir la foto
                ))).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 🔹 Obtener un usuario por username en formato DTO
    @GetMapping("/username/{username}")
    public ResponseEntity<UsuarioDTO> getUsuarioByUsername(@PathVariable String username) {
        Usuario usuario = usuarioService.findByUsername(username);
        return usuario != null ?
                ResponseEntity.ok(new UsuarioDTO(
                        usuario.getId(),
                        usuario.getUsername(),
                        usuario.getTelefono1(),
                        usuario.getTelefono2(),
                        usuario.getEmail(),
                        usuario.getEstado(),
                        usuario.getTipoUsuario().getNombre(),
                        usuario.getFoto() // 🔹 Incluir la foto
                )) : ResponseEntity.notFound().build();
    }

    // 🔹 Obtener un usuario por email en formato DTO
    @GetMapping("/email/{email}")
    public ResponseEntity<UsuarioDTO> getUsuarioByEmail(@PathVariable String email) {
        Usuario usuario = usuarioService.findByEmail(email);
        return usuario != null ?
                ResponseEntity.ok(new UsuarioDTO(
                        usuario.getId(),
                        usuario.getUsername(),
                        usuario.getTelefono1(),
                        usuario.getTelefono2(),
                        usuario.getEmail(),
                        usuario.getEstado(),
                        usuario.getTipoUsuario().getNombre(),
                        usuario.getFoto() // 🔹 Incluir la foto
                )) : ResponseEntity.notFound().build();
    }

    // 🔹 Obtener usuarios activos o inactivos en formato DTO
    @GetMapping("/estado/{estado}")
    public List<UsuarioDTO> getUsuariosByEstado(@PathVariable Boolean estado) {
        return usuarioService.findByEstado(estado).stream()
                .map(usuario -> new UsuarioDTO(
                        usuario.getId(),
                        usuario.getUsername(),
                        usuario.getTelefono1(),
                        usuario.getTelefono2(),
                        usuario.getEmail(),
                        usuario.getEstado(),
                        usuario.getTipoUsuario().getNombre(),
                        usuario.getFoto() // 🔹 Incluir la foto
                ))
                .collect(Collectors.toList());
    }

    // 🔹 Crear un nuevo usuario
    @PostMapping
    public ResponseEntity<UsuarioDTO> createUsuario(@RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioService.save(usuario);
        return ResponseEntity.ok(new UsuarioDTO(
                nuevoUsuario.getId(),
                nuevoUsuario.getUsername(),
                nuevoUsuario.getTelefono1(),
                nuevoUsuario.getTelefono2(),
                nuevoUsuario.getEmail(),
                nuevoUsuario.getEstado(),
                nuevoUsuario.getTipoUsuario().getNombre(),
                nuevoUsuario.getFoto() // 🔹 Incluir la foto
        ));
    }

    // 🔹 Actualizar un usuario con validaciones por tipo de usuario
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioActualizado) {
        Optional<Usuario> optionalUsuario = usuarioService.findById(id);

        if (!optionalUsuario.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Usuario usuarioExistente = optionalUsuario.get();

        // 🔹 Si el usuario es Cliente, solo puede cambiar su contraseña y foto
        if (usuarioExistente.getTipoUsuario().getNombre().equalsIgnoreCase("CLIENTE")) {
            usuarioExistente.setPassword(usuarioActualizado.getPassword());
            usuarioExistente.setFoto(usuarioActualizado.getFoto()); // 🔹 Permitir cambiar la foto
        } 
        // 🔹 Si el usuario es Administrador, puede actualizar todos los datos
        else if (usuarioExistente.getTipoUsuario().getNombre().equalsIgnoreCase("ADMIN")) {
            usuarioExistente.setEmail(usuarioActualizado.getEmail());
            usuarioExistente.setTelefono1(usuarioActualizado.getTelefono1());
            usuarioExistente.setTelefono2(usuarioActualizado.getTelefono2());
            usuarioExistente.setPassword(usuarioActualizado.getPassword());
            usuarioExistente.setFoto(usuarioActualizado.getFoto()); // 🔹 Permitir cambiar la foto
        } else {
            return ResponseEntity.status(403).body("No tienes permisos para modificar esta información.");
        }

        Usuario usuarioGuardado = usuarioService.save(usuarioExistente);

        return ResponseEntity.ok(new UsuarioDTO(
                usuarioGuardado.getId(),
                usuarioGuardado.getUsername(),
                usuarioGuardado.getTelefono1(),
                usuarioGuardado.getTelefono2(),
                usuarioGuardado.getEmail(),
                usuarioGuardado.getEstado(),
                usuarioGuardado.getTipoUsuario().getNombre(),
                usuarioGuardado.getFoto()  // 🔹 Incluir la foto
        ));
    }

    // 🔹 Eliminar un usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        if (!usuarioService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        usuarioService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // 🔹 Obtener detalles de un usuario (incluyendo la foto)
    @GetMapping("/detalles/{username}")
    public ResponseEntity<Usuario> getUsuarioDetalles(@PathVariable String username) {
        Usuario usuario = usuarioService.findByUsername(username);

        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(usuario);
    }

    // 🔹 Iniciar sesión con validación de credenciales
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        Usuario usuarioEncontrado = usuarioService.findByUsername(usuario.getUsername());

        if (usuarioEncontrado == null || !usuarioEncontrado.getPassword().equals(usuario.getPassword())) {
            return ResponseEntity.status(401).body("Usuario o contraseña incorrectos");
        }

        // Simulamos la generación de un token (en una app real, usar JWT)
        String fakeToken = "token_" + usuarioEncontrado.getUsername();

        return ResponseEntity.ok().body(
            new HashMap<String, String>() {{
                put("token", fakeToken);
                put("username", usuarioEncontrado.getUsername());
                put("foto", usuarioEncontrado.getFoto()); // 🔹 Devolver la foto en la respuesta
            }}
        );
    }
}
