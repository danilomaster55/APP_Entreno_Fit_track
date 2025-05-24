package com.daniel.springboot.backend.mvc.entreno.models.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.springboot.backend.mvc.entreno.models.entity.EntrenamientoEjercicio;

@Repository
public interface IEntrenamientoEjercicioDao extends JpaRepository<EntrenamientoEjercicio, Long> {

    // Obtener todos los ejercicios de un entrenamiento por su ID
    List<EntrenamientoEjercicio> findByEntrenamientoIdOrderByOrdenAsc(Long entrenamientoId);

    // Eliminar todos los ejercicios de un entrenamiento (por si se desea editarlo)
    void deleteByEntrenamientoId(Long entrenamientoId);
}
