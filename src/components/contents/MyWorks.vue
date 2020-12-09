<template>
  <section id="myworks" class="flex myworks">
    <h1 v-scrollanimation class="mywork_title">
      <span class="numbers">02.</span>
      Some Things I've Built
    </h1>
    <div v-scrollanimation class="box-grid">
      <div class="box" v-for="item in sliceRepo" :key="item.id">
        <div class="links">
          <svg
            class="folder"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 60 60"
          >
            <title>Folder</title>
            <path
              d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
            />
          </svg>

          <a class="link" :href="item.url">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>

        <div class="boxFlex">
          <div class="box_body">
            <h2 class="box_title">{{ item.name }}</h2>
          </div>
          <div class="box_footer">
            <p class="box_footer_text">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <a v-scrollanimation class="btn" href="https://github.com/rixzkl"
      >See All</a
    >
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      repo: '',
    }
  },
  computed: {
    sliceRepo() {
      return this.repo.slice(0, 10)
    },
  },
  created: function () {
    this.getRepos()
  },
  methods: {
    getRepos: async function () {
      const responsive = await fetch(
        'https://api.github.com/orgs/codegoen/repos'
      )
      const repos = await responsive.json()
      const data = repos.map((details) => {
        return {
          name: details.name,
          description: details.description,
          url: details.html_url,
        }
      })
      this.repo = data
    },
  },
}
</script>

<style scoped>
.myworks {
  padding: 10em 0;
}
.btn {
  align-self: center;
}
.mywork_title {
  position: relative;
  color: var(--lightclr);
  margin-bottom: 2em;
  font-size: 2rem;
}
.mywork_title::after {
  content: '';
  position: absolute;
  background-color: var(--darkclr);
  opacity: 0.5;
  width: 60%;
  height: 1px;
  bottom: 45%;
  margin-left: 0.5em;
}
.box-grid {
  grid-column: 2/8;
  grid-gap: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.box {
  height: 250px;
  background-color: var(--boxclr);
  border-radius: 5px;
  padding: 1.5em;
  transition: all 0.3s;
}

.box:hover,
.box:focus {
  transform: translateY(-5px);
}

.boxFlex {
  display: flex;
  height: 90%;
  flex-direction: column;
  justify-content: space-between;
}

.box_title {
  margin-top: 1em;
  font-size: 1.2rem;
  color: var(--lightclr);
}

.box_footer_text {
  color: var(--darkclr);
  font-size: 0.9rem;
}

.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.folder {
  width: 30px;
  height: 30px;
  fill: var(--accentclr);
}
.link {
  color: var(--darkclr);
  font-size: 1.3rem;
  transition: all 0.3s;
}
.link:hover,
.link:focus {
  color: var(--accentclr);
}

@media (max-width: 1000px) {
  .mywork_title::after {
    width: calc(100% - 450px);
  }
}

@media (max-width: 768px) {
  .box-grid {
    grid-column: 1/9;
  }

  .mywork_title::after {
    width: 10%;
  }
}

@media (max-width: 425px) {
  .mywork_title::after {
    display: none;
  }
}
</style>
