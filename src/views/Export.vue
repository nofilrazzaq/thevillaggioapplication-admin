<template>
  <div class="page-container">
    <!-- Content Wrapper START -->
    <div class="main-content">
      <div class="page-header">
        <h2 class="header-title">Export Applications</h2>
        <div class="header-sub-title">
          <nav class="breadcrumb breadcrumb-dash">
            <router-link :to="`/`" class="breadcrumb-item">
              <i class="anticon anticon-home m-r-5"></i>Home
            </router-link>
            <span class="breadcrumb-item active">Export</span>
          </nav>
        </div>
      </div>
      <div class="card">
        <div class="card-body" v-if="this.$store.getters.apiStatus !== 'loading'">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <form @submit.prevent="submit" class="add-edit-form product-form">
                  <div class="row justify-content-center">
                    <div class="col-lg-6">
                      <label for>
                        <span>Min Age:</span>
                        <input v-model="minAge" required type="text" class="form-control" />
                      </label>
                      <label for>
                        <span>Max Age:</span>
                        <input v-model="maxAge" required type="text" class="form-control" />
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-12 d-flex justify-content-center mt-3">
                    <button type="submit" :disabled="this.$store.getters.apiStatus == 'loading'" class="btn btn-success">
                      <div v-if="this.$store.getters.apiStatus != 'loading'">Export</div>
                      <div v-else class="loader"><Loader></Loader></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="main-loader" v-else>
          <MainLoader></MainLoader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
export default{
  name: 'Export',
  data () {
    return {
      minAge: '',
      maxAge: ''
    }
  },
  mounted () {
  },
  methods: {
    submit (event) {
      this.$store.dispatch('exportApplications', {minAge: this.minAge, maxAge: this.maxAge})
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', this.getFileName()) // or any other extension
          document.body.appendChild(link)
          link.click()
          // this.$toast.success('Product ' + successText + ' successfully')
        })
        .catch((err) => {
          console.log(err.response)
          this.$toast.error(err.response.data.message || 'An unkown error occured please contact suppport')
        })
    },
    getFileName () {
      const o_date = new Intl.DateTimeFormat()
      const f_date = (m_ca, m_it) => Object({...m_ca, [m_it.type]: m_it.value})
      const m_date = o_date.formatToParts().reduce(f_date, {})
      var datestring = m_date.year + m_date.month + m_date.day
      var filename = 'applications_(' + this.minAge + '-' + this.maxAge + ')_' + datestring
      return filename + '.csv'
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 767px) {
  .cat-div {
    width: 100% !important;
  }
}
.thumbnail-display {
  background-size: contain !important;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
