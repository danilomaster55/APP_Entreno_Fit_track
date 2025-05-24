package com.daniel.springboot.backend.mvc.entreno.models.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Intensidad;

@Repository
public interface IIntensidadDao extends JpaRepository<Intensidad, Long> {

}
