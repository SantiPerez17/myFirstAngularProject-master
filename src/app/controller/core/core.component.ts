import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PrimerHijoComponent } from './primer-hijo/primer-hijo.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  @ViewChild('inputNombre', { static: true }) inputNombre!: ElementRef;
  @ViewChild(PrimerHijoComponent, { static: true }) primerHijo!: PrimerHijoComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.inputNombre.nativeElement.focus();
  }

  mostrar() {
    this.primerHijo.titulo = "Lo modifique desde el padre"
  }

}
