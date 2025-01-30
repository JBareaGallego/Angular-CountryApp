import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();





  @Input()
  public placeholder:string = '';


  search(searchTerm:string):void{
    this.onValue.emit(searchTerm)
  }
}
