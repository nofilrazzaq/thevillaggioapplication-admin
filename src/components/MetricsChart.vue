<script>
import { Bar } from 'vue-chartjs'
export default {
  name: 'MetricsChart',
  props: ['metrics'],
  extends: Bar,
  // props: ['data', 'options'],
  data () {
    return {
      data: {
        labels: this.metrics.labels,
        datasets: [{
          label: ' Count',
          backgroundColor: '#0889a0',
          maxBarThickness: 50,
          borderWidth: 0,
          data: this.metrics.counts
        }, {
          label: ' Percentage',
          barPercentage: 0,
          backgroundColor: '#0889a0',
          borderWidth: 0,
          hidden: true,
          data: this.metrics.percentages
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            label: function (tooltipItems, data) {
              return [data.datasets[0].label + ': ' + tooltipItems.yLabel, data.datasets[1].label + ': ' + data.datasets[1].data[tooltipItems.index]]
            }
          }
        },
        scaleShowVerticalLines: false,
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [{
            display: true,
            gridLines: false,
            ticks: {
              display: true,
              fontSize: 13,
              padding: 15
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value'
            },
            gridLines: {
              drawBorder: false,
              offsetGridLines: false,
              drawTicks: false,
              borderDash: [3, 4],
              zeroLineWidth: 1,
              zeroLineBorderDash: [3, 4]
            },
            ticks: {
              display: true,
              beginAtZero: true,
              fontSize: 13,
              padding: 10
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
