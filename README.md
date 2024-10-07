
# Gestion de Inventario
Aplicación web que permita a los usuarios gestionar un inventario. Los usuarios pueden agregar, editar y eliminar productos, así como ver un resumen del inventario actual.

## Backend:
Desde la carpeta raiz Gestion-de-tareas:

    cd backend
    npm install
    docker compose up -d
Haces una copia de .env.example en un .env y modificas **usuario**, **contraseña** y **url** de la linea 2, una ves configurado el .env:

    node server.js

## Frontend
Desde la carpeta raiz Gestion-de-tareas:

    cd frontend
    npm install
    npm start
