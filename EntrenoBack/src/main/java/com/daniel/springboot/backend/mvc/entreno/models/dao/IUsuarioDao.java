package com.daniel.springboot.backend.mvc.entreno.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Usuario;

public interface IUsuarioDao extends JpaRepository<Usuario, Long> {
    
    // Método para buscar un usuario por su username
    Usuario findByUsername(String username);
    
    // Método para buscar un usuario por su email
    Usuario findByEmail(String email);
    
    // Método para obtener usuarios por estado (activos o inactivos)
    List<Usuario> findByEstado(Boolean estado);
}

