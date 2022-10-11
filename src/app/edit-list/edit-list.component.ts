import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  editListForm: updateForm = new updateForm();

  @ViewChild("updateForm")
  updateForm!: NgForm;

  isSubmitted: boolean = false;
  listId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.params['No'];
    this.getListById();
  }

  getListById() {
    this.httpProvider.getListById(this.listId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editListForm.id = resultData.id;
          this.editListForm.dtDue = resultData.No;
          this.editListForm.no = resultData.TaskDescription;
          this.editListForm.status = resultData.TaskAssigned;
          this.editListForm.taskAssingd = resultData.DateDue;
          this.editListForm.taskDesc = resultData.Status;
        }
      }
    },
      () => { });
  }

  EditList(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.updateList(this.editListForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data;
          if (resultData != null && resultData.body.statusCode == 200) {
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

export class updateForm {
  id: string = "";
  dtDue: string = "";
  no: string = "";
  status: string = "";
  taskAssingd: string = "";
  taskDesc: string = "";
}