import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TooltipModule, DialogModule, ButtonModule, SidebarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displayLogsModal = false;
  menuVisible: boolean = false; // <-- controla la visibilidad del sidebar

  constructor(private router: Router) {}

  showLogs() {
    this.displayLogsModal = true;
  }

  hideLogs() {
    this.displayLogsModal = false;
  }

  logout(): void {
    this.router.navigate(['/auth/login']);
  }
}
