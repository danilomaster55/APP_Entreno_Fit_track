package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.IEntrenamientoDao;
import com.daniel.springboot.backend.mvc.entreno.models.dao.IUsuarioDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Entrenamiento;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Usuario;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Service
public class EntrenamientoService {

    @Autowired
    private IEntrenamientoDao entrenamientoDao;
    
    @Autowired
    private IUsuarioDao usuarioDao;

    public List<Entrenamiento> listarTodos() {
        return entrenamientoDao.findAll();
    }

    public Optional<Entrenamiento> buscarPorId(Long id) {
        return entrenamientoDao.findById(id);
    }

    //public Entrenamiento guardar(Entrenamiento entrenamiento) {
    //   return entrenamientoDao.save(entrenamiento);
    //}
    
    public Entrenamiento guardar(Entrenamiento entrenamiento) {

        // ✅ Cargar explícitamente el Usuario si viene por ID
        if (entrenamiento.getCreadoPor() != null && entrenamiento.getCreadoPor().getId() != null) {
            Long idUsuario = entrenamiento.getCreadoPor().getId();
            Usuario usuarioPersistido = usuarioDao.findById(idUsuario)
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            
            // ✅ Reemplazar el objeto transitorio por el persistido
            entrenamiento.setCreadoPor(usuarioPersistido);
        } else {
            throw new RuntimeException("No se especificó el creador del entrenamiento");
        }

        return entrenamientoDao.save(entrenamiento);
    }

    public void eliminar(Long id) {
        entrenamientoDao.deleteById(id);
    }

    public List<Entrenamiento> listarBases() {
        return entrenamientoDao.findByEsBaseTrue();
    }

    public List<Entrenamiento> listarPorUsuario(Long usuarioId) {
        return entrenamientoDao.findByCreadoPorId(usuarioId);
    }
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public Long duplicarEntrenamientoBase(Integer entrenamientoBaseId, Integer usuarioId) {
        return (Long) entityManager
            .createNativeQuery("SELECT duplicar_entrenamiento_base(:entrenamientoBaseId, :usuarioId)")
            .setParameter("entrenamientoBaseId", entrenamientoBaseId)
            .setParameter("usuarioId", usuarioId)
            .getSingleResult();
    }

}
