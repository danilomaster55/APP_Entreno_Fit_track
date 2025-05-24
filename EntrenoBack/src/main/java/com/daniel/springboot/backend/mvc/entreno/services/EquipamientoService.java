package com.daniel.springboot.backend.mvc.entreno.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.springboot.backend.mvc.entreno.models.dao.IEquipamientoDao;
import com.daniel.springboot.backend.mvc.entreno.models.entity.Equipamiento;

@Service
public class EquipamientoService {

    @Autowired
    private IEquipamientoDao equipamientoDao;

    public List<Equipamiento> listarTodos() {
        return equipamientoDao.findAll();
    }

    public Optional<Equipamiento> buscarPorId(Long id) {
        return equipamientoDao.findById(id);
    }

    public Equipamiento guardar(Equipamiento equipamiento) {
        return equipamientoDao.save(equipamiento);
    }

    public void eliminar(Long id) {
        equipamientoDao.deleteById(id);
    }
}
