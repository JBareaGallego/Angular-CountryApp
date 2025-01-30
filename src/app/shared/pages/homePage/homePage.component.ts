import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-home-page',
  templateUrl: './homePage.component.html',
  standalone:false,
  styles: []
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
