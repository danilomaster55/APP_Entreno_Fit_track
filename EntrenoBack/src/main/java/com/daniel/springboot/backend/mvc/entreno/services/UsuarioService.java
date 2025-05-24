package com.daniel.springboot.backend.mvc.entreno.services;

import com.daniel.springboot.backend.mvc.entreno.models.dao.IUsuarioDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private IUsuarioDao usuarioDao;

    public List<Usuario> findAll() {
        return usuarioDao.findAll();
    }

    public Optional<Usuario> findById(Long id) {
        return usuarioDao.findById(id);
    }

    public Usuario findByUsername(String username) {
        return usuarioDao.findByUsername(username);
    }

    public Usuario findByEmail(String email) {
        return usuarioDao.findByEmail(email);
    }

    public List<Usuario> findByEstado(Boolean estado) {
        return usuarioDao.findByEstado(estado);
    }

    public Usuario save(Usuario usuario) {
        return usuarioDao.save(usuario);
    }

    public void deleteById(Long id) {
        usuarioDao.deleteById(id);
    }
}

