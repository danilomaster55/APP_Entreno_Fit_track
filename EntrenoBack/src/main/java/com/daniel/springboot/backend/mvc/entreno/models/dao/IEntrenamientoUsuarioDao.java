package com.daniel.springboot.backend.mvc.entreno.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.springboot.backend.mvc.entreno.models.entity.EntrenamientoUsuario;

import java.util.List;

@Repository
public interface IEntrenamientoUsuarioDao extends JpaRepository<EntrenamientoUsuario, Long> {
    List<EntrenamientoUsuario> findByUsuarioId(Long usuarioId);
    boolean existsByUsuarioIdAndEntrenamientoId(Long usuarioId, Long entrenamientoId);
}
