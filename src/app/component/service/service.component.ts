import { Component } from '@angular/core';
import { DatacollectionService } from 'src/app/shared/datacollection.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {listPets:any[]=[]
  listPetsFinal:any[]=[]
  constructor(private dataCol:DatacollectionService)
  {

  }
  ngOnInit(): void {
    this.listPets=this.dataCol.petList
    this.listPetsFinal=this.dataCol.petList
  }

  changeToCats()
  {
    this.listPets=this.listPetsFinal.filter(e=>e.categorie=="Cats")
  }
  changeToDogs()
  {
    this.listPets=this.listPetsFinal.filter(e=>e.categorie=="Dogs")
  }

}
