import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [ButtonModule, RouterModule],
  selector: 'angular-primeng-nx-example-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-primeng-nx-example';

  isClicked = false;

  clickMe():void {
    this.isClicked = !this.isClicked;
  }
}
