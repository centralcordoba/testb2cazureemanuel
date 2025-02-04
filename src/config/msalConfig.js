export const msalConfig = {
  auth: {
    clientId: 'b7be62cf-049b-48c7-9468-b18956d1dd13', // This is the ONLY mandatory field that you need to supply.
    authority: 'https://testb2cemanuel.b2clogin.com/TestB2CEmanuel.onmicrosoft.com/B2C_1_SignUpSignInDotNet', // Choose SUSI as your default authority.
    knownAuthorities: ['TestB2CEmanuel.b2clogin.com'], // Mark your B2C tenant's domain as trusted.
    redirectUri: 'http://localhost:3000/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: 'http://localhost:3000/', // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If 'true', will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: 'sessionStorage', // Configures cache location. 'sessionStorage' is more secure, but 'localStorage' gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to 'true' if you are having issues on IE11 or Edge
  }
}