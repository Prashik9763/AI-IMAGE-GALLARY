import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';  // Import DashboardComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark AppComponent as standalone
  imports: [DashboardComponent],  // Import DashboardComponent here
})
export class AppComponent {
toggleTheme() {
throw new Error('Method not implemented.');
}
  title = 'Ai-image-gallery';
}
