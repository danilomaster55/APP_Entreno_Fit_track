package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.IIntensidadDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Intensidad;

@Service
public class IntensidadService {

    @Autowired
    private IIntensidadDao intensidadDao;

    public List<Intensidad> listarIntensidades() {
        return intensidadDao.findAll();
    }

    public Optional<Intensidad> obtenerPorId(Long id) {
        return intensidadDao.findById(id);
    }

    public Intensidad guardar(Intensidad intensidad) {
        return intensidadDao.save(intensidad);
    }

    public void eliminar(Long id) {
        intensidadDao.deleteById(id);
    }
}
