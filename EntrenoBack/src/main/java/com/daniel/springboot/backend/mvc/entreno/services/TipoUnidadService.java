package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.ITipoUnidadDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.TipoUnidad;

@Service
public class TipoUnidadService {

    @Autowired
    private ITipoUnidadDao tipoUnidadDao;

    public List<TipoUnidad> listarTodos() {
        return tipoUnidadDao.findAll();
    }

    public Optional<TipoUnidad> buscarPorId(Long id) {
        return tipoUnidadDao.findById(id);
    }

    public TipoUnidad guardar(TipoUnidad tipo) {
        return tipoUnidadDao.save(tipo);
    }

    public void eliminar(Long id) {
        tipoUnidadDao.deleteById(id);
    }
}
