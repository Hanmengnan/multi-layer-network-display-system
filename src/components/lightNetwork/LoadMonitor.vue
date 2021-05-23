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
      themeColor10
    };
  },
  mounted() {},
  beforeDestroy() {}
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
