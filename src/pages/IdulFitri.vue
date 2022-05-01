<template>
  <div>
    <div class="flex items-center justify-center flex-col">
      <img :src="require('~/assets/images/lamp.png')" alt="Lamp" class="-mt-40" />
      <img :src="require('~/assets/images/eid.png')" alt="Me" class="-mt-64" />
    </div>

    <div class="flex items-center justify-center px-[24px] mt-4">
      <h1 class="text-3xl font-bold font-mubarak element text-yellow-500" ref="text1"></h1>
    </div>

    <div class="absolute bottom-2 w-full">
      <div class="text-center">
        <p class="text-sm mb-4" v-show="state">Klik dimana saja untuk putar takbiran</p>
        <p class="inline-flex items-center">
          Created With<svg class="w-6 h-6 mx-1 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> By&nbsp;<a href="github.com/rizkhal" target="blank" class="text-blue-400"> Rizkhal Lamaau </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Typed from 'typed.js'
import confetti from 'canvas-confetti'

export default {
  data: () => ({
    state: true,
  }),
  mounted() {
    const audio = new Audio(require('~/assets/music/takbir.mp3'))
    window.addEventListener('mouseover', () => {
      audio.loop = true
      audio.play()
      this.state = false
    })

    new Typed(this.$refs.text1, {
      strings: ['Saya, Rizkhal Lamaau Mengucapkeun', 'Selamat Hari Raya Idul Fitri 1 Syawal 1443 Hijriah'],
      typeSpeed: 120,
      backSpeed: 50,
      showCursor: false,
      loop: true,
      onComplete: () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })

        this.confetti()
      },
      preStringTyped: () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })

        this.confetti()
      },
      onStringTyped: () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })

        this.confetti()
      },
    })
  },
  methods: {
    confetti() {
      var end = Date.now() + 15 * 100

      // go Buckeyes!
      var colors = ['#c9a759', '#ffffff']

      ;(function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        })
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        })

        if (Date.now() < end) {
          window.requestAnimationFrame(frame)
        }
      })()
    },
  },
}
</script>
