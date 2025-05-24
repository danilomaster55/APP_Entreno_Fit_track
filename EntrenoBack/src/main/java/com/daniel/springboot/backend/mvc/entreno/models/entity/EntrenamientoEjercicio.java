package com.daniel.springboot.backend.mvc.entreno.models.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "entrenamiento_ejercicio")
public class EntrenamientoEjercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "entrenamiento_id")
    private Entrenamiento entrenamiento;

    @ManyToOne
    @JoinColumn(name = "ejercicio_id")
    private Ejercicio ejercicio;

    private Integer orden;

    @Column(name = "valor_personalizado")
    private Integer valorPersonalizado;

    @Column(name = "descanso_personalizado")
    private Integer descansoPersonalizado;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Entrenamiento getEntrenamiento() {
        return entrenamiento;
    }

    public void setEntrenamiento(Entrenamiento entrenamiento) {
        this.entrenamiento = entrenamiento;
    }

    public Ejercicio getEjercicio() {
        return ejercicio;
    }

    public void setEjercicio(Ejercicio ejercicio) {
        this.ejercicio = ejercicio;
    }

    public Integer getOrden() {
        return orden;
    }

    public void setOrden(Integer orden) {
        this.orden = orden;
    }

    public Integer getValorPersonalizado() {
        return valorPersonalizado;
    }

    public void setValorPersonalizado(Integer valorPersonalizado) {
        this.valorPersonalizado = valorPersonalizado;
    }

    public Integer getDescansoPersonalizado() {
        return descansoPersonalizado;
    }

    public void setDescansoPersonalizado(Integer descansoPersonalizado) {
        this.descansoPersonalizado = descansoPersonalizado;
    }
}
