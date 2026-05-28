import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { SideMenuOptionComponent } from './side-menu-option/side-menu-option.component';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionComponent],
  templateUrl: './gifs-side-menu.component.html',
})
export class GifsSideMenuComponent {}
