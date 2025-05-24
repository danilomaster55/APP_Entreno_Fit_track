package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.IEjercicioDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Ejercicio;

@Service
public class EjercicioService {

    @Autowired
    private IEjercicioDao ejercicioDao;

    // Listar todos los ejercicios
    public List<Ejercicio> listarTodos() {
        return ejercicioDao.findAll();
    }

    // Buscar ejercicio por ID
    public Optional<Ejercicio> buscarPorId(Long id) {
        return ejercicioDao.findById(id);
    }

    // Guardar (crear o actualizar) un ejercicio
    public Ejercicio guardar(Ejercicio ejercicio) {
        return ejercicioDao.save(ejercicio);
    }

    // Eliminar un ejercicio por ID
    public void eliminar(Long id) {
        ejercicioDao.deleteById(id);
    }
}
