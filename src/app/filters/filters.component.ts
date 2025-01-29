import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() filterByModel: EventEmitter<string> = new EventEmitter();

  onModelChange(event: any): void {
    this.filterByModel.emit(event.target.value);
  }
}
