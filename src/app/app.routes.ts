import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'producto', component: ProductoComponent } 
];
