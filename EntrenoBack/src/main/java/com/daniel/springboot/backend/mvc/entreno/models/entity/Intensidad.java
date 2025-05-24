package com.daniel.springboot.backend.mvc.entreno.models.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "intensidades")
public class Intensidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Column(name = "segundos_descanso")
    private Integer segundosDescanso;

    // ======= Getters y Setters =======

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getSegundosDescanso() {
        return segundosDescanso;
    }

    public void setSegundosDescanso(Integer segundosDescanso) {
        this.segundosDescanso = segundosDescanso;
    }
}
