import { TestBed } from '@angular/core/testing';

import { FileMonitorService } from './file-monitor.service';

describe('FileMonitorService', () => {
  let service: FileMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
