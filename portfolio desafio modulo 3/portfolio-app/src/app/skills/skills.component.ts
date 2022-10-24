import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  miPortfolio: any;
  itemSkills: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.miPortfolio = data;
      this.itemSkills = data.hardSkills;
    });
  }
}
