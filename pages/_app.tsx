import { Auth0Provider } from '@auth0/auth0-react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-tizhhmte.us.auth0.com"
      clientId="0fYR6sIUVHwy0Bu75kN79gDJ9hHnZFao"
      redirectUri={`http://localhost:3000/admin`}
    >
      <Component {...pageProps} />
    </Auth0Provider>

    
  )
}

export default MyApp
