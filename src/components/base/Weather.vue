<template>
  <div class="weather-area">
    <div class="weather-left">
      <div class="time">{{ left.time }}</div>
      <div class="date">
        <span>{{ left.date + " " }}</span>
        <span>{{ left.week }}</span>
      </div>
    </div>
    <div class="weather-right">
      <img :src="require(`@/assets/img/weather/${this.code}.png`)" alt="" />
      <div class="detail">
        <div>
          <span>{{ right.weather }} {{ right.temperature }}</span>
        </div>
        <div>
          <span>{{ right.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "weather",
  data() {
    return {
      code: 101,
      right: {
        weather: "多云",
        temperature: "16.7℃",
        location: "北京市海淀区"
      },
      left: {
        now: new Date(),
        time: "",
        date: "",
        week: ""
      }
    };
  },
  mounted() {
    this.getWeather();
    this.currentTime();
  },
  methods: {
    getWeather() {
      axios
        .get("https://devapi.qweather.com/v7/weather/now", {
          params: {
            location: "116.41,39.92",
            key: "5151b5933c0f4a85bacaea81ec61f2d4"
          }
        })
        .then(res => {
          this.code = res.data.now.icon;
          this.right.weather = res.data.now.text;
          this.right.temperature = res.data.now.temp + "℃";
          // this.location =
        });
    },
    currentTime() {
      setInterval(this.getTime, 1000);
    },
    getTime() {
      let now = new Date();
      let yy = now.getFullYear();
      let mm = now.getMonth() + 1;
      let dd = now.getDate();
      let hh = now.getHours();
      let MM = now.getMinutes();
      let ss = now.getSeconds();
      let zz = now.getDay();
      this.left.time =
        this.filterTime(hh) +
        ":" +
        this.filterTime(MM) +
        ":" +
        this.filterTime(ss);
      this.left.date =
        yy + "/" + this.filterTime(mm) + "/" + this.filterTime(dd);
      switch (zz) {
        case 0:
          this.left.week = "周日";
          break;
        case 1:
          this.left.week = "周一";
          break;
        case 2:
          this.left.week = "周二";
          break;
        case 3:
          this.left.week = "周三";
          break;
        case 4:
          this.left.week = "周四";
          break;
        case 5:
          this.left.week = "周五";
          break;
        case 6:
          this.left.week = "周六";
          break;
      }
    },
    filterTime(value) {
      if (parseInt(value) < 10) {
        value = "0" + value;
      }
      return value;
    }
  }
};
</script>

<style lang="less">
@import "~@/assets/css/variable";
@import "~@/assets/css/mixin/base";
.weather-area {
  .mixin-width-height();
  display: flex;
  position: relative;
  font-size: @defaultFontSize;
  color: @defaultFontColor;

  .weather-left {
    .mixin-flex(@flex-direction: column, @justify-content: center);
    flex: 1;
  }
  .weather-right {
    .mixin-flex(@justify-content: center);
    flex: 1;
    img {
      width: 30%;
    }
    .detail {
      .mixin-flex(@flex-direction: column);
    }
  }
}
</style>
