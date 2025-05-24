package com.daniel.springboot.backend.mvc.entreno.models.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "niveles_dificultad")
public class NivelDificultad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nivel;

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }
}
