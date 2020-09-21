import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'user', ): any{

    let url = URL_SERVICES + '/images';
    
    if (! img ) {

      return url + '/users/';
    }

    if( img.indexOf('https') >= 0) {
      return img;
    }


  
    switch ( tipo ){
      
      case 'user':
        url += '/users/'+ img;
        console.log('soy un userrr', url);
        
        break;
        case 'post':
        url += '/posts/' + img;
        break;
        case 'usuario':
        url += '/usuarios/' + img;  // <----- AQUI ES EL PROBLEMA
        break;

        default: console.log('Tipo de imagen no existe.');

         url += "/imagen/xxxx"
        
    }
         return url;
  }

}
