import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReservationServiceService } from 'src/app/services/reservationService/reservation-service.service';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent {  @ViewChild('barCanvas')
  private barCanvas!: ElementRef<HTMLCanvasElement>;
  barChart!: Chart;
  years: number[] = [2020, 2021, 2022];
  selectedYear: number = 2021;
  housings: string[] = ['Logement A', 'Logement B', 'Logement C'];
  selectedHousing: string = 'Logement A';

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'line',  // Changé de 'bar' à 'line'
      data: {
        labels: ['jan.', 'fev.', 'mar.', 'avr.', 'mai.', 'juin.', 'juil.', 'aou.', 'sep.', 'oct.', 'nov.', 'dec.'],
        datasets: [{
          label: `Layers ${this.selectedYear} - ${this.selectedHousing}`,
          data: this.getDataForYearAndHousing(),
          backgroundColor: 'rgba(0, 123, 255, 0.2)',  // Couleur de fond plus légère pour un graphique linéaire
          borderColor: 'rgba(0, 123, 255, 1)',  // Couleur de la ligne
          borderWidth: 2,
          fill: false  // Désactive le remplissage sous la ligne
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  getDataForYearAndHousing(): number[] {
    // Simulate fetching data based on year and housing
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 7));
  }

  onYearChange() {
    this.updateChartData();
  }

  onHousingChange() {
    this.updateChartData();
  }

  updateChartData() {
    this.barChart.data.datasets[0].data = this.getDataForYearAndHousing();
    this.barChart.data.datasets[0].label = `Layers ${this.selectedYear} - ${this.selectedHousing}`;
    this.barChart.update();
  }
}