<style scoped type="text/css">
.container {
  width: 100%;
  height: 92vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 96px 3% 0;
  display: flex;
  box-sizing: border-box;
}
.description-value {
  font-size: 14px;
  font-family: FuturaBook;
}
.title {
  text-align: center;
}
.title h2 {
  font-size: 2rem;
  margin-bottom: 2.7rem;
  text-transform: uppercase;
}
.photo-boxes {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
image[lazy=loading] {
  width: 20vw;
  height: 20vw;
  background-color: #fff;
  margin-bottom: 40px;
}
.box a {
  cursor: pointer;
}
.no-color {
  filter: grayscale(100%);
}

.description {
  flex: 1 0 auto;
  text-align: left;
  margin-bottom: 30px;
}

@media screen and (min-width:600px) {
  .container {
    flex-direction: row;
  }
  .description {
    width: 20%;
    padding-right: 4%;
    box-sizing: border-box;
  }
  .title h2 {
    font-size: 26px;
    margin-bottom: 3rem;
  }
  .box {
    width: 32%;
  }
  .photos {
    width: 100%;
    opacity: 1;
    transition: opacity 1.2s;
  }
  .photos:hover {
    opacity: 0.5;
  }
  .photos-wrap {
    width: 100%;
    background-color: #eee;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.10);
    margin-bottom: 20px;
  }
  .description > p {
    line-height: 30px;
    font-size: 1.4rem;
  }
  .description > .description-value {
    line-height: 20px;
  }
  .description-name {
    font-size: 1.7rem !important;
    margin-bottom: 6px !important;
  }
}
@media screen and (max-width:600px) {
  .container {
    flex-direction: column;
    padding-top: 30px;
  }
  .title h2 {
    font-size: 22px;
  }
  .box {
    width: 31%;
  }
  .box > a {
    /*height: 0;*/
    display: block;
  }
  .photos {
    display: block;
    width: 100%;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.10);
    margin-bottom: 10%;
  }
  .description-name {
    font-size: 1.3rem;
    margin-bottom: 6px !important;
  }
}
</style>
<template>
<div>
  <div class="container">
    <div class="description">
      <p class="description-name">ORDER 序 . work of 2018</p>
      <p class="description-value">
        ORDER project is a new episode of my photo project. It is not about the what call youth culture, but the power of them, is what i wanna express. The project ORDER, is to discover the power of order around me. Those who seem silent, but have their own understand of the world, to enjoy life in their own ways.
        Play with them, create with them, express with them. Their power of ORDER
      </p>
    </div>
    <div class="photo-boxes">
      <div class="box">
        <div class="photos-wrap" :class="{'no-color': routeName !== 'photo'}" v-for="(item, index) in photoData.left" @click="toIndex('left', index)">
          <img class="photos" v-lazy="'http://go.divagao.com/' + item.name + '.jpg'">
        </div>
      </div>
      <div class="box">
        <div class="photos-wrap" :class="{'no-color': routeName !== 'photo'}" v-for="(item, index) in photoData.center" @click="toIndex('center', index)">
          <img class="photos" v-lazy="'http://go.divagao.com/' + item.name + '.jpg'">
        </div>
      </div>
      <div class="box">
        <div class="photos-wrap" :class="{'no-color': routeName !== 'photo'}" v-for="(item, index) in photoData.right" @click="toIndex('right', index)">
          <img class="photos" v-lazy="'http://go.divagao.com/' + item.name + '.jpg'">
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import photos from '../photos.js';
export default {
  data() {
    return {
    }
  },
  props: ['hide'],
  computed: {
    routeName() {
      return this.$route.name;
    },
    photoData() {
      return photos[this.$route.name];
    },
  },
  methods: {
    toIndex(position, index) {
      BUS.$emit('routeChange', false);
      BUS.$emit('showAlbum');
      setTimeout(() => {
        BUS.$emit('routeChange', true);
        this.$router.push({name: 'photoindex', params: {name: this.routeName, position: position,n: index}});
        BUS.$emit('showAlbum');
      }, 1000);    
    },
  }
}
</script>