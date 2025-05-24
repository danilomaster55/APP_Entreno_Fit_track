package com.daniel.springboot.backend.mvc.entreno.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.IEntrenamientoUsuarioDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.EntrenamientoUsuario;

import java.util.List;
import java.util.Optional;

@Service
public class EntrenamientoUsuarioService {

    @Autowired
    private IEntrenamientoUsuarioDao entrenamientoUsuarioDao;

    public List<EntrenamientoUsuario> listarPorUsuario(Long usuarioId) {
        return entrenamientoUsuarioDao.findByUsuarioId(usuarioId);
    }

    public Optional<EntrenamientoUsuario> buscarPorId(Long id) {
        return entrenamientoUsuarioDao.findById(id);
    }

    public EntrenamientoUsuario guardar(EntrenamientoUsuario eu) {
        return entrenamientoUsuarioDao.save(eu);
    }

    public void eliminar(Long id) {
        entrenamientoUsuarioDao.deleteById(id);
    }

    public boolean yaAsignado(Long usuarioId, Long entrenamientoId) {
        return entrenamientoUsuarioDao.existsByUsuarioIdAndEntrenamientoId(usuarioId, entrenamientoId);
    }
}
