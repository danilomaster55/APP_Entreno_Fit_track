package com.daniel.springboot.backend.mvc.entreno.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.springboot.backend.mvc.entreno.models.entity.Equipamiento;

@Repository
public interface IEquipamientoDao extends JpaRepository<Equipamiento, Long> {
   
}
