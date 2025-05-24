package com.daniel.springboot.backend.mvc.entreno.services;

import com.daniel.springboot.backend.mvc.entreno.models.dao.ITipoUsuarioDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.TipoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TipoUsuarioService {

    @Autowired
    private ITipoUsuarioDao tipoUsuarioDao;

    public List<TipoUsuario> findAll() {
        return tipoUsuarioDao.findAll();
    }

    public Optional<TipoUsuario> findById(Long id) {
        return tipoUsuarioDao.findById(id);
    }

    public TipoUsuario findByNombre(String nombre) {
        return tipoUsuarioDao.findByNombre(nombre);
    }

    public TipoUsuario save(TipoUsuario tipoUsuario) {
        return tipoUsuarioDao.save(tipoUsuario);
    }

    public void deleteById(Long id) {
        tipoUsuarioDao.deleteById(id);
    }
}
