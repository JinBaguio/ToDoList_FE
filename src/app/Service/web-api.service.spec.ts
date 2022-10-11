import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WebApiService } from './web-api.service';

describe('WebApiService', () => {
  let service: WebApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WebApiService);
  });

  it('should be created WebApiService', () => {
    expect(service).toBeTruthy();
  });
});
