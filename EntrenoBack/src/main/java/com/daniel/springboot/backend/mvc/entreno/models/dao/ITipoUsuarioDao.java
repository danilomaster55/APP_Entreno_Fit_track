package com.daniel.springboot.backend.mvc.entreno.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.daniel.springboot.backend.mvc.entreno.models.entity.TipoUsuario;

public interface ITipoUsuarioDao extends JpaRepository<TipoUsuario, Long> {
    
    // Método para buscar un tipo de usuario por su nombre
    TipoUsuario findByNombre(String nombre);
}

