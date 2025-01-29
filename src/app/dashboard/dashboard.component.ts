import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,  // Make sure the component is standalone
  imports: [CommonModule, FormsModule],  // Add FormsModule here
})
export class DashboardComponent {
  images = [
    { title: 'Image 1', imageUrl: 'url1', generationDate: '2025-01-01', aiModel: 'Stable Diffusion' },
    { title: 'Image 2', imageUrl: 'url2', generationDate: '2025-01-02', aiModel: 'DALL·E 2' },
    // Add more image objects here
  ];
  filteredImages = [...this.images];
  searchText = '';
  selectedModel = '';

  onSearchChange() {
    this.filteredImages = this.images.filter(image =>
      image.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onModelChange() {
    this.filteredImages = this.images.filter(image =>
      image.aiModel === this.selectedModel || this.selectedModel === ''
    );
  }
}
