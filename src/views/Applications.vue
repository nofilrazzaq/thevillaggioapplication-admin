<template>
  <div class="page-container">
    <!-- Content Wrapper START -->
    <div class="main-content">
      <div class="page-header">
        <h2 class="header-title">Applications</h2>
        <div class="header-sub-title">
          <nav class="breadcrumb breadcrumb-dash">
            <router-link :to="`/`" class="breadcrumb-item">
              <i class="anticon anticon-home m-r-5"></i>Home
            </router-link>
            <span class="breadcrumb-item active">Applications</span>
          </nav>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="">
            <div class="row">
              <div class="col-lg-12 add-form mb-4 d-flex justify-content-end">
                <button class="btn btn-info" @click="updateApplicationStatus">{{applicationStatusText}}</button>
                <a target="_blank" :href="getNewApplicationUrl()">
                  <button class="btn btn-info ml-3">Add New Application</button>
                </a>
              </div>
            </div>
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Submitted On</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="application in applications" :key="application.id">
                    <td>{{application.id}}</td>
                    <td>{{application.firstName}}</td>
                    <td>{{application.lastName}}</td>
                    <td>{{application.email}}</td>
                    <td>{{application.mobilePhone}}</td>
                    <td>{{application.age}}</td>
                    <td>
                      <span style="display:none;">
                        {{new Date(application.created_at).getTime()}}
                      </span>
                      {{application.created_at}}
                    </td>
                    <td>
                      <i class="fa fa-trash fa-icons" @click="deleteApplication(application.id)" aria-hidden="true"></i>
                      <a target="_blank" :href="getEditApplicationUrl(application.id)">
                        <i class="fa fa-pencil-alt fa-icons ml-md-1"></i>
                      </a>
                      <router-link :to="`/application-print/` + application.id">
                        <i class="fa fa-download fa-icons ml-md-1"></i>
                      </router-link>
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
import ViewApplication from '@/models/ViewApplication'
export default {
  name: 'Search',
  data () {
    return {
      isLoading: false,
      datatable: null,
      applications: [],
      MAIN_DOMAIN: process.env.MAIN_DOMAIN + '/admin/application/',
      applicationStatus: null
    }
  },
  computed: {
    applicationStatusText () {
      return (this.applicationStatus === 1 || this.applicationStatus === true) ? 'Close Applications' : 'Open Applications'
    }
  },
  mounted () {
    let dataTableScript = document.createElement('script')
    dataTableScript.setAttribute('src', 'https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js')
    document.head.appendChild(dataTableScript)
    this.fetchApplicationStatus()
    this.fetchAllApplications()
  },
  methods: {
    updateApplicationStatus () {
      this.$store.dispatch('updateApplicationStatus', !this.applicationStatus)
        .then((result) => {
          this.$toast.success('Application Status updated!')
          this.applicationStatus = !this.applicationStatus
        })
        .catch((err) => this.$helper.catchHandler(err))
    },
    fetchApplicationStatus () {
      this.applications = []
      this.$store.dispatch('fetchApplicationStatus')
        .then((result) => {
          this.applicationStatus = parseInt(result.data.applicationStatus)
        })
        .catch((err) => this.$helper.catchHandler(err))
    },
    fetchAllApplications () {
      this.applications = []
      this.isLoading = true
      this.$store.dispatch('fetchAllApplications')
        .then((result) => {
          result.data.applications.forEach(application => {
            this.applications.push(new ViewApplication(application))
          })
          this.isLoading = false
          setTimeout(() => this.initDatatables(), 100)
        })
        .catch((err) => this.$helper.catchHandler(err))
    },
    getEditApplicationUrl (id) {
      var encryptedToken = this.CryptoJS.AES.encrypt(this.$store.getters.getToken, '_~{~9fqf"6(Hp]r3').toString()
      encryptedToken = encryptedToken.replaceAll('+', '.')
      return this.MAIN_DOMAIN + id + '/1?token=' + encryptedToken
    },
    getNewApplicationUrl () {
      var encryptedToken = this.CryptoJS.AES.encrypt(this.$store.getters.getToken, '_~{~9fqf"6(Hp]r3').toString()
      encryptedToken = encryptedToken.replaceAll('+', '.')
      return this.MAIN_DOMAIN + '1?token=' + encryptedToken
    },
    deleteApplication (id) {
      this.$confirm(
        {
          message: `Are you sure you want to delete this application?`,
          button: { no: 'No', yes: 'Yes' },
          callback: confirm => {
            if (confirm) {
              this.$store.dispatch('deleteApplication', id)
                .then((result) => {
                  this.$toast.success(result.data.message)
                  this.fetchAllApplications()
                })
                .catch((err) => this.$toast.error(err.response.data.message))
            }
          }
        }
      )
    },
    searchDatatable (e) {
      this.datatable.search(e.target.value).draw()
    },
    initDatatables () {
      this.datatable = $('table').DataTable({
        destroy: true,
        stateSave: true,
        pagingType: 'full_numbers',
        columnDefs: [{
          targets: 7,
          'orderable': false
        }],
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
