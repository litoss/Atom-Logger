'use babel';
import atomLogger from './atom-logger';
import Chart from 'chart.js';

export default class ChartView{
  constructor(title) {
    this.config = this.createConfig(title);
    this.element = document.createElement('canvas');
    this.chart = new Chart(this.element, this.config);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  createConfig(title){

    var conf = {
      type : 'doughnut',
      data : {
        labels : ['No changes'],
        datasets : [{
          data : ['1'],
          backgroundColor : ['grey']
        }]
      },
      options: {
        legend: {
          labels: {
            fontColor: getComputedStyle(atomLogger.dashView.title).color
          },
          position: 'left'
        },
        title: {
          fontColor: getComputedStyle(atomLogger.dashView.title).color,
          display: true,
          text : title
        },
        animation: {
          animateRotate :true
        }
      }
    }
    return conf;
  }

  update(data) {
    if(Object.values(data).reduce((acc,item) => acc + item, 0) != 0){
      this.chart.config.data.datasets[0].data = Object.values(data);
      this.chart.config.data.datasets[0].backgroundColor = ['springgreen','tomato','gold'];
      this.chart.config.data.labels = Object.keys(data);
      this.chart.update();
    }
  }
}
