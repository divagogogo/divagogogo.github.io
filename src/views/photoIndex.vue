<style type="text/css">
  .description > p {
    text-align: justify;
    vertical-align: top;
    margin: 0;
  }
  .photoDetail {
    display: flex;
  }
  .photoIndex {
    width: 100%;
    height: 92vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    text-align: center;
    padding: 40px 3%;
    box-sizing: border-box;
  }
  .photoIndexH2 {
    width: 100%;
    position: relative;
    text-transform: uppercase;
    height: 20px;
  }
  .photoIndexH2 > span {
    cursor: pointer;
    display: inline-block;
  }
  .photoIndexH2 > div {
    margin: 0;
    height: 1.2rem;
    font-size: 1.2rem;
    font-weight: 300;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    top: 20%;
    font-size: 12px;
    z-index: 100;
  }
  .description-value {
    font-size: 14px;
    font-family: FuturaBook;
  }
  .prev,
  .next {
    width: 100px;
    font-family: FuturaBook;
  }
  .prev {
    left: 0;
    text-align: left;
  }
  .next {
    right: 0%;
    text-align: right;
  }
  .grey {
    color: grey;
  }

  .detail > img,
  .detail > .video-wrap {
    width: 100%;
    margin: 0 auto 10px;
  }

  .description {
    flex: 0 0 auto;
    text-align: left;
    margin-bottom: 30px;
  }
  .detail {
    flex: 1 1 auto;
  }

@media screen and (min-width:600px) {
  .photoDetail {
    flex-direction: row;
  }
  .photoIndex > div {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  .description {
    width: 20%;
    padding-right: 4%;
    box-sizing: border-box;
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
  .photoDetail {
    flex-direction: column;
  }
  .description > p {
    line-height: 18px;
  }
  .description-value {
    line-height: 14px;
  }
  .photoIndexH2 {
    margin-bottom: 1.4rem;
  }
  .photoIndexH2 > span {
    margin-top: 4px;
  }

  .photoIndexH2 > p {
    font-size: 12px;
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

.aplayer {
/*TODO: fix style*/
  width: 100%;
/*  max-width: 64rem;
   margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;*/
}
</style>
<template>
  <div class="photoIndex" ref="photoIndex">
    <div class="photoIndexH2">
      <div class="prev" :class="{ grey: noPrev }" @click="prevPage">prev -</div>
      <div class="next" :class="{ grey: noNext }" @click="nextPage">+ next</div>
    </div>
    <div class="photoDetail">
      <div class="description" v-if="photoData.hasOwnProperty('description')">
        <p class="description-name">{{photoData.description.name}}:</p>
        <p class="description-value" v-show="showDesc" v-html="photoData.description.value"></p>
      </div>
      <div class="detail">
        <div v-if="photoData.hasOwnProperty('audio')">
          <aplayer
            autoplay
            mutex
            theme="#42b983"
            preload="metadata"
            mode="circulation"
            :music="{
              /*TODO: use audioPlayerOptions*/
              //audioPlayerOptions
              title: this.photoData.audioTitle,
              author: this.photoData.audioAuthor,
              url: this.photoData.audio,
              pic: this.photoData.audioCover
            }">
          </aplayer>
          <br>
        </div>
        <div class="video-wrap" v-if="photoData.hasOwnProperty('video')">
            <video-player  ref="videoPlayer"
                :options="playerOptions">
            </video-player>
        </div>
        <img 
          v-for="n in photoData.length"
          :key="`${photoData.name}-${n}`"
          v-lazy="'http://go.divagao.com/' + photoData.name + '/' + n + '.' + indexImgType">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import {list} from '../menu.js';
import Aplayer from '../components/vue-aplayer.vue'
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    Aplayer,
    videoPlayer
  },
  data() {
    return {
      noNext: false,
      noPrev: false,
      showDesc: true,
      lastScrollPos: 0
    }
  },
  watch: {
    photoData() {
      if(this.$refs.photoIndex) {
        this.$refs.photoIndex.scrollTop = 0;
      }
    }
  },
  created() {
    const { params } = this.$route;
    const centerLength = list[params.name].sublist.center && list[params.name].sublist.center.length;
    const leftLength = list[params.name].sublist.left && list[params.name].sublist.left.length;
    const rightLength = list[params.name].sublist.right && list[params.name].sublist.right.length;

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
  mounted() {
    if (window.innerWidth < 600) {
      window.addEventListener('scroll', this.handleScroll, true);
    }
  },
  destroyed() {
    if (window.innerWidth < 600) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      if(!this.$refs.photoIndex) return;
      const scrollTop = this.$refs.photoIndex.scrollTop;
      this.showDesc = scrollTop < this.lastScrollPos && scrollTop < 300;
      this.lastScrollPos = scrollTop;
    },
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
          const centerLength = list[params.name].sublist.center.length;
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
          const rightLength = list[params.name].sublist.right.length;
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
          const leftLength = list[params.name].sublist.left.length;
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
      return list[routeParams.name].sublist[routeParams.position][routeParams.n];
    },
    audioPlayerOptions() {
      /*TODO: use audioPlayerOptions*/
      let title = {title: this.photoData.audioTitle};
      let author = {author: this.photoData.audioAuthor};
      let url = {url: this.photoData.audio};
      let pic = {pic: this.photoData.audioCover};
      return {
        title,
        author,
        url,
        pic
      }
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