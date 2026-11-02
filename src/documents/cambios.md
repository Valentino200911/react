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
  - Las carpetas `essentialsValue/` son los componentes esenciales sobre los cuales se forman otros componentes
  - El orden a modificar es el siguiente:
  - (Los cambios en las importaciones se harán al final aprovechando los errores)

    - components
      - footer
      - generalComponents
        - cards
        - fontawesome
        - form
        - galleries
        - messages
      - header
      - layout
      - pages

    **Undécimo commit del proyecto en GitHub:**

    - Cambios en el ordenamiento de la carpeta footer, añadiendose `essentials/MediaList.jsx`

    **Duodécimo commit del proyecto en GitHub:**

    - Cambios en el nombre, ahora es `essentialsFooter/MediaList.jsx`
    - Cambios y correcciones en MediaList.jsx

    **Decimotercer commit del proyecto en GitHub:**

    - Cambios en el ordenamiento de la carpeta generalComponents/cards, añadiendose `essentialsCard/Button.jsx`
    - Se creó `typeCard/` para NatureCard.jsx y Card.jsx

    **Decimocuarto commit del proyecto en GitHub:**

    - Cambios en el ordenamiento de la carpeta generalComponents/form, añadiendose `essentialsForm/`, que incluye a los archivos Input.jsx, SelectorInput.jsx, Textarea.jsx y Option.jsx
    - Se creó `typeForm/` para ContactForm.jsx y ReservationForm.jsx

    **Decimoquinto commit del proyecto en GitHub:**

    - Cambios en el ordenamiento de la carpeta generalComponents/galleries, añadiendose `essentialsGalleries/Image.jsx`
    - Se creó `typeGallery/` para FirstImageGallery.jsx y SecondImageGallery.jsx

    **Decimosexto commit del proyecto en GitHub:**

    - Cambios en el ordenamiento de la carpeta header/, añadiendose `essentialsHeader/` para Logo.jsx, Nav.jsx y RouteNavList.jsx  

    **Decimoséptimo commit del proyecto en GitHub:**

    - En la estructura de carpetas de public/. Reorganización para una mejor identificación de las img.

    **Decimoctavo commit del proyecto en GitHub:**

    - Inicio de la depuración de los problemas en las importaciones

    **Décimo noveno commit del proyecto en GitHub:**

    - La página ya es visible, inicio de la segunda parte de las depuraciones
    - Fin de la segunda parte de las depuraciones

- Regreso a la registración normal de la bitácora
- Inicio del proceso de conexión entre el BACK y el FRONT
  - Cambios en los nombres de las rutas para los hooks, Nav.jsx, ProtectedRoutes.jsx y router.jsx
  - Cambios en config.js para permitir la habilitación de la .env
**Vigésimo commit del proyecto en GitHub:**

### 2 de noviembre de 2026

- Desarrollo de las configuraciones para habilitar el token y permitir la conexión entre el back y front
- Descentralización de las funcionalidades de AuthContext.jsx
- Creación de la carpeta `context/` con `AuthContext.jsx`
- Creación del archivo `user/useContext.jsx`
**Vigésimo primer commit del proyecto en GitHub:**
