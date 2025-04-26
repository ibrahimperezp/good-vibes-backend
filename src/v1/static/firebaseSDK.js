import { initializeApp, cert } from 'firebase-admin/app'
import { config } from 'dotenv'
config()

const {
  PRIVATE_KEY_ID,
  PRIVATE_KEY,
  CLIENT_ID,
  CLIENT_EMAIL,
  CLIENT_CERT,
  PROJECT_ID
} = process.env

const readPrivateKey = () => { return PRIVATE_KEY.replaceAll(/\$/g, '\n') }

export const firebaseApp = initializeApp({
  credential: cert({
    type: 'service_account',
    project_id: PROJECT_ID,
    private_key_id: PRIVATE_KEY_ID,
    private_key: readPrivateKey(),
    client_email: CLIENT_EMAIL,
    client_id: CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: CLIENT_CERT,
    universe_domain: 'googleapis.com'
  })
})
