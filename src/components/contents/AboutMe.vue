<template>
  <section id="aboutme" class="flex">
    <div class="flex-row">
      <div class="aboutme">
        <h1 v-scrollanimation class="aboutme_title">
          <span class="numbers">01.</span>
          About Me
        </h1>

        <p v-scrollanimation class="aboutme_body">
          Halo! saya <span class="color-accent">Muhammad Rizkhal Lamaau</span>,
          seorang Full Stack Web Developer yang tinggal di
          <span class="color-accent">Ternate</span>. Sekarang saya bekerja
          sebagai <span class="color-accent">Freelance</span>. Setiap hari saya
          menghabiskan waktu di kamar untuk mempelajari hal baru atau sekedar
          menonton <span class="color-accent">Anime</span> dan membaca
          <span class="color-accent">Komik</span> atau hal - hal aneh di
          <span class="color-accent">Internet</span>.
        </p>

        <ul v-scrollanimation class="skills">
          <li>Php</li>
          <li>Laravel</li>
          <li>JavaScript</li>
          <li>Vue</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
        </ul>
      </div>
      <div class="imageme">
        <div v-scrollanimation>
          <div class="image overlay"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutme {
  padding: 16em 0;
  width: 50%;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image {
  background-image: url('../../assets/pp.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
  position: relative;
  border-radius: 12px;
}
.image::before {
  content: '';
  position: absolute;
  border: 1px solid var(--accentclr);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 12px;
  z-index: -1;
  transform: translate(-25px, 20px);
  transition: transform 0.3s;
}
.image:hover::before {
  transform: translate(0px, 0px);
  z-index: 1;
}

.overlay {
  position: relative;
}

.overlay::after {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 170, 141, 1);
  z-index: 1;
  opacity: 0.3;
  transition: opacity 0.3s;
  border-radius: 12px;
}
.overlay:hover:after {
  opacity: 0;
}

.imageme {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 40%;
}

.aboutme_title {
  position: relative;
  color: var(--lightclr);
  margin-bottom: 2em;
  font-size: 2rem;
}
.aboutme_title::after {
  content: '';
  position: absolute;
  background-color: var(--darkclr);
  opacity: 0.5;
  width: 60%;
  height: 1px;
  bottom: 45%;
  margin-left: 0.5em;
}

.aboutme_body {
  color: var(--darkclr);
  font-size: 1.4rem;
}
.aboutme_body {
  margin-bottom: 0.5em;
}

.color-accent {
  color: var(--accentclr);
}

.skills {
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
}

.skills li {
  color: var(--darkclr);
  margin: 0 0 1em;
  font-size: 0.9rem;
}

.skills li::before {
  content: '▹';
  color: var(--accentclr);
}

@media (max-width: 1440px) {
  .imageme {
    width: 50%;
  }
  .image {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 1200px) {
  .image {
    width: 270px;
    height: 270px;
  }
}

@media (max-width: 768px) {
  .aboutme {
    padding-bottom: 5em;
    width: 90%;
  }
  .flex-row {
    flex-direction: column;
  }
  .imageme {
    justify-content: center;
    width: 100%;
    margin-bottom: 4em;
  }
}

@media (max-width: 575px) {
  .aboutme_title::after {
    display: none;
  }
  .image {
    width: 250px;
    height: 250px;
  }
}
</style>
