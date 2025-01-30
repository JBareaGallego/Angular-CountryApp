import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-contact-page',
  standalone:false,
  templateUrl: './contactPage.component.html',
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent { }
