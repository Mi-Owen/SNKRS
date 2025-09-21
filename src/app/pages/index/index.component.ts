import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header/header.component';
import { PromoComponent } from '../../shared/components/promo/promo.component';
import { CategoriasComponent } from '../../shared/components/categorias/categorias.component';

// Import de PrimeNG
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'], // corregido: styleUrls (plural)
  standalone: true,
  imports: [
    HeaderComponent,
    PromoComponent,
    CategoriasComponent,
    ButtonModule  // <-- aquí agregas PrimeNG Button
  ]
})
export class IndexComponent {}
