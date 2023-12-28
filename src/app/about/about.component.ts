import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  imageUrl = '../../assets/image/guitar.jpg';
  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('colorPicker')
  colorPicker!: ElementRef<HTMLInputElement>;

  private context!: CanvasRenderingContext2D;
  private painting = false;
  private lastX = 0;
  private lastY = 0;

  constructor(private renderer: Renderer2) {}

  onImageLoad() {
    const img = this.canvas.nativeElement
      .previousElementSibling as HTMLImageElement;
    this.renderer.setAttribute(
      this.canvas.nativeElement,
      'width',
      img.width.toString()
    );
    this.renderer.setAttribute(
      this.canvas.nativeElement,
      'height',
      img.height.toString()
    );

    this.context = this.canvas.nativeElement.getContext('2d')!;
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';
  }

  startPainting(event: MouseEvent) {
    this.painting = true;
    this.setPosition(event);
  }

  paint(event: MouseEvent) {
    if (!this.painting) return;

    this.context.strokeStyle = this.colorPicker.nativeElement.value;
    this.context.lineWidth = 5;

    this.context.beginPath();
    this.context.moveTo(this.lastX, this.lastY);
    this.setPosition(event);
    this.context.lineTo(this.lastX, this.lastY);
    this.context.stroke();
  }

  stopPainting() {
    this.painting = false;
  }

  fillCanvas() {
    const fillColor = this.colorPicker.nativeElement.value;
    this.context.fillStyle = fillColor;
    this.context.fillRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
  }

  private setPosition(event: MouseEvent) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    this.lastX = event.clientX - rect.left;
    this.lastY = event.clientY - rect.top;
  }
}
