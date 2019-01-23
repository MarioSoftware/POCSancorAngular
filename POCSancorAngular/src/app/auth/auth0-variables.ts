interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'GYY8_ra1iaOkj-TQBQu4pCRyyFruI7do',
  domain: 'sancorpoc.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
