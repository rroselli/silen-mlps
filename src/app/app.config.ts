import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import localeIt from '@angular/common/locales/it';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MessageService } from 'primeng/api';
import { environment } from '../environments/environment.prod';
import { routes } from './app.routes';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.urlTranslate, '.json');
}

registerLocaleData(localeIt);

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }).providers!,
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'it-IT' },
    provideStore(),
  ],
};
