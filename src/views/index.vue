<style scoped type="text/css">
  .main {
    width: 100%;
    height: 92vh;
    overflow: hidden;
    position: relative;
    background-color: #141414;
  }
  .main-text-wrap {
    width: 100%;
    height: 100%;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    font-weight: lighter;
    font-size: 1rem;
  }
  .main-bg {
    width: 100%;
    height: 93vh;
    opacity: 1;
    transition: all 2s;
  }
  @media screen and (min-width:600px) {
    .main-bg {
      background: #141414 center center/30% auto url('../assets/main.jpg') no-repeat;
    }
    .main-op {
      opacity: 0;
    }
    .main-text-wrap {
      text-align: center;
      font-size: 1.8rem;

    }
  }

  @media screen and (max-width:600px) {
    .main-bg {
      background: #141414 center center/60% auto url('../assets/main.jpg') no-repeat;
    }
    .main-op {
      opacity: 0;
    }
    .main-text-wrap {
      opacity: 1;
      text-align: center;
      font-size: 1.3rem;

    }
  }

  .main-text {
    margin: 9vh 0;
    width: 100%;
    height: 74vh;
    position: relative;
  }
  .main-text-title {
    position: absolute;
    text-align: left;
    left: 3.7vw;
    top: 0;
  }
  .main-text-title > p {
    font-size: 80px;
    margin: 0;
  }
  .main-text-detail {
    text-align: right;
    position: absolute;
    right: 3.7vw;
    bottom: 3rem;
    border-bottom: 1px solid #fff;
    font-family: FuturaBook;
    font-size: 12px;
    line-height: 22px;
  }
  .main-text-enter {
    position: absolute;
    bottom: 0;
    right: 3.7vw;
  }
  .main-text-enter > p {
    margin: 0;
  }
  .to-center {
    display: block;
    opacity: 1;
    animation: floatCenter 1.4s;
  }
  @keyframes floatCenter {
    0% {
      top: 40%;
      opacity: 0;
    } 
    100% {
      top: 50%;
      opacity: 1;
    }
  }

</style>
<template>
  <div>
    <div class="main">
      <div class="main-bg" :class="{'main-op': showText}" @click="showText=!showText">
      </div>
      <div class="main-text-wrap" :class="{'to-center': showText}" @click.stop.capture="showAlbum">
        <div class="main-text">
          <div class="main-text-title">
            <p>DIVA</p>
            <p>GAO</p>
          </div>
          <div class="main-text-detail">
            <p>
              Time Files And My Roles May Change</br>Yet My Life Goal Will Always Be The Same</br>All I Wanna Do Is To Witness, Record And Feel</br>That Every Single Moment In Your Life Is Real</p>
          </div>
          <div class="main-text-enter">
            <p>-ENTER</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      showText: false
    }
  },
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
      setTimeout(()=>{
        this.showText = !this.showText;
      }, 2000);
    }
  },
}
</script>