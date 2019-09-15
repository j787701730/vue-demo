<template>
  <div>
    <Icon type="clock-circle" size="18" />
    <span>&nbsp;活动剩余: {{count}}</span>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
export default {
  data() {
    return {
      timer: "",
      count: ""
    };
  },
  components: { Icon },
  methods: {
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