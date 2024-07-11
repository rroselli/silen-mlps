import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticolazioneQuoteService {
  constructor(private httpClient: HttpClient) {}
}
