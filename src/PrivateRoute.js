import { Outlet, Navigate } from 'react-router-dom'
import auth from './Firebase'


const PrivateRoutes = () => {
    return(
        auth.currentUser ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes