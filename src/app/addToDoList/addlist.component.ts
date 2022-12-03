import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';
// test push code in macbooks
@Component({
  selector: 'addToDoList',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.scss']
})
export class AddToDoListComponent implements OnInit {
  addListForm: listForm = new listForm();s

  @ViewChild("listForm")
  listForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {  }

  AddList(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.addList(this.addListForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data;
            if (resultData != null && resultData.body.statusCode == 200) {
              this.toastr.success(resultData.body.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class listForm {
  id: string = "";
  dtDue: string = "";
  no: string = "";
  status: string = "";
  taskAssingd: string = "";
  taskDesc: string = "";
}