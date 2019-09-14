<template>
  <div style="padding-bottom:44px;">
    <Carousel autoplay v-model="value2" radius-dot loop>
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
          <Icon :type="item.icon" size="18" style="vertical-align: middle;" />
          <span style="vertical-align: middle;">&nbsp;{{item.text}}</span>
        </div>
        <div style="line-height:30px">{{item.count}}</div>
      </Col>
    </Row>
    <div class="vote" style="margin-top:5px;border-top:1px solid #eee">
      <Icon type="md-time" size="18" />
      <span>&nbsp;投票日期: 2019-09-10到2019-09-13</span>
    </div>
    <div class="vote">
      <Icon type="md-time" size="18" />
      <span>&nbsp;活动剩余: {{count}}</span>
    </div>
    <div style="padding: 0 15px;margin-top:8px">
      <Input search enter-button="搜索" placeholder="请输入编号或姓名" />
    </div>
    <div style="margin-top:10px" class="btns-div">
      <Button type="primary">规则/奖品</Button>&nbsp;
      <Button type="primary">比赛排名</Button>&nbsp;
      <Button type="primary">我要报名</Button>
    </div>
    <div style="margin-top:10px">
      <ButtonGroup style="width:60%">
        <Button
          style="width:50%"
          @click="changeBtnType(0)"
          :class="btnType==0?'ivu-btn-primary':''"
        >人气选手</Button>
        <Button
          style="width:50%"
          @click="changeBtnType(1)"
          :class="btnType==1?'ivu-btn-primary':''"
        >最新参与</Button>
      </ButtonGroup>
    </div>
    <Row :gutter="5" style="padding:0 10px;margin-top:10px">
      <Col span="12" v-for="play in players" :key="play.id">
        <div style="border:1px solid #ddd;margin-bottom:10px">
          <div class="player-img">
            <div>{{play.id}}号</div>
            <img style="max-width:100%;" :src="play.img" alt />
          </div>
          <div
            style="line-height: 32px;
    height: 32px;
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;"
          >{{play.name}}</div>
          <div>
            <Button style="float:left;margin-left:10px;width:35%">投票</Button>
            <span
              style="float:right;margin-right:10px;line-height:32px;color:red;font-size:16px"
            >{{play.count}}票</span>
          </div>
          <div style="clear:both;height:10px"></div>
        </div>
      </Col>
    </Row>

    <div style="margin-top:10px">查看更多</div>
    <div style="margin-top:10px">
      <Button style="width:90%;font-size:16px" type="primary">活 动 规 则</Button>
    </div>
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
      btnType: 0,
      height:
        ((window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth) *
          1080) /
        1920,
      list: [
        {
          icon: "ios-attach",
          text: "参与选手",
          count: 73
        },
        {
          icon: "ios-thumbs-up-outline",
          text: "累计投票",
          count: 23463
        },
        {
          icon: "ios-pulse-outline",
          text: "访问量",
          count: 23952
        }
      ],
      timer: "",
      count: "",
      players: [
        {
          id: 53,
          name: "天空之城",
          count: 5813,
          img: require("../assets/banner2.jpg")
        },
        {
          id: 24,
          name: "简约书吧",
          count: 5813,
          img: require("../assets/banner4.jpg")
        },
        {
          id: 64,
          name: "优格小k专业工作室",
          count: 5813,
          img: require("../assets/banner2.jpg")
        },
        {
          id: 17,
          name: "天空之城1",
          count: 5813,
          img: require("../assets/banner4.jpg")
        },
        {
          id: 22,
          name: "天空之城2",
          count: 5813,
          img: require("../assets/banner4.jpg")
        },
        {
          id: 33,
          name: "天空之城3",
          count: 5813,
          img: require("../assets/banner5.jpg")
        },
        {
          id: 44,
          name: "天空之城4",
          count: 5813,
          img: require("../assets/banner5.jpg")
        },
        {
          id: 55,
          name: "天空之城5",
          count: 5813,
          img: require("../assets/banner2.jpg")
        },
        {
          id: 66,
          name: "天空之城6",
          count: 5813,
          img: require("../assets/banner2.jpg")
        },
        {
          id: 77,
          name: "天空之城7",
          count: 5813,
          img: require("../assets/banner2.jpg")
        }
      ]
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
    countDown: function() {
      var time_end = new Date(1569605099000);
      var time_now = new Date();
      var time_distance = time_end - time_now;

      if (time_distance > 0) {
        var int_day = Math.floor(time_distance / 1000 / (60 * 60 * 24));
        var int_hour =
          Math.floor(time_distance / 1000 / (60 * 60)) - int_day * 24;
        var int_minute =
          Math.floor(time_distance / 1000 / 60) -
          int_day * 24 * 60 -
          int_hour * 60;
        var int_second = (
          Math.floor(time_distance) / 1000 -
          int_day * 24 * 60 * 60 -
          int_hour * 60 * 60 -
          int_minute * 60
        ).toFixed(1);

        if (int_hour < 10) int_hour = "0" + int_hour;
        if (int_minute < 10) int_minute = "0" + int_minute;
        if (int_second < 10) int_second = "0" + int_second;
        this.count =
          int_day +
          "天 " +
          int_hour +
          "时 " +
          int_minute +
          "分 " +
          int_second +
          "秒";
      } else {
        this.count = "0天 0时 00分 0秒";
        clearInterval(this.timer);
      }
    },
    changeBtnType: function(idx) {
      this.btnType = idx;
      this.players.reverse();
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
.btns-div button {
  width: 30%;
}
.count {
  font-size: 18px;
  font-weight: bold;
}
.list-box {
  border-right: 1px solid #ddd;
  margin-top: 15px;
}
.vote {
  text-align: left;
  padding: 5px 10px;
  border-bottom: 1px solid #ddd;
}
.vote i,
.vote span {
  vertical-align: middle;
}
.list-box:last-child {
  border-right: none;
}
.player-img {
  position: relative;
}
.player-img div {
  position: absolute;
  top: 0;
  left: 10px;
  background: blue;
  color: #fff;
  font-size: 14px;
  padding: 3px 10px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>