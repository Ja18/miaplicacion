import { Injectable } from '@angular/core';

import { Apli } from './apli';
import { APLIS } from './aplis-falsas';

@Injectable()
export class ApliService{
  getAplis() :Promise<Apli[]>{
    //  return Promise.resolve(APLIS);
    
    return new Promise(resolve => {
        // Simlua latencia del servidor de 3 segundos
        setTimeout( () => resolve(APLIS), 3000);
    });
  }
}