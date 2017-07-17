<style type="text/css">
  .photoIndex > h2 {
    text-transform: uppercase;
    cursor: pointer;
  }
  .description > p {
    margin: 0;
  }
@media screen and (min-width:600px) {
  .photoIndex {
    width: 100%;
    height: 92vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    text-align: center;
    padding: 40px 22%;
    box-sizing: border-box;
  }
  .photoIndex > h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  .description {
    text-align: left;
    margin-bottom: 30px;
  }
  .description > p {
    font-size: 1.4rem;
    font-weight: 100;
  }
  .description-name {
    font-size: 1.7rem !important;
    margin-bottom: 6px !important;
  }
  .photoIndex > img,
  .photoIndex > .video-wrap {
    width: 100%;
    margin: 0 auto 10px;
  }
}
@media screen and (max-width:600px) {
  .photoIndex {
    width: 100%;
    height: 92vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    text-align: center;
    padding: 20px 10%;
    box-sizing: border-box;
  }
  .description {
    text-align: left;
    margin-bottom: 20px;
  }

  .description > h3 {
    margin: 0;
  }
  .description-name {
    font-size: 1.3rem;
    margin-bottom: 6px !important;
  }
  .photoIndex > img,
  .photoIndex > .video-wrap {
    width: 100%;
    margin: 0 auto 10px;
  }
}
.video-js {
  background-color: #fff !important;
}


.video-wrap, .video-player, .video-js {
  width: 100%;
  position: relative;
  padding-bottom: 56.25% !important;
  height: 0;
}

.video-player > div {
  padding-bottom: 56.25% !important;
}
</style>
<template>
  <div class="photoIndex">
  <h2 @click="toList">{{$route.params.name}}</h2>
    <div class="description" v-if="photoData.hasOwnProperty('description')">
      <p class="description-name">{{photoData.description.name}}:</p>
      <p>{{photoData.description.value}}</p>
    </div>
    <div class="video-wrap" v-if="photoData.hasOwnProperty('video')">
        <video-player  ref="videoPlayer" 
            :options="playerOptions">
        </video-player>
    </div>
    <img v-for="n in photoData.length" 
      v-lazy="'http://ot2ie5s0n.bkt.clouddn.com/' + photoData.name + '/' + n + '.' + indexImgType">
  </div>
</template>

<script type="text/javascript">
import photos from '../photos.js';
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    videoPlayer
  },
  methods: {
    toList() {
      BUS.$emit('showAlbum');
      BUS.$emit('routeChange', false);
      setTimeout(() => {
        BUS.$emit('routeChange', true);
        this.$router.push({name: this.$route.params.name});
        BUS.$emit('showAlbum');
      }, 1400);
    }
  },
  computed: {
    photoData() {
      let routeParams = this.$route.params;
      return photos[routeParams.name][routeParams.position][routeParams.n];
    },
    playerOptions() {
      let sources = [{type: "video/mp4", src: this.photoData.video}];
      let poster = this.photoData.videoCover;
      return {
        sources,
        poster
      }
    },
    indexImgType() {
      return this.photoData.indexImgType ? this.photoData.indexImgType : 'jpg'
    }
  }
}
</script>