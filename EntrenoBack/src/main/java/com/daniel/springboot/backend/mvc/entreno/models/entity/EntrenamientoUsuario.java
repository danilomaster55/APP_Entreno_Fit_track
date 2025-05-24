package com.daniel.springboot.backend.mvc.entreno.models.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "entrenamientos_usuario")
public class EntrenamientoUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "entrenamiento_id")
    private Entrenamiento entrenamiento;

    @Column(name = "fecha_seleccion", updatable = false, insertable = false)
    private LocalDateTime fechaSeleccion;

    // ======= Getters y Setters =======

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Entrenamiento getEntrenamiento() {
        return entrenamiento;
    }

    public void setEntrenamiento(Entrenamiento entrenamiento) {
        this.entrenamiento = entrenamiento;
    }

    public LocalDateTime getFechaSeleccion() {
        return fechaSeleccion;
    }

    public void setFechaSeleccion(LocalDateTime fechaSeleccion) {
        this.fechaSeleccion = fechaSeleccion;
    }
}
