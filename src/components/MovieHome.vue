<template>
  <section class="home">
    <h1 class="home__title">Home !!</h1>
  </section>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .home__title {
    width: 50%;
    height: 50%;
    min-width: 400px;
    min-height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(#000, 0.8);
    border-radius: 12px;
    color: var(--color-semi-white);

    font-size: 60px;
    font-weight: 900;
  }
}
</style>
