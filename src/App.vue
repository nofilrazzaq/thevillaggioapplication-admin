<template>
  <div id="app">
    <vue-confirm-dialog></vue-confirm-dialog>
    <navbar></navbar>
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Sidebar
  },
  watch: {
    $route: {
      immediate: true,
      handler (to, from) {
        document.title = 'The Villaggio Admin - ' + to.meta.title
      }
    }
  },
  mounted () {
    let dataTableScript = document.createElement('link')
    dataTableScript.setAttribute('href', 'https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js')
    dataTableScript.setAttribute('rel', 'stylesheet')
    document.head.appendChild(dataTableScript)
  }
}
</script>

<style>
</style>
