<template>
  <!-- Header START -->
  <div class="header" v-if="this.$route.name !== 'ApplicationPrint'">
    <div class="logo logo-dark">
      <a class="d-flex justify-content-center align-items-center cursor-pointer">
        <h4 class="m-0">
          Admin Panel
        </h4>
      </a>
    </div>
    <div class="logo logo-white">
      <a class="cursor-pointer">
      </a>
    </div>
    <div class="nav-wrap">
      <ul class="nav-left">
        <li class="desktop-toggle">
          <a href="javascript:void(0);">
            <i class="anticon"></i>
          </a>
        </li>
        <li class="mobile-toggle">
          <a href="javascript:void(0);">
            <i class="anticon"></i>
          </a>
        </li>
        <p class="m-0 logo-text">The Villaggio</p>
      </ul>
      <ul class="nav-right" v-if="this.$store.getters.isLoggedIn">
        <li class="dropdown dropdown-animated scale-left">
          <div class="pointer" data-toggle="dropdown">
            <div class="avatar avatar-image  m-h-10 m-r-15 user">
              <i class="fa fa-user user-avatar" aria-hidden="true"></i>
            </div>
          </div>
          <div class="p-b-15 p-t-20 dropdown-menu pop-profile">
            <div class="p-h-20 p-b-15 m-b-10 border-bottom">
              <div class="d-flex m-r-50">
                <div class="m-l-10">
                  <p class="m-b-0 text-dark font-weight-semibold">{{this.$store.getters.admin.name}}</p>
                  <p class="m-b-0 opacity-07">{{this.$store.getters.admin.email}}</p>
                </div>
              </div>
            </div>
            <a href="javascript:void(0);" class="dropdown-item d-block p-h-15 p-v-10" @click="logout">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <i class="anticon font-size-16 anticon-logout"></i>
                  <span class="m-l-10">Logout</span>
                </div>
                <i class="anticon font-size-10 anticon-right"></i>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- Header END -->
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
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
  },
  mounted () {
    /* eslint-disable no-undef */
    const appLayout = $('#app')
    const isFolded = 'is-folded'
    const isExpand = 'is-expand'
    $('.header .nav-left .desktop-toggle').on('click', () => {
      appLayout.toggleClass(isFolded)
    })

    $('.header .nav-left .mobile-toggle').on('click', () => {
      appLayout.toggleClass(isExpand)
    })
  }
}
</script>

<style scoped>
.dropdown-item {
  width: 94%;
  margin: 0px auto;
}

.logo-text {
  font-size: 24px;
  color: #0889a0;
}

.dropdown-item:hover  {
  background: #0889a0;
  color: white;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
