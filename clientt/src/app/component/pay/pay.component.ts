import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  barChart: any;
  years: number[] = [2020, 2021, 2022];
  selectedYear: number = 2021;
  housings: string[] = ['Logement A', 'Logement B', 'Logement C'];
  selectedHousing: string = 'Logement A';


  constructor() { }

  ngAfterViewInit (): void {
    this.createChart();
  }
  

  createChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['jan.', 'fev.', 'mar.', 'avr.', 'mai.', 'juin.', 'juil.', 'aou.', 'sep.', 'oct.', 'nov.', 'dec.'],
        datasets: [{
          label: `Pay-out versé ${this.selectedYear}`,
          data: this.getDataForYearAndHousing(this.selectedYear, this.selectedHousing),
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
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
  getDataForYearAndHousing(year: number, housing: string): number[] {
    // Simulate fetching data based on year and housing
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 6000));
    
    //this.getDataForYearAndHousing(this.selectedYear, this.selectedHousing).subscribe(data => {
     // this.createChart(data);
    //});
  }

  onYearChange() {
    this.updateChartData();
  }

  onHousingChange() {
    this.updateChartData();
  }

  updateChartData() {
    this.barChart.data.datasets[0].data = this.getDataForYearAndHousing(this.selectedYear, this.selectedHousing);
    this.barChart.data.datasets[0].label = `Payout versé ${this.selectedYear} - ${this.selectedHousing}`;
    this.barChart.update();
  }
}
