# Keyboard Stock

Keyboard Stock es una aplicación web de inventario que permite a los usuarios agregar y eliminar productos desde un formulario. La aplicación utiliza JavaScript para la validación del formulario y para obtener y mostrar datos dinámicamente. Estos datos se gestionan a través de un servidor JSON, emulando una base de datos.

## Características

- **Agregar Productos**: Permite a los usuarios agregar nuevos productos mediante un formulario.
- **Eliminar Productos**: Cada tarjeta de producto tiene un botón de eliminación para remover productos de la lista.
- **Validación de Formulario**: Validación del formulario de entrada utilizando JavaScript.
- **Interfaz Dinámica**: Los productos se muestran dinámicamente a partir de datos obtenidos de un servidor JSON.
- **Metodología BEM y Mobile-First**: Se aplicó la metodología BEM (Block Element Modifier) para la organización del CSS y el enfoque Mobile-First para el diseño responsivo.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **JSON Server**

## Conocimientos Aplicados

- **Manejo de APIs**: Utilización de métodos HTTP como POST y DELETE para la gestión de productos.
- **Diseño Responsivo**: Adaptación de la interfaz para diferentes dispositivos (móvil, tablet, escritorio).
- **Validación de Formulario**: Implementación de validaciones de entrada del usuario en el formulario.

## Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/keyboard-stock.git
    cd keyboard-stock
    ```

2. **Instalar JSON Server**:
    ```bash
    npm install -g json-server
    ```

3. **Iniciar JSON Server**:
    ```bash
    json-server --watch data.json
    ```

4. **Abrir `index.html` en tu navegador**.

## Sección de Imágenes

### Interfaz en Móvil
![Interfaz en Móvil](/assets/movil.png)

### Interfaz en Tablet
![Interfaz en Tablet](/assets/tablet.png)

### Interfaz en Escritorio
![Interfaz en Escritorio](/assets/escritorio.png)

## Inspiración

Este proyecto fue realizado como parte de un desafío de Oracle Next Education llamado Alura Geek. La idea y el contenido original han sido modificados y personalizados para crear Keyboard Stock.

---

### Desarrollado por Alan Camarena, 2024
