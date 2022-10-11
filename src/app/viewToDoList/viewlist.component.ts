import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'appToDoList',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.scss']
})
export class ViewListComponent implements OnInit {

  listId: any;
  listDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.listId = this.route.snapshot.params['No'];      
    this.getListById();
  }

  getListById() {       
    this.httpProvider.getListById(this.listId).subscribe((data : any) => {      
      if (data != null && data[0] != null) {
        this.listDetail = data[0];
      }
    },
    ()=> { }); 
  }

}