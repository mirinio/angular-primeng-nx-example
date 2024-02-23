import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  standalone: true,
  imports: [ButtonModule, TabMenuModule, RouterModule, BadgeModule, NgIf],
  selector: 'angular-primeng-nx-example-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  items = signal<MenuItem[] | undefined>([
    { label: 'Home' },
    { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
    { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' }
  ]);

  activeItem: MenuItem | undefined;

  ngOnInit() {
    const items = this.items();
    if (items) this.activeItem = items[0];
  }

  myclick() {
    console.log('clicked');

    const items = this.items();
    if (items) items[0].badge = 'hi';
    this.items.set(items);
  }
}
