import { Component } from '@angular/core';

@Component({
  selector: 'amb-root',
  template: `
  <mat-toolbar color="primary">
    <button mat-button routerLink="table">
      mat-table
    </button>
  </mat-toolbar>

  <div class="routable-content-container">
      <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-flow: column nowrap;
      height: 100%;
    }

    .routable-content-container {
      padding: 16px;
      flex-grow: 1;
    }
  `]
})
export class AppComponent {
  title = 'angular-material-builder';
}
