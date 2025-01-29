import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter();

  onSearchTextChange(event: any): void {
    this.searchTextChanged.emit(event.target.value);
  }
}
