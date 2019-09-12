<template>
  <div style="padding-bottom:44px;">
    <Carousel autoplay v-model="value2" radius-dot loop height="300">
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/banner1.jpg" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/banner2.gif" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/banner3.jpg" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/banner4.jpg" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/banner5.jpg" alt />
        </div>
      </CarouselItem>
    </Carousel>
    <div style="margin-top:10px">
      <Button type="primary" style="width:80%;background:#6281FD;font-size:16px">活动奖品</Button>
    </div>
    <div style="text-align:center;padding: 10px 15px;font-weight:bold;color:black;">
      <div style="color:red">十一点整人气王：</div>
      <div>活动开始每日11:00整，票数第一的商家除了将获得活动链接首页价值1000元黄金广告位为期一天的免费推广，还可以获得本公司赠送的相应票数礼物</div>
      <div style="color:#FFC000">●●●●●●●●●●●●●●●●●●●●●●●●●●</div>
      <div style="color:red">大赛奖品如下：</div>一等奖：1名（排名第一）
      <br />1.最具人气荣誉奖牌一块
      <br />2.获的 iPhone X 一台
      <br />3.免费网页推广 三个月
      <br />
      <img src="../assets/prize1-1.png" style="width:80%;margin-top:15px" alt />
      <img src="../assets/prize1-2.jpg" style="width:80%" alt />
    </div>
    <router-link :to="{name:'ranking'}">ranking</router-link>

    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <span class="count">{{this.$store.state.count}}</span>
    </div>

    <Button type="primary" @click="addCount">+2</Button>&nbsp;
    <Button type="success" @click="reductionCount">-1</Button>
    <Nav></Nav>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { Button, Carousel, CarouselItem } from "iview";
import Nav from "./nav.vue";

export default {
  name: "app",
  data() {
    return {
      value2: 0
    };
  },
  components: {
    // HelloWorld
    Button,
    Carousel,
    CarouselItem,
    Nav
  },
  methods: {
    addCount: function() {
      // window.console.log(this.$store);
      this.$store.dispatch("addFun", 2);
    },
    reductionCount: function() {
      this.$store.commit("reduction");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.demo-carousel {
  background: #fff;
  width: 100%;
  height: 300px;
}
.demo-carousel img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.count {
  font-size: 18px;
  font-weight: bold;
}
</style>