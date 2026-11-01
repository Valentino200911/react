import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './components/pages/Home'
import Error from './components/pages/Error'
import Cabañas from './components/pages/Cabañas'
import ServiciosTuristicos from './components/pages/ServiciosTuristicos'
import Naturaleza from './components/pages/Naturaleza'
import Indice from './components/pages/Indice'
import Contacto from './components/pages/Contacto'
import Editor from './components/pages/Editor'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import ProtectedRoute from './ProtectedRoute'

export const router = createBrowserRouter([

    {
        path: "/",

        element: <App />,

        children: [

            {
                index: true,

                element: <Home />

            },

            {
                path: "/cabañas",

                element: <Cabañas />                

            },

            {
                path: "/serviciosturisticos",

                element: <ServiciosTuristicos />                

            },

            {
                path: "/contacto",

                element: <Contacto />                

            },


            {
                path: "/naturaleza",

                element: <Naturaleza />                

            },

            {
            
                path: "/naturaleza/indice",
            
                element: <ProtectedRoute><Indice /></ProtectedRoute>
            
            },
            
            {
            
                path: "/naturaleza/editor/:id",
            
                element: <ProtectedRoute> <Editor /> </ProtectedRoute>
            
            },


            {
                path: "/user/login",

                element: <Login />                

            },
            {
                path: "/user/register",

                element: <Register />                

            },

            {
                //errorRoute, por comodidad el html está escrito en Error.jsx

                path: "*",

                element: <Error />

            },

        ]

        

    }

])