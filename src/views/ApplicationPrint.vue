<template>
  <div v-if="application">
    <Page1></Page1>
    <Page2></Page2>
    <Page3></Page3>
    <Page4></Page4>
    <Page5></Page5>
    <Page6></Page6>
    <Page7></Page7>
    <Page8></Page8>
    <Page9></Page9>
    <Page10></Page10>
  </div>
  <div class="main-loader" v-else>
    <MainLoader></MainLoader>
  </div>
</template>

<script>
import Application from '@/models/Application'
import Page1 from '@/components/applicationPages/Page1'
import Page2 from '@/components/applicationPages/Page2'
import Page3 from '@/components/applicationPages/Page3'
import Page4 from '@/components/applicationPages/Page4'
import Page5 from '@/components/applicationPages/Page5'
import Page6 from '@/components/applicationPages/Page6'
import Page7 from '@/components/applicationPages/Page7'
import Page8 from '@/components/applicationPages/Page8'
import Page9 from '@/components/applicationPages/Page9'
import Page10 from '@/components/applicationPages/Page10'
export default {
  name: 'ApplicationPrint',
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10
  },
  data () {
    return {
      application: null
    }
  },
  mounted () {
    this.fetchApplication()
  },
  methods: {
    fetchApplication () {
      this.$store.dispatch('fetchApplication', this.$route.params.id)
        .then((resp) => {
          this.application = new Application(resp.data.application)
          setTimeout(() => {
            window.print()
          }, 200)
        })
        .catch((err) => {
          this.$toast.error(err)
          this.$router.push('/')
          console.log(err)
        })
    }
  }
}

</script>

<style>
@import '../assets/css/print.css';
</style>
