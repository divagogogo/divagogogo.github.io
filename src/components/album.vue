<style type="text/css">
.album-wrap {
  height: 92vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.album {
  margin: 0 auto;
  text-align: center;
}

.album > h1 {
  font-size: 4rem;
}

.menu-item {
  margin-bottom: 40px;
}

.menu-item > p {
  font-family: FuturaBook;
  font-size: 1.4rem;
  line-height: 1rem;
  cursor: pointer;
}

.menu-item > p.grey {
  color: #aaa;
}

@media screen and (min-width:800px) {
  .album {
    width: 100%;
  }
}
@media screen and (max-width:800px) {
  .album {
    margin-top: 5.2vh;
  }
}
</style>
<template>
  <div class="album-wrap">
    <div class="album" v-show="!hide">
      <h1 v-show="routenochange">DIVA.GO</h1>
      <div v-show="routenochange" class="menu-item" v-for="(m, i) in menu" v-bind:key="i">
        <h2>{{m.name}}</h2>
        <p v-for="l in m.list" v-bind:key="l.title" @click="to(l.to)" :class="{ grey: !l.to }">{{l.title}}</p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { menu } from '../menu.js';

export default {
  props: ['hide', 'routenochange'],
  methods: {
    to(url) {
      if (url === null) return false;
      BUS.$emit('routeChange', false);
      BUS.$emit('showAlbum');
      setTimeout(() => {
        BUS.$emit('routeChange', true);
        this.$router.push(url);
      }, 1000); 
    }
  },
  computed: {
    menu() {
      return menu;
    }
  }
}
</script>