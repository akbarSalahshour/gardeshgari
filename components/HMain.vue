<template>
  <header class="pt-3">
    <div class="d-block">
      <h-navbar />
      <h-jumbotron />
    </div>
  </header>
</template>
<style lang="scss">
header {
  position: relative;
  z-index: 9;
  background-image: url("~assets/img/bg-header.jpg");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vw;
  max-height: 90vh;
  min-height: 300px;
  & > div{
      padding:0 1rem;
      max-width:1200px;
      margin:auto;
  }
}
</style>
