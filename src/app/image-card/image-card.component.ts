import { Component, Input } from '@angular/core';
import { Image } from '../image.model';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {
openModal(_t2: any) {
throw new Error('Method not implemented.');
}
  @Input() image: Image | undefined;
}
