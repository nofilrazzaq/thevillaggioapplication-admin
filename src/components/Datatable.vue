<template>
  <div>
    <div class="row">
      <div class="col-lg-12 add-form">
        <input class="form-control datatable_search" @keyup="searchDatatable" placeholder="Search..."/>
      </div>
    </div>
    <table class="dataTable table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Enabled</th>
          <th>Downloads</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default{
  name: 'Datatable',
  data () {
    return {
      datatable: null
    }
  },
  mounted () {
    let dataTableScript = document.createElement('script')
    dataTableScript.setAttribute('src', 'https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js')
    document.head.appendChild(dataTableScript)
    this.$parent.fetchAll()
  },
  methods: {
    initDatatables () {
      this.datatable = $('table').DataTable({
        ajax: {
          url: process.env.API_URL + '/admin/users',
          dataSrc: function (json) {
            // for (var i = 0, ien = json.data.length; i < ien; i++) {
            //   json.data[i][0] = '<a href="/message/' + json.data[i][0] + '>View message</a>'
            // }
            console.log(json)
            return json.users
          },
          'headers': {
            'Authorization': 'Bearer ' + this.$store.getters.getToken
          }
        },
        columns: [
          {
            data: 'id'
          },
          {
            data: 'username'
          },
          {
            data: 'is_enabled'
          },
          {
            data: 'downloads'
          }
        ],
        // destroy: true,
        // stateSave: true,
        pagingType: 'full_numbers',
        // columnDefs: [{
        //   targets: 4,
        //   'orderable': false
        // }],
        // stateSaveCallback: function (settings, data) {
        //   localStorage.setItem('DataTables_accounts_page', JSON.stringify(data))
        // },
        // stateLoadCallback: function (settings) {
        //   return JSON.parse(localStorage.getItem('DataTables_accounts_page'))
        // },
        drawCallback: function (settings) {
          $('.previous').html("<img src='/static/images/left_arrow.svg'>")
          $('.next').html("<img src='/static/images/right_arrow.svg'>")
          $('.first').addClass('d-inline')
          $('.first').html("<img src='/static/images/left_arrow.svg'><img src='/static/images/left_arrow.svg'>")
          $('.last').addClass('d-inline')
          $('.last').html("<img src='/static/images/right_arrow.svg'><img src='/static/images/right_arrow.svg'>")
        }
      })
    },
    searchDatatable (e) {
      this.datatable.search(e.target.value).draw()
    }
  }
}
</script>

<style scoped>
</style>
