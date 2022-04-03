<template>
  <div :class="{ dark: dark }">
    <Header @changeTheme="handleChangeTheme" :dark="dark" />
    <Landing />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Landing from '~/components/landing.vue'
import Projects from '~/components/projects.vue'
import Footer from '~/components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Landing,
    Projects,
    Footer,
  },
  data: () => ({
    dark: false,
  }),
  created() {
    this.dark = this.getTheme()
  },
  methods: {
    handleChangeTheme() {
      this.dark = !this.dark
      this.setThemeToLocalStorage(this.dark)
    },
    setThemeToLocalStorage(value) {
      window.localStorage.setItem('dark', value)
    },
    getTheme() {
      // if the local storage have dark value
      if (window.localStorage.getItem('dark')) {
        return JSON.parse(window.localStorage.getItem('dark'))
      }
      // else return their preferences
      return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    },
  },
}
</script>
