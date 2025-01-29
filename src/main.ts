import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';

bootstrapApplication(AppComponent, {
  providers: [],
}).catch(err => console.error(err));
