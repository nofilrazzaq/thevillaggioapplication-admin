<template>
  <!-- Side Nav START -->
  <div class="side-nav" v-if="this.$route.name !== 'ApplicationPrint'">
    <div class="side-nav-inner">
      <ul class="side-nav-menu scrollable mt-1">
        <li class="nav-item dropdown open">
          <router-link class="dropdown-toggle" :to="`/`">
            <span class="icon-holder">
              <i class="fa fa-home" aria-hidden="true"></i>
            </span>
            <span class="title">Applications</span>
          </router-link>
          <router-link class="dropdown-toggle" :to="`/entry-metrics`">
            <span class="icon-holder">
              <i class="fas fa-chart-bar"></i>
            </span>
            <span class="title">Entry Metrics</span>
          </router-link>
          <router-link class="dropdown-toggle" :to="`/export`">
            <span class="icon-holder">
              <i class="fas fa-file-export"></i>
            </span>
            <span class="title">Export</span>
          </router-link>
          <router-link class="dropdown-toggle" :to="`/logs`">
            <span class="icon-holder">
              <i class="fas fa-file"></i>
            </span>
            <span class="title">Logs</span>
          </router-link>
          <a class="dropdown-toggle" @click="logout" v-if="$store.getters.isLoggedIn" href="javascript:void(0)">
            <span class="icon-holder">
              <i class="fa fa-sign-out-alt" aria-hidden="true"></i>
            </span>
            <span class="title">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Side Nav END -->
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  },
  mounted () {
    /* eslint-disable no-undef */
    const appLayout = $('#app')
    $('.side-nav-inner .side-nav-menu .nav-item').on('click', () => {
      appLayout.removeClass('is-expand')
    })
  },
  methods: {
    logout (event) {
      event.preventDefault()
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
          this.$toast.success('Logged out successfully')
        })
        .catch((err) => {
          console.log(err)
          this.$toast.error(err.response.data.message)
        })
    }
  }
}
</script>

<style scoped>
</style>
