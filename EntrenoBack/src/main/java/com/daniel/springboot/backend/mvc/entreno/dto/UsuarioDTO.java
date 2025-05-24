package com.daniel.springboot.backend.mvc.entreno.dto;

public class UsuarioDTO {
    private Long id;
    private String username;
    private String telefono1;
    private String telefono2;
    private String email;
    private Boolean estado;
    private String tipoUsuarioNombre; // Mostrar solo el nombre del tipo de usuario
    private String foto; // 🔹 Ruta de la foto en formato String

    public UsuarioDTO(Long id, String username, String telefono1, String telefono2, String email, Boolean estado, String tipoUsuarioNombre, String foto) {
        this.id = id;
        this.username = username;
        this.telefono1 = telefono1;
        this.telefono2 = telefono2;
        this.email = email;
        this.estado = estado;
        this.tipoUsuarioNombre = tipoUsuarioNombre;
        this.foto = foto;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTelefono1() {
        return telefono1;
    }

    public void setTelefono1(String telefono1) {
        this.telefono1 = telefono1;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    public String getTipoUsuarioNombre() {
        return tipoUsuarioNombre;
    }

    public void setTipoUsuarioNombre(String tipoUsuarioNombre) {
        this.tipoUsuarioNombre = tipoUsuarioNombre;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }
}
