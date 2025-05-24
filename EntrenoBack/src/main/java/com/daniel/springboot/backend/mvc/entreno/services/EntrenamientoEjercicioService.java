package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.IEntrenamientoEjercicioDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.EntrenamientoEjercicio;

@Service
public class EntrenamientoEjercicioService {

    @Autowired
    private IEntrenamientoEjercicioDao entrenamientoEjercicioDao;

    // Listar todos los ejercicios de un entrenamiento específico
    public List<EntrenamientoEjercicio> listarPorEntrenamiento(Long entrenamientoId) {
        return entrenamientoEjercicioDao.findByEntrenamientoIdOrderByOrdenAsc(entrenamientoId);
    }

    // Buscar una relación específica por su ID
    public Optional<EntrenamientoEjercicio> buscarPorId(Long id) {
        return entrenamientoEjercicioDao.findById(id);
    }

    // Guardar una nueva relación (agregar ejercicio al entrenamiento)
    public EntrenamientoEjercicio guardar(EntrenamientoEjercicio entrenamientoEjercicio) {
        return entrenamientoEjercicioDao.save(entrenamientoEjercicio);
    }

    // Eliminar una relación específica
    public void eliminar(Long id) {
        entrenamientoEjercicioDao.deleteById(id);
    }

    // Eliminar todos los ejercicios de un entrenamiento (si se necesita actualizar en bloque)
    public void eliminarPorEntrenamiento(Long entrenamientoId) {
        entrenamientoEjercicioDao.deleteByEntrenamientoId(entrenamientoId);
    }
}
