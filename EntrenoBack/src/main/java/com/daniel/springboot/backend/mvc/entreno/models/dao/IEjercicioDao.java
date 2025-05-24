package com.daniel.springboot.backend.mvc.entreno.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.springboot.backend.mvc.entreno.models.entity.Ejercicio;

@Repository
public interface IEjercicioDao extends JpaRepository<Ejercicio, Long> {
}
