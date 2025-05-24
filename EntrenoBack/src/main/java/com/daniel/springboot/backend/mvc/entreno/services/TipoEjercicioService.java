package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.ITipoEjercicioDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.TipoEjercicio;

@Service
public class TipoEjercicioService {

    @Autowired
    private ITipoEjercicioDao tipoEjercicioDao;

    public List<TipoEjercicio> listarTodos() {
        return tipoEjercicioDao.findAll();
    }

    public Optional<TipoEjercicio> buscarPorId(Long id) {
        return tipoEjercicioDao.findById(id);
    }

    public TipoEjercicio guardar(TipoEjercicio tipo) {
        return tipoEjercicioDao.save(tipo);
    }

    public void eliminar(Long id) {
        tipoEjercicioDao.deleteById(id);
    }
}