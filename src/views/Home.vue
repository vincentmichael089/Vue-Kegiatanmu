<template>
  <div class="home">
    <div class="content">
      <div class="slider-wrapper">
        <p>Hari ini kamu mau</p>
        <div class="slider">
          <div class="slider-text1">nge-mall.</div>
          <div class="slider-text2">meeting.</div>
          <div class="slider-text3">ngoding.</div>
          <div class="slider-text4">ngantor.</div>
        </div>
      </div>
    </div>
    <div class="content-2">
      <p>psst.. daripada bingung ngingetnya, catet aja di  <router-link to="/kegiatan"> <span>Kegiatanmu</span></router-link>!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home{
  height: 100%;
}

.content {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-2{
  font-size: 24px;
    width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-weight: 1000;
  
}
.slider-wrapper {
  font-size: 40px;
  color: darkslategrey;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
span{
   font-family: 'Calistoga';
}

.slider {
  height: 50px;
  padding-left: 15px;
  overflow: hidden;
}

.slider div {
  color: white;
  height: 50px;
  margin-bottom: 50px;
  text-align: center;
  padding: 2px 15px;
  box-sizing: border-box;
}

.slider-text1 {
  background: palevioletred;
  animation: slide 5s linear infinite;
}

.slider-text2 {
  background: blueviolet;
}

.slider-text3 {
  background: darkgreen;
}

.slider-text4 {
  background: lightgreen;
}

@keyframes slide {
  0% {
    margin-top: -400px;
  }
  5% {
    margin-top: -300px;
  }
  25% {
    margin-top: -300px;
  }
  30% {
    margin-top: -200px;
  }
  50% {
    margin-top: -200px;
  }
  55% {
    margin-top: -100px;
  }
  75% {
    margin-top: -100px;
  }
  80% {
    margin-top: 0px;
  }
  100% {
    margin-top: 0px;
  }
}

@media (max-width: 720px) {
  .slider-wrapper {
    font-size: 20px;
  }

  .slider {
    height: 30px;
  } 
  
  .content{
    height: 33vh;
  }
}
</style>
