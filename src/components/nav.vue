<template>
  <div class="bottom-nav-box">
    <ul class="bottom-nav">
      <router-link to="/">
        <li :class="$route.name?'':'active'">
          <Icon size="20" type="home" />
          <div>首页</div>
        </li>
      </router-link>
      <router-link to="/ranking">
        <li :class="$route.name=='ranking'?'active':''">
          <Icon size="20" type="gold" />
          <div>排名</div>
        </li>
      </router-link>
      <router-link to="/prize">
        <li :class="$route.name=='prize'?'active':''">
          <Icon size="20" type="gift" />
          <div>奖品</div>
        </li>
      </router-link>
      <router-link to="/join">
        <li :class="$route.name=='join'?'active':''">
          <Icon size="20" type="audit" />
          <div>报名</div>
        </li>
      </router-link>
      <router-link to="/complaint">
        <li :class="$route.name=='complaint'?'active':''">
          <Icon size="20" type="book" />
          <div>投诉</div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
// {{ $route.name}}
import { Icon } from "ant-design-vue";
export default {
  components: {
    Icon
  }
};
</script>

<style scoped>
.bottom-nav-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
}
.bottom-nav {
  font-size: 0;
  height: 44px;
  border-top: 1px solid #ddd;
  padding-top: 3px;
  padding-left: 0px;
}

.bottom-nav li {
  font-size: 12px;
  display: inline-block;
  width: 20%;
  color: #9f9c99;
  cursor: pointer;
}
.bottom-nav .active {
  color: #7088fd;
}
</style>