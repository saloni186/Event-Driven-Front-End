import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUploadComponent } from './features/upload/components/file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FileUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
