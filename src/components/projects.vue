<template>
  <div class="bg-white dark:bg-gray-900 pb-[50px]">
    <div class="container mx-auto px-10">
      <h1 class="text-gray-900 dark:text-pink-500 text-2xl font-bold">Portfolio</h1>
      <p class="text-gray-600 dark:text-pink-200 font-light">Opensource Projects i'm already build</p>

      <div class="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div v-for="(project, index) in projects" :key="index" class="bg-gray-200 shadow border dark:border-none dark:bg-pink-200 rounded p-4">
          <div>
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline-flex mr-2">
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill-rule="nonzero" d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" />
              </g>
            </svg>
            <span>
              {{ project.full_name }}
            </span>
          </div>
          <p class="text-sm mt-2">{{ project.description }}</p>
          <div class="flex flex-row items-center space-x-4 mt-4">
            <div class="inline-flex items-center space-x-1">
              <svg aria-label="forks" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
              </svg>
              <span>
                {{ project.forks_count }}
              </span>
            </div>
            <div class="inline-flex items-center space-x-1">
              <svg aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>
              <span>
                {{ project.stargazers_count }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <a href="https://github.com/codegoen" target="blank" class="text-pink-500 underline decoration-4 decoration-pink-500">All Projects</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('projects/setItems')
  },
  computed: mapGetters({
    projects: 'projects/getItems',
  }),
}
</script>
