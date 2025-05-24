package com.daniel.springboot.backend.mvc.entreno.models.entity;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "ejercicios")
public class Ejercicio implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String descripcion;

    @Column(name = "ruta_multimedia")
    private String rutaMultimedia;

    @ManyToOne
    @JoinColumn(name = "grupo_muscular_id")
    private GrupoMuscular grupoMuscular;

    @ManyToOne
    @JoinColumn(name = "nivel_dificultad_id")
    private NivelDificultad nivelDificultad;

    @ManyToOne
    @JoinColumn(name = "tipo_ejercicio_id")
    private TipoEjercicio tipoEjercicio;

    @ManyToOne
    @JoinColumn(name = "tipo_unidad_id")
    private TipoUnidad tipoUnidad;

    @Column(name = "valor_sugerido")
    private Integer valorSugerido;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "ejercicio_equipamiento",
        joinColumns = @JoinColumn(name = "ejercicio_id"),
        inverseJoinColumns = @JoinColumn(name = "equipamiento_id")
    )
    private List<Equipamiento> equipamientos;


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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getRutaMultimedia() {
        return rutaMultimedia;
    }

    public void setRutaMultimedia(String rutaMultimedia) {
        this.rutaMultimedia = rutaMultimedia;
    }

    public GrupoMuscular getGrupoMuscular() {
        return grupoMuscular;
    }

    public void setGrupoMuscular(GrupoMuscular grupoMuscular) {
        this.grupoMuscular = grupoMuscular;
    }

    public NivelDificultad getNivelDificultad() {
        return nivelDificultad;
    }

    public void setNivelDificultad(NivelDificultad nivelDificultad) {
        this.nivelDificultad = nivelDificultad;
    }

    public TipoEjercicio getTipoEjercicio() {
        return tipoEjercicio;
    }

    public void setTipoEjercicio(TipoEjercicio tipoEjercicio) {
        this.tipoEjercicio = tipoEjercicio;
    }

    public TipoUnidad getTipoUnidad() {
        return tipoUnidad;
    }

    public void setTipoUnidad(TipoUnidad tipoUnidad) {
        this.tipoUnidad = tipoUnidad;
    }

    public Integer getValorSugerido() {
        return valorSugerido;
    }

    public void setValorSugerido(Integer valorSugerido) {
        this.valorSugerido = valorSugerido;
    }
    public List<Equipamiento> getEquipamientos() {
        return equipamientos;
    }

    public void setEquipamientos(List<Equipamiento> equipamientos) {
        this.equipamientos = equipamientos;
    }

}
