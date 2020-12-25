<template>
  <header>
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
  padding: {
      bottom: 100px;
      top: 20px
  }
  & > div{
      padding:0 1rem;
      max-width:1200px;
      margin:auto;
  }
}
</style>
