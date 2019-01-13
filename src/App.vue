<style type="text/css">
@font-face {
  font-family: FuturaBold;
  src: url('./assets/font/FuturaBold.woff') format('woff'),
       url('./assets/font/FuturaBold.otf') format('otf'),
       url('./assets/font/FuturaBold.ttf')  format('truetype');
}
@font-face {
  font-family: FuturaBook;
  src: url('./assets/font/FuturaBook.woff') format('woff'),
       url('./assets/font/FuturaBook.otf')  format('otf'),
       url('./assets/font/FuturaBook.ttf')  format('truetype');
}
html {
  font-size: 62.5%;
}
html,body {
  font-family: FuturaBold;
  margin: 0;
  height: 100%;
  width: 100%;
}
::-webkit-scrollbar { 
  display: none; 
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: #000;
}
.wrap {
  will-change: transform;
  transform: translateZ(0);
  padding-top: 8vh;
}
a {
  text-decoration: none;
  color: #000;
}
div,a,img {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select:none;
}
.wrap {
  will-change: transform;
  transform: translateZ(0);
  padding-top: 8vh;
}
.hide {
  animation: dropdown 1.8s;
  transform: translateY(-92vh);
}
.show {
  animation: rollback 1.8s;
  transform: translateY(0);
}

@keyframes dropdown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-92vh);
  }
}
@keyframes rollback{
  0% {
    transform: translateY(-92vh);
  }
  100% {
    transform: translateY(0);
  }
}

</style>
<template>
  <div id="app">
    <navbar :hide="hide"></navbar>
    <div class="wrap" :class="{'hide':hide, 'show': !hide}">
      <album :routenochange="routenochange" :hide="hide"></album>
      <keep-alive>
        <router-view :hide="hide" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view :hide="hide" v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import album from './components/album.vue';

export default {
  name: 'app',
  data() {
    return {
      hide : true,
      routenochange: true
    }
  },
  created() {
    BUS.$on('showAlbum',() => {
      this.hide = !this.hide;
    });
    BUS.$on('routeChange', (isRouteChange) => {
      this.routenochange = isRouteChange;
    })
  },
  components: {
    navbar,
    album
  },

}
</script>

<style>

</style>
