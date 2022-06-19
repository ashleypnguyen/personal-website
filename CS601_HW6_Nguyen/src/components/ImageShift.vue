<template>
  <img 
    class="card" 
    alt="Corgi"
    :src="getPicOnHover" 
    @mouseover="isHovering=true" 
    @mouseleave="isHovering=false"
    />
</template>

<script>
export default {
  name: "ImageShift",
  props: {
      picture: String
  },
  data() {
      return {
          isHovering: false,
          grass: {
              before: require("../../assets/grass-recent.jpeg"), 
              after: require("../../assets/grass.jpeg")
          },
          sploot: {
              before: require("../../assets/sploot-recent.png"),
              after: require("../../assets/sploot.png")
          },
          sit: {
              before: require("../../assets/sit-recent.jpeg"),
              after: require("../../assets/sit.png")
          },
          chew: {
              before: require("../../assets/chew-recent.png"),
              after: require("../../assets/chew.png")
          }
      }
  },
  computed: {
      getPicOnHover() {
          const pic = this.pictureByType()

          if (this.isHovering) {
              return pic.after
          } else {
              return pic.before
          }
      }
  },
  methods: {
      pictureByType() {
          switch(this.picture){
            case "grass": 
                return this.grass
            case "sploot":
                return this.sploot
            case "sit":
                return this.sit
            case "chew":
                return this.chew
            default: 
                return this.grass
          }
      }
  }
}
</script>

<style>
    .card {
        width: 30%;
        padding: 10px;
    }

    .card:hover{
        cursor: pointer;
    }
</style>
