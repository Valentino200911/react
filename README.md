# Proyecto con React: Cabañas Aguaribay

## 0.⚠️ Aclaración Importante

En la carpeta "server", así como en los hooks de CRUD de Naturaleza, "products" (ver db.json y use--Method--Nature) fue renombrado como "naturalElement".

## 1. 💡 La Idea del Proyecto

Sitio web para Cabañas Aguaribay, ubicadas en el Valle del San Javier, Tucumán, Argentina, con alojamiento para apreciar la naturaleza tucumana.

## 2. 💻 Las Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías en su interior:

* React 19 con Vite.
* React Router DOM v7.
* FontAwesome (iconos).
* JSON Server (API simulada).
* CSS puro con media queries (versiones responsive para celular y tablet).

## 3. 🏢 La Estructura de Carpetas

```text
TP-23-06-26/               #CARPETA RAÍZ
├               
├REACT/                 #Carpeta que contiene la totalidad del proyecto
├   ├ assets/            
├   ├   ├ CSS/
├   ├      ├ Cabañas.css
├   ├      ├ Contacto.css
├   ├      ├ General.css
├   ├      ├ Home.css
├   ├      ├ Indice.css    
├   ├      ├ MobileMediaQuery.css #Media Query de entre 0px a 767px (Mobile)
├   ├      ├ Naturaleza.css
├   ├      ├ RegisterAndLogin.css
├   ├      ├ ServiciosTuristicos.css
├   ├      ├ TabletMediaQuery.css #Media Query de entre 768px a 1023px (Tablet)
├   ├ 
├   ├ node_modules/  
├   ├       
├   ├ public/
├   ├   ├ cabaña1/
├   ├   ├   ├ Cabaña 1.1.jpg
├   ├   ├   ├ Cabaña 1.2.jpg
├   ├   ├   ├ Cabaña 1.3.jpg
├   ├   ├   ├ Cabaña 1.4.jpg
├   ├   ├
├   ├   ├ cabaña2/
├   ├   ├   ├ Cabaña 2.1.jpg
├   ├   ├   ├ Cabaña 2.2.jpg
├   ├   ├   ├ Cabaña 2.3.jpg
├   ├   ├   ├ Cabaña 2.4.jpg
├   ├   ├
├   ├   ├ cardImages/
├   ├   ├   ├ BOSQUE DE LA MEMORIA.jpg
├   ├   ├   ├ CASCADA DEL RÍO NOQUE.jpg
├   ├   ├   ├ CRISTO BENDICENTE.jpg
├   ├   ├   ├ SENDERO EL FUNICULAR.jpg
├   ├   ├
├   ├   ├ footerImages/
├   ├   ├   ├ booking.png
├   ├   ├   ├ facebook.png
├   ├   ├   ├ instagram.png
├   ├   ├   ├ whatsapp.png
├   ├   ├
├   ├   ├ heroSection.png    
├   ├   ├ loadingImage.gif
├   ├   ├ logo.png
├   ├   
├   ├ src
├   ├   ├ components/
├   ├   ├          ├generalComponents/ 
├   ├   ├          ├   ├cards/
├   ├   ├          ├   ├   ├Button.jsx
├   ├   ├          ├   ├   ├Card.jsx
├   ├   ├          ├   ├   ├NatureCard.jsx
├   ├   ├          ├   ├   
├   ├   ├          ├   ├form/
├   ├   ├          ├   ├   ├ContactForm.jsx
├   ├   ├          ├   ├   ├Input.jsx
├   ├   ├          ├   ├   ├Option.jsx
├   ├   ├          ├   ├   ├ReservationForm.jsx
├   ├   ├          ├   ├   ├Select.jsx
├   ├   ├          ├   ├   ├SelectorInput.jsx
├   ├   ├          ├   ├   ├Textarea.jsx
├   ├   ├          ├   ├   
├   ├   ├          ├   ├galleries/
├   ├   ├          ├   ├   ├FirstGallery.jsx
├   ├   ├          ├   ├   ├Images.jsx
├   ├   ├          ├   ├   ├SecondGallery.jsx
├   ├   ├          ├   ├   
├   ├   ├          ├   ├messages/
├   ├   ├          ├      ├GeneralError.jsx
├   ├   ├          ├      ├GeneralLoading.jsx
├   ├   ├          ├      
├   ├   ├          ├footer/
├   ├   ├          ├   ├Footer.jsx
├   ├   ├          ├   ├MediaList.jsx
├   ├   ├          ├   
├   ├   ├          ├header/
├   ├   ├          ├  ├Header.jsx
├   ├   ├          ├  ├Logo.jsx
├   ├   ├          ├  ├Nav.jsx
├   ├   ├          ├  ├RouteNavList.jsx
├   ├   ├          ├     
├   ├   ├          ├layout/
├   ├   ├          ├   ├Layout.jsx
├   ├   ├          ├   
├   ├   ├          ├pages/
├   ├   ├             ├Cabañas.jsx
├   ├   ├             ├Contacto.jsx
├   ├   ├             ├Editor.jsx
├   ├   ├             ├Error.jsx
├   ├   ├             ├Home.jsx
├   ├   ├             ├Indice.jsx
├   ├   ├             ├Login.jsx
├   ├   ├             ├Naturaleza.jsx
├   ├   ├             ├Register.jsx
├   ├   ├             ├ServiciosTurísticos.jsx
├   ├   ├  
├   ├   ├ hooks/
├   ├   ├    ├ nature/
├   ├   ├    ├      ├useDeleteNature.jsx 
├   ├   ├    ├      ├useGetNature.jsx 
├   ├   ├    ├      ├useGetNatureById.jsx 
├   ├   ├    ├      ├usePatchNature.jsx 
├   ├   ├    ├      ├usePostNature.jsx 
├   ├   ├    ├  
├   ├   ├    ├ user/
├   ├   ├    ├      ├AuthContext.jsx      #Reemplaza al archivo useAuth.jsx
├   ├   ├    ├      ├useGetNatureByEmail.jsx    
├   ├   ├    ├      ├useLoginUser.jsx 
├   ├   ├    ├      ├useRegisterUser.jsx 
├   ├   ├    ├
├   ├   ├    ├ contact/
├   ├   ├    ├      ├useContact.jsx      #Hook que envía info. hacia la API Simulada desde ContactForm.jsx
├   ├   ├    ├
├   ├   ├    ├ reservation/
├   ├   ├         ├useReservation.jsx    #Hook que envía info. hacia la API Simulada desde Reservation.jsx
├   ├   ├         
├   ├   ├ App.jsx
├   ├   ├ config.js
├   ├   ├ index.css    #Archivo .css general para las páginas
├   ├   ├ main.jsx
├   ├   ├ ProtectedRoute.jsx 
├   ├   ├ router.jsx   #Ruteo de las páginas          
├   ├        
├   ├ .env             # .env privada, excluida según el .gitignore   
├   ├ .env.example     #Ejemplo de la .env   
├   ├ .gitignore   
├   ├ src
├   ├ index.html   
├   ├ package-lock.json   
├   ├ package.json   
├   ├ vite.config.js     
├
├ server                #Carpeta de la API local (Hermana de TP-23-06-26/REACT)
├   ├ node_modules/  
├   ├ .gitignore 
├   ├ db.json           #Archivo de la API local
├   ├ package-lock.json
├   ├ package.json 
├   ├ README.md          
├   
├ README.md             #Este README en sí mismo

```

