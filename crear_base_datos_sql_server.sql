
CREATE TABLE Tipos_usuario (
    id INT PRIMARY KEY,
    nombre NVARCHAR(50) NOT NULL,
    descripcion NVARCHAR(MAX)
);

CREATE TABLE Usuario (
    id INT PRIMARY KEY,
    tipo_usuario_id INT,
    username NVARCHAR(50) NOT NULL,
    password NVARCHAR(255) NOT NULL,
    fecha_registro NVARCHAR(20),
    telefono_1 NVARCHAR(20),
    telefono_2 NVARCHAR(20),
    ultima_conexion NVARCHAR(20),
    foto NVARCHAR(255),
    FOREIGN KEY (tipo_usuario_id) REFERENCES Tipos_usuario(id)
);

CREATE TABLE Intensidades (
    id INT PRIMARY KEY,
    nombre NVARCHAR(50),
    segundos_descanso INT
);

CREATE TABLE Entrenamiento (
    id INT PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    descripcion NVARCHAR(MAX),
    intensidad_id INT,
    es_base BIT,
    creado_por INT,
    fecha_creacion NVARCHAR(20),
    ultima_modificacion NVARCHAR(20),
    FOREIGN KEY (intensidad_id) REFERENCES Intensidades(id),
    FOREIGN KEY (creado_por) REFERENCES Usuario(id)
);

CREATE TABLE Entrenamientos_usuarios (
    id INT PRIMARY KEY,
    usuario_id INT,
    entrenamiento_id INT,
    fecha_seleccion NVARCHAR(20),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (entrenamiento_id) REFERENCES Entrenamiento(id)
);

CREATE TABLE Niveles_dificultad (
    id INT PRIMARY KEY,
    nivel NVARCHAR(50)
);

CREATE TABLE Grupos_musculares (
    id INT PRIMARY KEY,
    nombre NVARCHAR(50)
);

CREATE TABLE Tipos_unidad (
    id INT PRIMARY KEY,
    nombre NVARCHAR(50)
);

CREATE TABLE Tipos_ejercicio (
    id INT PRIMARY KEY,
    nombre NVARCHAR(50)
);

CREATE TABLE Equipamiento (
    id INT PRIMARY KEY,
    nombre NVARCHAR(100)
);

CREATE TABLE Ejercicio (
    id INT PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    descripcion NVARCHAR(MAX),
    ruta_multimedia NVARCHAR(255),
    grupo_muscular_id INT,
    nivel_dificultad_id INT,
    tipo_ejercicio_id INT,
    tipo_unidad_id INT,
    valor_sugerido INT,
    FOREIGN KEY (grupo_muscular_id) REFERENCES Grupos_musculares(id),
    FOREIGN KEY (nivel_dificultad_id) REFERENCES Niveles_dificultad(id),
    FOREIGN KEY (tipo_ejercicio_id) REFERENCES Tipos_ejercicio(id),
    FOREIGN KEY (tipo_unidad_id) REFERENCES Tipos_unidad(id)
);

CREATE TABLE Entrenamientos_ejercicios (
    id INT PRIMARY KEY,
    entrenamiento_id INT,
    ejercicio_id INT,
    orden INT,
    valor_personalizado INT,
    descanso_personalizado INT,
    FOREIGN KEY (entrenamiento_id) REFERENCES Entrenamiento(id),
    FOREIGN KEY (ejercicio_id) REFERENCES Ejercicio(id)
);

CREATE TABLE Ejercicio_equipamiento (
    ejercicio_id INT,
    entrenamiento_id INT,
    FOREIGN KEY (ejercicio_id) REFERENCES Ejercicio(id),
    FOREIGN KEY (entrenamiento_id) REFERENCES Entrenamiento(id)
);
