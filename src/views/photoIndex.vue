<style type="text/css">
  .description > p {
    margin: 0;
  }
  .photoIndexH2 {
    position: relative;
    text-transform: uppercase;
  }
  .photoIndexH2 > b {
    cursor: pointer;
  }
  .photoIndexH2 > span {
    height: 1.2rem;
    font-size: 1.2rem;
    font-weight: 300;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    height: 100%;
    top: 30%;
    font-size: 12px;  
    z-index: 100;
  }
  .description-value {
    font-family: DINMedium;
    font-size: 14px;
    line-height: 20px;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  .grey {
    color: grey;
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
  .photoIndex > div {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  .description {
    text-align: left;
    margin-bottom: 30px;
  }
  .description > p {
    line-height: 1.4rem;
    font-size: 1.4rem;
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
  .photoIndexH2 {
    margin-bottom: 1.4rem;
  }
  .photoIndexH2 > span {
    font-size: 0.6rem;
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
  <div class="photoIndexH2">
    <span class="prev" :class="{ grey: noPrev }" @click="prevPage">prev -</span>
    <b @click="toList">{{$route.params.name}}</b>
    <span class="next" :class="{ grey: noNext }" @click="nextPage">+ next</span>

 </div>
    <div class="description" v-if="photoData.hasOwnProperty('description')">
      <p class="description-name">{{photoData.description.name}}:</p>
      <p class="description-value" v-html="photoData.description.value"></p>
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
  data() {
    return {
      noNext: false,
      noPrev: false
    }
  },
  created() {
    const { params } = this.$route;
    const centerLength = photos[params.name].center.length;
    const leftLength = photos[params.name].left.length;
    const rightLength = photos[params.name].right.length;

    if (this.$route.params.n === '0' && this.$route.params.position === 'left') {
      this.noPrev = true;
    }
    if (this.$route.params.position === 'center' && this.$route.params.n > rightLength - 1) {
      this.noNext = true;
    }
    if (this.$route.params.position === 'left' && this.$route.params.n > centerLength - 1) {
      this.noNext = true;
    }
    if (this.$route.params.position === 'right' && this.$route.params.n >= leftLength - 1) {
      this.noNext = true;
    }
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
    },
    prevPage() {
      this.noNext = false;
      const { name, params } = this.$route;
      switch (params.position) {
        case 'left':
          if (+params.n === 0) {
            this.noPrev = true;
            return false;
          } else {
            this.$router.push({
              name,
              params: {
                name: params.name,
                position: 'right',
                n: params.n - 1
              }
            })
          }
          break;
        case 'center': 
          this.$router.push({
            name,
            params: {
              name: params.name,
              position: 'left',
              n: params.n
            }
          })
          break;
        case 'right':
          this.$router.push({
            name,
            params: {
              name: params.name,
              position: 'center',
              n: params.n
            }
          })
          break;

      }
    },
    nextPage() {
      this.noPrev = false;
      const { name, params} = this.$route;
      switch (params.position) {
        case 'left':
          const centerLength = photos[params.name].center.length;
          if (params.n > centerLength - 1) {
            this.noNext = true;
            return false;
          } else {
            this.$router.push({
              name,
              params: {
                name: params.name,
                position: 'center',
                n: +params.n
              }
            })
          }
          break;
        case 'center':
          const rightLength = photos[params.name].right.length;
          if (params.n > rightLength - 1) {
            this.noNext = true;
            return false;            
          } else {
            this.$router.push({
              name,
              params: {
                name: params.name,
                position: 'right',
                n: +params.n
              }
            })            
          }
          break;        
        case 'right':
          const leftLength = photos[params.name].left.length;
          if (params.n >= leftLength - 1) {
            this.noNext = true;
            return false; 
          } else {
            this.$router.push({
              name,
              params: {
                name: params.name,
                position: 'left',
                n: +params.n + 1
              }
            })    
          }
          break;
      }
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