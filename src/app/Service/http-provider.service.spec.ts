import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpProviderService } from './http-provider.service';

describe('HttpProviderService', () => {
  let service: HttpProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpProviderService);
  });

  it('should be created HttpProviderService', () => {
    expect(service).toBeTruthy();
  });
});
