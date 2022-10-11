import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditListComponent } from './edit-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('EditListComponent', () => {
  let component: EditListComponent;
  let fixture: ComponentFixture<EditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ToastrModule.forRoot()],
      declarations: [ EditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EditListComponent', () => {
    expect(component).toBeTruthy();
  });
});
