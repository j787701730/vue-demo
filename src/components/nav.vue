<template>
  <div class="bottom-nav-box">
    <ul class="bottom-nav">
      <router-link to="/">
        <li :class="$route.name?'':'active'">
          <Icon size="20" type="ios-home-outline" />
          <div>首页</div>
        </li>
      </router-link>
      <router-link to="/ranking">
        <li :class="$route.name=='ranking'?'active':''">
          <Icon size="20" type="ios-stats-outline" />
          <div>排名</div>
        </li>
      </router-link>
      <router-link to="/prize">
        <li :class="$route.name=='prize'?'active':''">
          <Icon size="20" type="ios-archive-outline" />
          <div>奖品</div>
        </li>
      </router-link>
      <router-link to="/join">
        <li :class="$route.name=='join'?'active':''">
          <Icon size="20" type="ios-clipboard-outline" />
          <div>报名</div>
        </li>
      </router-link>
      <router-link to="/complaint">
        <li :class="$route.name=='complaint'?'active':''">
          <Icon size="20" type="ios-book-outline" />
          <div>投诉</div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
// {{ $route.name}}
export default {
  components: {
    
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
}

.bottom-nav li {
  font-size: 12px;
  display: inline-block;
  width: 20%;
  color: #9F9C99;
  cursor: pointer;
}
.bottom-nav .active{
  color: #7088FD;
}
</style>