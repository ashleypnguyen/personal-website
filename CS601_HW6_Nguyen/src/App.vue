<template>
  <h1>Fuji: Before & After</h1>
  <div class="main-row">
    <div class="column">
      <ImageShift picture="sit" />
      <ImageShift picture="chew" />
    </div>
    <div class="column">
      <ImageShift picture="grass" />
      <ImageShift picture="sploot" />
    </div>
  </div>
</template>

<script>
import ImageShiftVue from './components/ImageShift.vue';
export default {
  name: "App",
  components: {
      ImageShift: ImageShiftVue
  }
};
</script>

<style>
    body {
        margin: 0;
        background-image: url("https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?t=st=1655663579~exp=1655664179~hmac=8d84e8ba260f1147a0b7fa3379212103e52f0e747c58c5524d73937ea9bae201&w=1380");
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .main-row {
      display: inline-block;
      padding: 18px;
    }

    .column {
      flex: 50%;
    }
</style>
