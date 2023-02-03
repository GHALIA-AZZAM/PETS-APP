import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatacollectionService } from 'src/app/shared/datacollection.service';

@Component({
  selector: 'app-detailt',
  templateUrl: './detailt.component.html',
  styleUrls: ['./detailt.component.css']
})
export class DetailtComponent {thePet:any

  constructor(private dataCol:DatacollectionService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {

    this.dataCol.petList.filter(e=>e.id==this.activatedRoute.snapshot.paramMap.get("id")).forEach(res=>
      {
        this.thePet=res
      })

      console.log(this.thePet)
  }

}
