import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

export default function AdminPage(){
    const {logout, user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0()

    useEffect( () => {
        const a = async function() {
            const accessToken = await getAccessTokenSilently({
                audience: 'http://localhost:3000/api',
                scope: 'producto:write categoria:write'
            })
            console.dir({accessToken})
        } 
        a()
    })

    if( isLoading ) {
        return (
            <div>Loading ... </div>
        )
    }

    return (
        isAuthenticated && (
            <div className="container">
                <h1>Admin</h1>
                <p>Bienvenido {user.name} ({user.email}).</p>
                <button onClick={() => logout({returnTo: 'http://localhost:3000/'}) }>Cerrar Sesión</button>
            </div>
        )
    )
}