import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-usuarios',
  templateUrl: './maestro-usuarios.component.html',
  styleUrls: ['./maestro-usuarios.component.css']
})
export class MaestroUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = [];

  tiposUsuario: any[] = [];

  // 🎯 Filtros por campo
  filtros = {
    nombre: '',
    email: '',
    telefono1: '',
    telefono2: ''
  };

  // 🎯 Paginación
  paginaActual = 1;
  elementosPorPagina = 5;
  totalPaginas = 1;

  // ➕ Formulario de nuevo usuario
  nuevoUsuario = {
    username: '',
    password: '',
    tipoUsuarioId: null,
    telefono1: '',
    telefono2: '',
    email: '',
    estado: true
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/tipos-usuarios').subscribe(tipos => {
      this.tiposUsuario = tipos;
      this.cargarUsuarios();
    });
  }

  cargarUsuarios() {
    this.http.get<any[]>('http://localhost:8080/api/usuarios').subscribe(data => {
      this.usuarios = data.map(u => {
        const tipo = this.tiposUsuario.find(t => t.nombre === u.tipoUsuarioNombre);
        return { ...u, tipoUsuarioId: tipo?.id || null };
      });

      this.filtrarUsuarios();
    });
  }

  filtrarUsuarios() {
  const fnombre = this.filtros.nombre.toLowerCase();
  const femail = this.filtros.email.toLowerCase();
  const ftel1 = this.filtros.telefono1.toLowerCase();
  const ftel2 = this.filtros.telefono2.toLowerCase();

  const filtrados = this.usuarios.filter(u =>
    (!fnombre || u.username?.toLowerCase().includes(fnombre)) &&
    (!femail || u.email?.toLowerCase().includes(femail)) &&
    (!ftel1 || u.telefono1?.toLowerCase().includes(ftel1)) &&
    (!ftel2 || u.telefono2?.toLowerCase().includes(ftel2))
  );

  this.totalPaginas = Math.ceil(filtrados.length / this.elementosPorPagina);

  // 🟡 NO reiniciamos la página aquí
  // Nos aseguramos de que esté dentro de límites válidos
  if (this.paginaActual > this.totalPaginas) {
    this.paginaActual = this.totalPaginas || 1;
  }

  this.actualizarPagina(filtrados);
}


  actualizarPagina(listaCompleta: any[]) {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    this.usuariosFiltrados = listaCompleta.slice(inicio, fin);
  }

  cambiarPagina(cambio: number) {
    const nueva = this.paginaActual + cambio;
    if (nueva >= 1 && nueva <= this.totalPaginas) {
      this.paginaActual = nueva;
      this.filtrarUsuarios();  // Esto actualizará la vista actual
    }
  }


  crearUsuario() {
    const usuarioEnviar = {
      username: this.nuevoUsuario.username,
      password: this.nuevoUsuario.password,
      tipoUsuario: { id: this.nuevoUsuario.tipoUsuarioId },
      telefono1: this.nuevoUsuario.telefono1,
      telefono2: this.nuevoUsuario.telefono2,
      email: this.nuevoUsuario.email,
      estado: this.nuevoUsuario.estado
    };

    this.http.post('http://localhost:8080/api/usuarios', usuarioEnviar).subscribe(() => {
      this.cargarUsuarios();
      this.nuevoUsuario = {
        username: '',
        password: '',
        tipoUsuarioId: null,
        telefono1: '',
        telefono2: '',
        email: '',
        estado: true
      };
    });
  }

  actualizarUsuario(usuario: any) {
    const usuarioEnviar = {
      ...usuario,
      tipoUsuario: { id: usuario.tipoUsuarioId }
    };

    this.http.put(`http://localhost:8080/api/usuarios/${usuario.id}`, usuarioEnviar)
      .subscribe(() => this.cargarUsuarios());
  }

  eliminarUsuario(id: number) {
    if (confirm('¿Seguro que quieres eliminar este usuario?')) {
      this.http.delete(`http://localhost:8080/api/usuarios/${id}`)
        .subscribe(() => this.cargarUsuarios());
    }
  }
}
