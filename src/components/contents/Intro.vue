<template>
  <section class="flex">
    <div class="intro">
      <h2 class="hi">Hi, nama saya adalah</h2>
      <h1 class="name">Muhammad RIzkhal Lamaau.</h1>
      <h1 class="build">Full Stack Web Developer.</h1>

      <a class="btn" href="mailto:lamaaurizkhal@gmail.com">Say Hello</a>
    </div>
  </section>
</template>

<style scoped>
.intro {
  color: var(--lightclr);
  width: 65%;
  padding: 10em 0;
  margin-top: 9.7em;
}
.hi {
  color: var(--accentclr);
  margin-bottom: 0.8em;
  font-size: 1.5rem;
  font-family: var(--ff-secondary);
  font-weight: 400;
}
.name {
  font-size: 3rem;
  color: var(--lightclr);
}
.build {
  color: var(--darkclr);
  font-size: 3rem;
}

@media (max-width: 768px) {
  .intro {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .intro {
    margin-top: 10em;
  }
}
</style>
