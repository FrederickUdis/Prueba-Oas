import { Component, OnInit } from '@angular/core';

//service
import{EquipoService} from '../../../service/equipo.service'
import { Equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  equipoList: Equipo[];

  constructor(private equipoService:EquipoService) {


  }

  ngOnInit(): void {
    this.equipoService.getEquipos()
    .snapshotChanges()
    .subscribe(item=>{
      this.equipoList=[];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.equipoList.push(x as Equipo)
      })

    })
  }
  onEdit(equipo:Equipo,numero:number){
    equipo.numeroEquipo=numero
    this.equipoService.selectEquipo = Object.assign({},equipo)

  }
  onDelete($key:string){
    this.equipoService.deleteEquipo($key)
  }



}
