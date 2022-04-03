<template>
  <div class="bg-white dark:bg-gray-900 pb-[50px]">
    <div class="container mx-auto px-10">
      <h1 class="text-gray-900 dark:text-pink-500 text-2xl font-bold">Portfolio</h1>
      <p class="text-white dark:text-pink-200 font-light">Opensource Projects i'am already build</p>

      <div class="mt-8 grid grid-cols-4 gap-4">
        <div v-for="(project, index) in projects" :key="index">
          {{ project.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    projects: [],
  }),
  mounted() {
    this.repos()
  },
  methods: {
    async repos() {
      const { data } = await axios.get('https://api.github.com/orgs/codegoen/repos')
      this.projects = data.map((item) => {
        return {
          name: item.name,
          url: item.html_url,
          description: item.description,
        }
      })
    },
  },
}
</script>
