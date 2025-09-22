import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../shared/components/header/header/header.component';
import { PromoComponent } from '../../shared/components/promo/promo.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    HeaderComponent,
    PromoComponent
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @ViewChild('thumbnailContainer') thumbnailContainer!: ElementRef;

  productImages = [
    'images/jordan 3.jpg',
    'images/Jordan1.jpg',
    'images/Jordan 2.jpg',
  ];

  selectedImage: string = this.productImages[0];

  sizes = [
    { label: 'CM 24 (US 5.5)' }, { label: 'CM 24 (US 6)' },
    { label: 'CM 24.5' }, { label: 'CM 25' },
    { label: 'CM 25.5' }, { label: 'CM 26' },
    { label: 'CM 26.5' }, { label: 'CM 27' },
    { label: 'CM 27.5' }, { label: 'CM 28' },
  ];

  selectedSize: string | null = 'CM 25';

  changeImage(image: string): void {
    this.selectedImage = image;
  }

  selectSize(sizeLabel: string): void {
    this.selectedSize = sizeLabel;
  }

  scrollThumbnails(direction: 'left' | 'right') {
    const container = this.thumbnailContainer.nativeElement;
    const scrollAmount = 100;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
