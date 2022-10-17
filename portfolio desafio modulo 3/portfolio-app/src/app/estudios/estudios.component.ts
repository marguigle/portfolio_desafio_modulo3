import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  itemEstudio: any;
  itemCongreso: any;
  itemTrabPres: any;
  itemActividadDocente: any;
  constructor(private datosPortfolio: PortfolioService) {}
  miPortfolio: any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.itemEstudio = data.estudios;
      this.itemCongreso = data.congresos;
      this.itemTrabPres = data.trabPresentados;
      this.itemActividadDocente = data.actividadDocente;
    });
  }
}
