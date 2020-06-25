import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import{Equipo} from '../models/equipo';


@Injectable({
  providedIn: 'root'
})




export class EquipoService {
  equipoList: AngularFireList<any>;
  selectEquipo: Equipo = new Equipo();
  
  constructor(private firebase:AngularFireDatabase) { }

  getEquipos(){
    return this.equipoList=this.firebase.list('equipos');
  }
  insertEquipo(equipo: Equipo){
    this.equipoList.push({
      name: equipo.name,
      color: equipo.color,
      numero: equipo.numeroEquipo,
      puntos: 0,
      numeroGoles:0,
      numeroPartido:0


    });

  }
  updateEquipo(equipo: Equipo){
    this.equipoList.update(equipo.$key,{
      name: equipo.name,
      color: equipo.color,
      numero: equipo.numeroEquipo,
      numeroGoles:equipo.numeroGoles
    });

  }
  deleteEquipo($key: string){
    this.equipoList.remove($key);
  }

  updateResultados(equipo: Equipo){
    this.equipoList.update(equipo.$key,{
      puntos: equipo.puntos,
      numeroGoles:equipo.numeroGoles,
      numeroPartido:equipo.numeroPartido
    });

  }

}
