import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-about-page',
  standalone:false,
  templateUrl: './aboutPage.component.html',
  styles: []
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }
