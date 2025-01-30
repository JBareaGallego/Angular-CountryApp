import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
  standalone:false,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent { }
