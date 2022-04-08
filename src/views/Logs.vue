<template>
  <div class="page-container">
    <!-- Content Wrapper START -->
    <div class="main-content">
      <div class="page-header">
        <h2 class="header-title">Logs</h2>
        <div class="header-sub-title">
          <nav class="breadcrumb breadcrumb-dash">
            <router-link :to="`/`" class="breadcrumb-item">
              <i class="anticon anticon-home m-r-5"></i>Home
            </router-link>
            <span class="breadcrumb-item active">Logs</span>
          </nav>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="">
            <section v-if="!isLoading">
              <div class="row">
                <div class="col-lg-12 add-form">
                  <input class="form-control datatable_search" @keyup="searchDatatable" placeholder="Search..."/>
                </div>
              </div>
              <table class="dataTable table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Browser</th>
                    <!-- <th>Device</th> -->
                    <th>Status</th>
                    <th>Submitted On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="applicationLog in applicationLogs" :key="applicationLog.id">
                    <td>{{applicationLog.id}}</td>
                    <td>{{applicationLog.name}}</td>
                    <td>{{applicationLog.mail}}</td>
                    <td>{{applicationLog.phone}}</td>
                    <td>{{applicationLog.device}}</td>
                    <!-- <td>{{applicationLog.browser}}</td> -->
                    <td>{{applicationLog.status}}</td>
                    <td>
                      <span style="display:none;">
                        {{new Date(applicationLog.created_at).getTime()}}
                      </span>
                      {{applicationLog.created_at}}
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </section>
            <div class="main-loader" v-else>
              <MainLoader></MainLoader>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      isLoading: false,
      datatable: null,
      applicationLogs: []
    }
  },
  mounted () {
    let dataTableScript = document.createElement('script')
    dataTableScript.setAttribute('src', 'https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js')
    document.head.appendChild(dataTableScript)
    this.fetchAllLogs()
  },
  methods: {
    fetchAllLogs () {
      this.applications = []
      this.isLoading = true
      this.$store.dispatch('fetchAllLogs')
        .then((result) => {
          result.data.applicationLogs.forEach(applicationLog => {
            this.applicationLogs.push(applicationLog)
          })
          this.isLoading = false
          setTimeout(() => this.initDatatables(), 100)
        })
        .catch((err) => this.$helper.catchHandler(err))
    },
    searchDatatable (e) {
      this.datatable.search(e.target.value).draw()
    },
    initDatatables () {
      this.datatable = $('table').DataTable({
        destroy: true,
        stateSave: true,
        pagingType: 'full_numbers',
        stateSaveCallback: function (settings, data) {
          localStorage.setItem('DataTables_accounts_page', JSON.stringify(data))
        },
        stateLoadCallback: function (settings) {
          return JSON.parse(localStorage.getItem('DataTables_accounts_page'))
        },
        drawCallback: function (settings) {
          $('.previous').html("<img src='/static/images/left_arrow.svg'>")
          $('.next').html("<img src='/static/images/right_arrow.svg'>")
          $('.first').addClass('d-inline')
          $('.first').html("<img src='/static/images/left_arrow.svg'><img src='/static/images/left_arrow.svg'>")
          $('.last').addClass('d-inline')
          $('.last').html("<img src='/static/images/right_arrow.svg'><img src='/static/images/right_arrow.svg'>")
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
