/// <reference types="vite/client" />

// Tell TypeScript that Window can have these custom Firebase properties
interface Window {
  recaptchaVerifier: any;
  confirmationResult: any;
}