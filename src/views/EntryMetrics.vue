<template>
  <div class="page-container">
    <!-- Content Wrapper START -->
    <div class="main-content">
      <div class="page-header">
        <h2 class="header-title">Entry Metrics</h2>
        <div class="header-sub-title">
          <nav class="breadcrumb breadcrumb-dash">
            <router-link :to="`/`" class="breadcrumb-item">
              <i class="anticon anticon-home m-r-5"></i>Home
            </router-link>
            <span class="breadcrumb-item active">Metrics</span>
          </nav>
        </div>
      </div>
      <div class="card">
        <div class="card-body height-auto">
          <div class="conainer">
            <div class="row">
              <div class="col-md-5">
                <label class="w-100">
                  <div class="w-100">
                    <select @change="fetchMetrics" v-model="metricsType" class="form-control" name="state">
                      <option value="All">Show All</option>
                      <option value="BedroomSize" selected="">Type of Unit</option>
                      <option value="Language">Primary Language</option>
                      <option value="ReferralMethod">Referral Method</option>
                      <option value="DisabledDesign">ADA Unit Requested</option>
                      <!-- <option value="WorkingWithAgency">Working with Case Worker or Agency</option> -->
                      <option value="Ethnicity">Race/Ethnicity</option>
                      <option value="Gender">Occupants' Gender</option>
                      <option value="Relationship">Occupants' Relationship to Head of Household</option>
                      <option value="HouseholdVehicleCount">Number of Vehicles reported by Household</option>
                      <option value="Bankruptcy">Bankruptcy</option>
                      <option value="Felony">Felony</option>
                      <option value="Eviction">Eviction</option>
                      <option value="Section8">Currently Receive Section 8 Rental Assistance</option>
                      <option value="RentalVoucher">Section 8, Choice Voucher, VASH or Other Voucher</option>
                      <option value="ResidentCount">Number of Residents per Household</option>
                      <option value="ApplicationCity">Top 5 Cities Applied From</option>
                      <!-- <option value="HouseholdComposition">Household Composition</option> -->
                      <option value="DrugCrimeHistory">Drug/paraphernalia Use, Possession or Distribution</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section v-if="metrics.length">
        <div class="row" v-for="metric in metrics" :key="metric.type">
          <div class="col-lg-5">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="m-0">{{headings[metric.type]}}</h5>
                </div>
                <div class="text-center m-t-30">
                  <table class="dataTable table">
                    <thead>
                      <tr>
                        <th v-for="header in metric.tableData.headers" :key="header">{{header}}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="data in metric.tableData.data" :key="data.label">
                        <td>{{data.label}}</td>
                        <td>{{data.count}}</td>
                        <td>{{data.percentage}}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th v-for="footer in metric.tableData.footers" :key="footer">{{footer}}</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h5>Metrics</h5>
                </div>
                <div class="m-t-30">
                  <MetricsChart :metrics="metric.chartData"></MetricsChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="row" v-else>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="main-loader">
                <MainLoader></MainLoader>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetricsChart from '@/components/MetricsChart'
export default {
  name: 'EntryMetrics',
  components: {
    MetricsChart
  },
  data () {
    return {
      metrics: [],
      metricsType: 'BedroomSize',
      headings: {
        All: 'Show All',
        BedroomSize: 'Type of Unit',
        Language: 'Primary Language',
        ReferralMethod: 'Referral Method',
        DisabledDesign: 'ADA Unit Requested',
        WorkingWithAgency: 'Working with Case Worker or Agency',
        Ethnicity: 'Race/Ethnicity',
        Gender: 'Occupants Gender',
        Relationship: 'Occupants Relationship to Head of Household',
        HouseholdVehicleCount: 'Number of Vehicles reported by Household',
        Bankruptcy: 'Bankruptcy',
        Felony: 'Felony',
        Eviction: 'Eviction',
        Section8: 'Currently Receive Section 8 Rental Assistance',
        RentalVoucher: 'Section 8, Choice Voucher, VASH or Other Voucher',
        ResidentCount: 'Number of Residents per Household',
        ApplicationCity: 'Top 5 Cities Applied From',
        HouseholdComposition: 'Household Composition',
        DrugCrimeHistory: 'Drug/paraphernalia Use, Possession or Distribution'
      }
    }
  },
  mounted () {
    this.fetchMetrics()
  },
  methods: {
    fetchMetrics () {
      this.metrics = []
      this.$store.dispatch('fetchMetrics', this.metricsType)
        .then((result) => {
          if (this.metricsType === 'All') {
            var that = this
            $.each(result.data, function (key, value) {
              that.initMetric(key, value)
            })
            return
          }
          this.initMetric(this.metricsType, result.data)
        })
        .catch((err) => this.$helper.catchHandler(err))
    },
    initMetric (index, responseMetric) {
      var metrics = {
        type: index,
        tableData: {
          headers: [
            'Response', 'Count', 'Percentage'
          ],
          footers: [
            'TOTAL', 0, ''
          ]
        },
        chartData: {
          labels: [],
          counts: [],
          percentages: []
        }
      }

      responseMetric.forEach(metric => {
        metrics.tableData.footers[1] += parseInt(metric.count)
      })
      responseMetric.forEach(metric => {
        metric.percentage = (metric.count / metrics.tableData.footers[1]) * 100
        metric.percentage = metric.percentage.toFixed(2) + '%'
      })

      metrics.tableData.data = responseMetric

      responseMetric.forEach(element => {
        metrics.chartData.labels.push(element.label)
        metrics.chartData.counts.push(element.count)
        metrics.chartData.percentages.push(element.percentage)
      })
      this.metrics.push(metrics)
    }
  }
}

</script>

<style scoped>
table.dataTable {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    border-collapse: collapse !important;
}

.card {
  height: 98%;
}

.card-body:not(.height-auto) {
  /* min-height: 550px; height: 550px; */
  /* overflow: scroll; */
  min-height: 510px;
}

.table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
  padding: 10px;
}
</style>
