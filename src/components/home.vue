<template>
  <div style="padding-bottom:44px;">
    <Carousel autoplay v-model="value2" radius-dot loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/banner1.jpg" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/banner2.jpg" alt />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/banner3.png" alt />
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
    <Row>
        <Col class-name="list-box" v-for="item in list" span="8" :key="item.icon">
        <div>
          <Icon :type="item.icon" size='18' />
          <span> {{item.text}}</span>
        </div>
        <div style="line-height:30px">{{item.count}}</div>
        </Col>
    </Row>
    <div class="vote" style="margin-top:5px;border-top:1px solid #eee">
      <Icon type="md-time" size="18"/>
      <span> 投票日期: 2019-09-10到2019-09-13</span>
    </div>
    <div class="vote">
      <Icon type="md-time" size="18"/>
      <span> 活动剩余: {{count}}</span>
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

import Nav from "./nav.vue";

export default {
  name: "app",
  data() {
    return {
      value2: 0,
      height:(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)*1080/1920
      ,
      list:[
        {
          icon:'ios-attach',
          text:'参与选手',
          count:73
        },
        {
          icon:'ios-thumbs-up-outline',
          text:'累计投票',
          count:23463
        },
        {
          icon:'ios-pulse-outline',
          text:'访问量',
          count:23952
        },
      ],
      timer:'',
      count:''
    };
  },
  components: {
    Nav
  },
  methods: {
    addCount: function() {
      // window.console.log(this.$store);
      this.$store.dispatch("addFun", 2);
    },
    reductionCount: function() {
      this.$store.commit("reduction");
    },
    countDown: function (){
       var time_end = new Date(1569605099);
       var time_now = Math.round(new Date() / 1000)
       var time_distance = time_end - time_now;
      if (time_distance > 0) {
          var int_day = Math.floor(time_distance / (60 * 60 * 24));
          var int_hour = Math.floor(time_distance / (60 * 60)) - (int_day * 24);
          var int_minute = Math.floor(time_distance / 60) - (int_day * 24 * 60) - (int_hour * 60);
          var int_second = Math.floor(time_distance) - (int_day * 24 * 60 * 60) - (int_hour * 60 * 60) - (int_minute * 60);
          if (int_hour < 10) int_hour = "0" + int_hour;
          if (int_minute < 10) int_minute = "0" + int_minute;
          if (int_second < 10) int_second = "0" + int_second;
          this.count = int_day + "天" + int_hour + "时" + int_minute + "分" + int_second + "秒";
      } else {
this.count = '结束';
         clearInterval(this.timer);
      }
    }
  },
  mounted() {
      this.timer = setInterval(this.countDown, 100);
    },
    beforeDestroy() {
      clearInterval(this.timer);
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
  height: 100%;
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
.list-box{
  border-right:1px solid #ddd;
  margin-top: 15px;
}
.vote{
  text-align: left;
  padding:5px 10px;
  border-bottom: 1px solid #ddd;
}
.vote i,.vote span{
  vertical-align: middle
}
.list-box:last-child{
  border-right:none
}
</style>