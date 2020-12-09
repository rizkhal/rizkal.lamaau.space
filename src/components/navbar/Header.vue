<template>
  <header ref="header" class="header">
    <div class="subHeader">
      <a class="logo-link" href="/">
        <svg
          id="logo"
          class="logo"
          width="101"
          height="99"
          viewBox="0 0 101 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="textM"
            d="M41.6362 36.4394L50.0034 57.3222L58.3706 36.4394H62.7476V62.0331H59.3726V52.0663L59.689 41.3085L51.2866 62.0331H48.7026L40.3179 41.3613L40.6519 52.0663V62.0331H37.2769V36.4394H41.6362Z"
            stroke="#64FFDA"
            stroke-width="1"
          />

          <path
            class="circle"
            d="M98.7825 49.6381C98.7825 76.0248 77.0286 97.4576 50.1413 97.4576C23.254 97.4576 1.5 76.0248 1.5 49.6381C1.5 23.2513 23.254 1.81851 50.1413 1.81851C77.0286 1.81851 98.7825 23.2513 98.7825 49.6381Z"
            stroke="#64FFDA"
            stroke-width="3"
          />
        </svg>
      </a>
      <svg
        ref="ham"
        @click="openNav"
        class="ham ham6"
        viewBox="0 0 100 100"
        width="80"
        onclick="this.classList.toggle('active')"
      >
        <path
          class="line top"
          d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
        />
        <path
          class="line middle"
          d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
        />
        <path
          class="line bottom"
          d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
        />
      </svg>

      <nav ref="nav" class="nav">
        <ul class="nav-links">
          <li>
            <a @click="openNav" href="#aboutme" v-smooth-scroll>
              <span class="numbers">01.</span>
              About me
            </a>
          </li>
          <li>
            <a @click="openNav" href="#myworks" v-smooth-scroll>
              <span class="numbers">02.</span>
              My works
            </a>
          </li>
          <li>
            <a @click="openNav" href="#contact" v-smooth-scroll>
              <span class="numbers">03.</span>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      navbarOpen: false,
      prevScrollpos: 0,
    }
  },
  methods: {
    openNav() {
      if (window.screen.width <= 768) {
        const navbar = this.$refs.nav.classList
        const ham = this.$refs.ham.classList
        navbar.contains('open-nav')
          ? navbar.remove('open-nav')
          : navbar.add('open-nav')

        ham.contains('ham-open')
          ? ham.remove('ham-open', 'active')
          : ham.add('ham-open', 'active')
      }
    },
    handleScroll() {
      let currentScrollPos = window.pageYOffset
      let headerRef = this.$refs.header
      if (this.prevScrollpos > currentScrollPos) {
        headerRef.style.top = '0'
        headerRef.classList.add('addingShadow')
        if (window.pageYOffset == 0) {
          headerRef.classList.remove('addingShadow')
        }
      } else {
        headerRef.style.top = '-10em'
        headerRef.classList.remove('addingShadow')
      }
      this.prevScrollpos = currentScrollPos
    },
  },
  created() {
    this.prevScrollpos = window.pageYOffset
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  z-index: 10;
  padding: 2em 0;
  transition: all 0.3s;
}
.subHeader {
  width: 90%;
  max-width: 1650px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.addingShadow {
  background: var(--bgclr);
  font-size: 0.9rem;
  padding: 1em;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.12);
}

.nav-links {
  display: flex;
}

.nav-links a {
  color: var(--lightclr);
  margin-left: 4em;
  transition: all 0.3s;
  font-size: 1.1rem;
}

.nav-links a:hover,
.nav-links a :focus {
  color: var(--accentclr);
}

.logo {
  width: 85px;
  height: 85px;
}

.circle {
  stroke-dasharray: 781;
  stroke-dashoffset: 781;
  animation: line-anim 2s ease forwards;
}
.textM {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: line-fill 2s ease forwards;
}

/* SVG animation */
.ham {
  position: fixed;
  top: 0;
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  user-select: none;
  z-index: 10;
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: var(--accentclr);
  stroke-width: 4.5;
  stroke-linecap: round;
}

.ham6 .top {
  stroke-dasharray: 40 172;
}

.ham6 .middle {
  stroke-dasharray: 40 111;
}

.ham6 .bottom {
  stroke-dasharray: 40 172;
}

.ham6.active .top {
  stroke-dashoffset: -132px;
}

.ham6.active .middle {
  stroke-dashoffset: -71px;
}

.ham6.active .bottom {
  stroke-dashoffset: -132px;
}

@keyframes line-fill {
  from {
    fill: transparent;
  }
  to {
    fill: #64ffda;
  }
}

@keyframes line-anim {
  to {
    stroke-dashoffset: 0;
  }
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    transform: translateX(100%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s;
    background-color: #172a45;
    z-index: 9;
  }
  .open-nav {
    transform: translateX(0);
  }

  .nav-links {
    flex-direction: column;
    text-align: center;
  }
  .nav-links a {
    display: block;
    margin-left: 0;
    margin: 2em 0;
  }

  .ham {
    display: unset;
    position: unset;
    top: unset;
    right: unset;
  }

  .ham-open {
    position: fixed;
    top: 2.3em;
    right: 3.2em;
  }
}

@media (max-width: 375px) {
  .nav {
    width: 68%;
  }
}
@media (max-width: 425px) {
  .nav {
    width: 55%;
  }
}
</style>
