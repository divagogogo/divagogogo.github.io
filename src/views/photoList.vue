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
  flex: 0 0 auto;
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
      <p class="description-name">{{photoData.title}}</p>
      <p class="description-value" v-html="photoData.desc"></p>
    </div>
    <div class="photo-boxes">
      <div class="box">
        <div class="photos-wrap" v-for="(item, index) in photoData.sublist.left" v-bind:key="index" @click="toIndex('left', index)">
          <img class="photos" v-lazy="genImgUrl(item.name)">
        </div>
      </div>
      <div class="box">
        <div class="photos-wrap" v-for="(item, index) in photoData.sublist.center" v-bind:key="index" @click="toIndex('center', index)">
          <img class="photos" v-lazy="genImgUrl(item.name)">
        </div>
      </div>
      <div class="box">
        <div class="photos-wrap" v-for="(item, index) in photoData.sublist.right" v-bind:key="index" @click="toIndex('right', index)">
          <img class="photos" v-lazy="genImgUrl(item.name)">
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import { list } from '../menu.js';
export default {
  data() {
    return {
    }
  },
  props: ['hide'],
  computed: {
    photoData() {
      return list[this.$route.params.name];
    },
  },
  methods: {
    toIndex(position, index) {
      BUS.$emit('routeChange', false);
      BUS.$emit('showAlbum');
      setTimeout(() => {
        BUS.$emit('routeChange', true);
        this.$router.push({name: 'photoindex', params: {name: this.$route.params.name, position: position,n: index}});
        BUS.$emit('showAlbum');
      }, 1000);    
    },
    genImgUrl(name) {
      return `http://go.divagao.com/${name}.jpg`
    }
  }
}
</script>