package com.daniel.springboot.backend.mvc.entreno.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.springboot.backend.mvc.entreno.models.entity.TipoUnidad;

@Repository
public interface ITipoUnidadDao extends JpaRepository<TipoUnidad, Long> {
    // Por ahora sin métodos personalizados
}