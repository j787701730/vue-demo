<template>
  <div style="padding-bottom:44px;">
    <Carousel autoplay v-model="value2" radius-dot loop>
      <div class="demo-carousel">
        <img src="../assets/banner1.jpg" alt />
      </div>

      <div class="demo-carousel">
        <img src="../assets/banner2.jpg" alt />
      </div>

      <div class="demo-carousel">
        <img src="../assets/banner3.png" alt />
      </div>

      <div class="demo-carousel">
        <img src="../assets/banner4.jpg" alt />
      </div>

      <div class="demo-carousel">
        <img src="../assets/banner5.jpg" alt />
      </div>
    </Carousel>
    <div style="margin-top:10px">
      <Button type="primary" style="width:80%;background:#6281FD;font-size:16px">最新排名</Button>
    </div>
    <Row style="border-bottom:1px solid #ddd;padding:10px 0;margin-top:15px">
      <Col span="8">排名</Col>
      <Col span="8">选手</Col>
      <Col span="8">票数</Col>
    </Row>
    <Row
      class="player-row"
      style="border-bottom:1px solid #ddd;"
      v-for="(player, index) in players"
      :key="player.id"
    >
      <Col span="8">{{index+1}}</Col>
      <Col span="8" class="player-list">
        <img :src="player.img" alt />
        <span>{{player.name}}</span>
      </Col>
      <Col span="8">{{player.count}}</Col>
    </Row>
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
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "./nav.vue";
import { Carousel, Row, Col, Button } from "ant-design-vue";
export default {
  data() {
    return {
      value2: 0,
      height:
        ((window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth) *
          1080) /
        1920,
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
    Nav,
    Carousel,
    Row,
    Col,
    Button
  }
};
</script>

<style scoped>
.player-list {
  text-align: left;
}
.player-row {
  padding: 10px 0;
}
.player-row > div:first-child,
.player-row > div:last-child {
  line-height: 30px;
}
.player-list img {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  vertical-align: middle;
  margin-right: 6px;
}
.player-list span {
  vertical-align: middle;
}
</style>