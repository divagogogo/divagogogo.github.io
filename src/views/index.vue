<style scoped type="text/css">
  .main {
    width: 100%;
    height: 92vh;
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
    height: 92vh;
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
    .main-text {
      transform: translate(-50%, -50%);
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
    .main-text {
    }
  }

  .main-text {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
          <p>TIME FLIES AND MY ROLES MAY CHANGE</p>
          <p>YET MY LIFE GOAL WILL ALWAYS BE THE SAME</p>
          <p>ALL I WANNA DO IS TO WITNESS, RECORD AND FEEL</p>
          <p>THAT EVERY SINGLE MOMENT IN YOUR LIFE IS REAL</p>
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