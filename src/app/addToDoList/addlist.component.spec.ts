import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddToDoListComponent } from './addlist.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

describe('AddToDoListComponent', () => {
  let component: AddToDoListComponent;
  let fixture: ComponentFixture<AddToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ToastrModule.forRoot()],
      declarations: [ AddToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddToDoListComponent', () => {
    expect(component).toBeTruthy();
  });
});
