# Cambios en el front

## 09 de octubre de 2026

- Corrección de errores de MD para que no estorben
- Instalación de axios
- Adición de algunas funciones isAdmin para la NatureCard
- Adición de isAdmin en AuthContext
- Algunas de las funciones de isAuthenticated pasan a isAdmin
- Cambios en la autenticación para las rutas de nature y contact
- Creación de la carpeta src/utils
- Creación de los archivos api.js y adapters.js

## 01 de noviembre de 2026

- Duplicado del proyecto original de front para adaptarlo
- Creación de un nuevo repositorio para el proyecto
**Primer commit del proyecto en GitHub**
- Eliminación de los archivos api.js y adapters.js
- Se creó la carpeta documents/ para alojar este archivo
**Segundo commit del proyecto en GitHub**
- Cambios en la estructura del formulario de Reservation.jsx. Revisiones del correspondiente hook
- Cambios en la estructura del formulario de Login.jsx. Revisiones del correspondiente hook
**Tercer commit del proyecto en GitHub**
- Creación de `documents/gaps.md`
**Cuarto commit del proyecto en GitHub**
- Creación de `src/utils/constants/` por si es necesario en el futuro
- Verificación de los nombres de rutas. Todas coinciden con el backend, salvo naturalElements, por ende se la modifica en los hooks a naturalElement
**Quinto commit del proyecto en GitHub**
- Cambios en la estructura de Reservation para que matchee con el front (hook y front)
  - Se descentralizo la page de `Contacto.jsx` en `Reservation.jsx` y `Contact.jsx`
**Sexto commit del proyecto en GitHub**
- Modificaciones a Nav.jsx y a RouteNavList.jsx
- Cambios en router.jsx, cambios en las rutas de Contact.jsx y adición de la ruta de Reservation.jsx
- Cambios en la estructura de componentización de SelectorInput.jsx y ReservationForm.jsx
**Séptimo commit del proyecto en GitHub**
- Protección de las rutas recién creadas, así como de otras anteriormente modificadas a mediante ProtectedRoutes.jsx
**Octavo commit del proyecto en GitHub**
- Cambios en la estructura del formulario de ContactForm.jsx
- Eliminación del archivo Select.jsx debido a que rompía con la idea de la componetización
- Cambios en las importaciones de index.css
**Noveno commit del proyecto en GitHub**
- Adición de un Select en ReservationForm.jsx para definir el método de pago
- Cambios en la estructura de ReservationForm.jsx
- Cambios en el CSS correspondiente
- Registro de gaps
**Décimo commit del proyecto en GitHub**
- Reordenamiento de la Estructura de carpetas general del proyecto
  - Las carpetas `essentials` son los componentes esenciales sobre los cuales se forman otros componentes
  - El orden a modificar es el siguiente:

    **Undécimo commit del proyecto en GitHub**

      - Cambios en el ordenamiento de la carpeta footer, añadiendose `essentials/MediaList.jsx`
