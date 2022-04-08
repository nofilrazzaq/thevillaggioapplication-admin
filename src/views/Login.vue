<template>
  <div class="page-container">
    <!-- Content Wrapper START -->
    <div class="main-content">
      <div class="page-header">
        <h2 class="header-title">Login</h2>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <form @submit="login" class="product-form">
                  <div class="row justify-content-center">
                    <div class="col-lg-5">
                      <div class="form-group">
                        <label for="email">Email address:</label>
                        <input v-model="email" required type="email" class="form-control" id="email">
                      </div>

                      <div class="form-group">
                        <label for="password">Password:</label>
                        <input v-model="password" required type="password" class="form-control" id="password">
                      </div>

                      <div class="form-group">
                        <button type="submit" :disabled="this.$store.getters.apiStatus == 'loading'" class="btn btn-success w-100">
                          <div v-if="this.$store.getters.apiStatus != 'loading'">Sign In</div>
                          <div v-else class="loader"><Loader></Loader></div>
                        </button>
                      </div>
<pre>
Login Credentials
email: {{email}}
password: {{password}}
</pre>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: 'admin@application.com',
      password: 'password'
    }
  },
  methods: {
    login (event) {
      event.preventDefault()
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => {
          this.$router.push('/')
          this.$toast.success('Logged in successfully')
        })
        .catch((err) => this.$helper.catchHandler(err))
    }
  }
}
</script>

<style scoped>
.product-form label {
    margin-bottom: 0rem;
}
pre {
  font-size: 13px;
}
.highlighted {
  color: red;
  font-size: 12px;
}
</style>
