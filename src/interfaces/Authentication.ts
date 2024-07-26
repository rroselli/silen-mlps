export interface UserData {
  userId: string;
  nome: string;
  cognome: string;
  codiceFiscale: string;
  email: string;
  tipoAutenticazione: string;
  numeroprofili: number;
  profiloCorrente: null;
  spidIndirizzo: string;
  spidExpirationDate: string;
  spidEmail: string;
  spidMobilePhone: string;
  spidNumeroDocumento: string;
  spidDataNascita: string;
  spidCodiceLuogoDiNascita: string;
  spidStatoNascita: string;
  spidSesso: string;
  gruppiAD: string[];
  officeAD: string;
  haUnicaDelegaInAssoluto: boolean;
  iS_AD_USER: boolean;
  ruoli: any[];
  jwtToken: string;
  jwtTokenExpire: string;
  profiliUtente: null;
}
