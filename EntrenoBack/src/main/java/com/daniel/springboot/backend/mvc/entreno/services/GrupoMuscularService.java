package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.IGrupoMuscularDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.GrupoMuscular;

@Service
public class GrupoMuscularService {

    @Autowired
    private IGrupoMuscularDao grupoMuscularDao;

    public List<GrupoMuscular> listarTodos() {
        return grupoMuscularDao.findAll();
    }

    public Optional<GrupoMuscular> buscarPorId(Long id) {
        return grupoMuscularDao.findById(id);
    }

    public GrupoMuscular guardar(GrupoMuscular grupo) {
        return grupoMuscularDao.save(grupo);
    }

    public void eliminar(Long id) {
        grupoMuscularDao.deleteById(id);
    }
}