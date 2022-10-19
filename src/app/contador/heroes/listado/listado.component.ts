import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  heroes: string[]=['Superman','Thor', 'Ironman','Hulk','Spiderman'];
  heroeBorrado: string='';
  
  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift()|| '';
  }
  constructor() {
    console.log('constructor');
   }
}
