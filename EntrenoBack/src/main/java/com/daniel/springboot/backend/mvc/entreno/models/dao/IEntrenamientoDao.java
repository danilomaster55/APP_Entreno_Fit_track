package com.daniel.springboot.backend.mvc.entreno.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.springboot.backend.mvc.entreno.models.entity.Entrenamiento;

@Repository
public interface IEntrenamientoDao extends JpaRepository<Entrenamiento, Long> {

    List<Entrenamiento> findByEsBaseTrue();

    List<Entrenamiento> findByCreadoPorId(Long usuarioId);
}
