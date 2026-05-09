// file-upload.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {

  selectedFile: File | null = null;

  onFileSelected(event: any): void {

    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  upload(): void {

    if (!this.selectedFile) {
      alert('Please select a file');
      return;
    }

    alert(`Uploading: ${this.selectedFile.name}`);
  }

  removeFile(): void {
    this.selectedFile = null;
  }

  getFileSize(size: number): string {

    const mb = size / (1024 * 1024);

    return `${mb.toFixed(2)} MB`;
  }
}