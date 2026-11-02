import {Navigate} from 'react-router-dom'
import { useAuth } from './hooks/user/useContex'


function ProtectedRoute({children}) {

    const {isAuthenticated} = useAuth()

    if (!isAuthenticated) {

        return <Navigate to="/auth/login" />

    }

    return children
}

export default ProtectedRoute