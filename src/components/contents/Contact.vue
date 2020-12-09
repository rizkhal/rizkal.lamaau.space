<template>
  <section class="flex flex-center" id="contact">
    <div v-scrollanimation class="contact">
      <h2 class="whats">03. What's Next?</h2>
      <h1 class="touch">Get In Touch</h1>
      <p class="text">
        Kotak masuk saya selalu terbuka. Baik untuk proyek potensial atau hanya
        untuk menyapa, saya akan mencoba yang terbaik untuk menjawab email Anda!
      </p>
      <a class="btn" href="mailto:lamaaurizkhal@gmail.com">Say Hello</a>
    </div>
  </section>
</template>

<style scoped>
#contact {
  padding: 16em 0;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.contact {
  text-align: center;
  width: 65%;
}
@media (max-width: 768px) {
  .contact {
    width: 90%;
  }
}
.whats {
  font-size: 1.2rem;
  color: var(--accentclr);
  font-family: var(--ff-secondary);
  font-weight: 400;
}
.touch {
  margin: 0.5em 0;
  font-size: 3rem;
  color: var(--lightclr);
}

.text {
  font-size: 1.2rem;
  width: 90%;
  margin: 0 auto;
  color: var(--darkclr);
}
@media (max-width: 768px) {
  #contact {
    padding: 9em 0;
  }

  .text {
    width: 100%;
  }
}
</style>
