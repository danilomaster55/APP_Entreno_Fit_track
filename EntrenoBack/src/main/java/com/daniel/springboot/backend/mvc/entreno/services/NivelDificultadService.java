package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.INivelDificultadDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.NivelDificultad;

@Service
public class NivelDificultadService {

    @Autowired
    private INivelDificultadDao nivelDificultadDao;

    public List<NivelDificultad> listarTodos() {
        return nivelDificultadDao.findAll();
    }

    public Optional<NivelDificultad> buscarPorId(Long id) {
        return nivelDificultadDao.findById(id);
    }

    public NivelDificultad guardar(NivelDificultad nivel) {
        return nivelDificultadDao.save(nivel);
    }

    public void eliminar(Long id) {
        nivelDificultadDao.deleteById(id);
    }
}