---

## 3. ▶️ Inicialización del Proyecto

### Clonar el Repositiorio

```.
git clone https://github.com/Valentino200911/TP-23-06-26.git
```

### Ir a la Carpeta del Proyecto de REACT

```.
cd TP-23-06-26/REACT
```

### Instalar las Dependencias

```.
npm install
```

### Obtener el archivo .env con la URL de la API Simulada o crearlo usando lo escrito a continuación

```.
VITE_API_URL = "http://localhost:3000/"
```

### Iniciar el servidor de desarrollo (en TP-23-06-26/REACT)

```.
npm run dev
```

### Dirigirse a TP-23-06-26/server en la consola e iniciar

```.
npm run dev
```

## 4. ⚙️ Funcionalidades del Proyecto

Entre las funcionalidades del proyecto se encuentran:

* Página Principal con Hero Section.
* Sección de Cabañas con Galería.
* Servicios Turísticos con mapa embebido.
* Formulario de contacto.
* CRUD de elementos de Naturaleza (crear, editar y borrar).
* El control de los formularios del proyecto.
* La comunicación entre la API Simulada y el Frontend.
* Registración, Inicio y Cierre de Sesión de Usuario.
* Funcionalidades específicas de usuarios autenticados (renderizado condicional).

### Colecciones del server

Entre las colecciones funcionales que admite el server (db.json), se encuentran:

```.
  http://0.0.0.0:3000/naturalElement   #Formularios de Índice, Naturaleza y Editor + NatureCards.
  http://0.0.0.0:3000/user              #Formularios de Login y Register.
  http://0.0.0.0:3000/reservation       #Formulario de Reservación (Contacto.jsx).
  http://0.0.0.0:3000/contact           #Formulario de Contacto (Contacto.jsx).
```

Las colecciones de user, reservation y contact se encuentran completamente limpias.
