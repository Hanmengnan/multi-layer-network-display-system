<template>
  <div class="load-monitor">
    <div class="lines">
      <div v-for="line in overload" :key="line.name" class="line">
        <LineProcess
          :title="line.name"
          :value="line.value"
          :themeColor="
            `
            ${(value => {
              if (value < 60) return themeColor5;
              if (value < 80) return themeColor3;
              return themeColor10;
            })(line.value)}
          `.trim()
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import LineProcess from "@/components/base/LineProcess.vue";
import { themeColor5, themeColor3, themeColor10 } from "@/assets/js/variable";

let timer = "";
export default {
  name: "load-monitor",
  components: {
    LineProcess
  },
  props: {
    overload: {
      type: Array,
      require: false,
      default: () => []
    }
  },
  data() {
    return {
      themeColor3,
      themeColor5,
      themeColor10,
      showList: [
        {
          name: "北京-天津",
          value: 74
        },
        {
          name: "北京-石家庄",
          value: 63
        },
        {
          name: "北京-太原",
          value: 57
        },
        {
          name: "北京-张家口",
          value: 95
        }
      ]
    };
  },
  mounted() {
    timer = setInterval(() => {
      this.showList = [
        {
          name: "北京-天津",
          value: parseInt(Math.random() * 100)
        },
        {
          name: "北京-石家庄",
          value: parseInt(Math.random() * 100)
        },
        {
          name: "北京-太原",
          value: parseInt(Math.random() * 100)
        },
        {
          name: "北京-张家口",
          value: parseInt(Math.random() * 100)
        }
      ];
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(timer);
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/mixin/base";

.load-monitor {
  .mixin-width-height();

  .lines {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    .line {
      margin: 10px 0;
    }
  }
}
</style>
