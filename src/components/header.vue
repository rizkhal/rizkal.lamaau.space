<template>
  <header ref="navbar" class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 bg-white dark:bg-gray-900 dark:bg-transparent">
    <div class="container mx-auto p-4">
      <div class="flex items-center justify-between px-4">
        <ul class="flex space-x-4 text-gray-900 dark:text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <button @click.prevent="$emit('changeTheme')" class="p-1 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:focus:ring-gray-700">
          <SunIcon v-if="!dark" class="w-5 h-5 text-gray-600" />
          <MoonIcon v-else class="w-5 h-5 text-gray-200" />
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import { SunIcon } from '@heroicons/vue/outline'
import { MoonIcon } from '@heroicons/vue/outline'

export default {
  name: 'Header',
  components: {
    SunIcon,
    MoonIcon,
  },
  props: {
    dark: Boolean,
  },
  emits: ['changeTheme'],
  mounted() {
    const navbar = this.$refs.navbar

    window.onscroll = function () {
      if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add('navbar-fixed')
      } else {
        navbar.classList.remove('navbar-fixed')
      }
    }
  },
}
</script>
