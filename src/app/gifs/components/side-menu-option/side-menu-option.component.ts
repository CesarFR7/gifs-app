import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  sublabel: string;
}

@Component({
  selector: 'gifs-side-menu-option',
  imports: [],
  templateUrl: './side-menu-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-nagnifing-line',
      label: 'search',
      sublabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];
}
