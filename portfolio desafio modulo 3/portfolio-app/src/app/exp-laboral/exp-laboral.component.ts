import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css'],
})
export class ExpLaboralComponent implements OnInit {
  trabajosList: any;
  constructor(private datosPortfolio: PortfolioService) {}
  miPortfolio: any;

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.miPortfolio = data;
      this.trabajosList = data.trabajos;
    });
  }
}
