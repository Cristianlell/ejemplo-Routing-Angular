import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.inerface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IContact): string {
    return `${contacto.nombre} ${contacto.apellido}`;
  }

}
