import { Component, Input } from '@angular/core';
import { Apli } from './apli';

@Component({
    selector: 'apli-detalle',
    templateUrl: './apli-detalle.component.html',
    styleUrls: ['./apli-detalle.component.css']
})
export class ApliDetalleComponent{
    @Input() apli : Apli;

}