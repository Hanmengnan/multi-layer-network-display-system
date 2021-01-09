<template>
  <div class="main-area">
    <table class="container">
      <thead>
        <th
          v-for="(cell, colIndex) in headerForShow"
          :key="colIndex"
          class="text"
          :style="`width: ${100 / header.length}%`"
        >
          <div v-text="cell.value" class="table-title"></div>
          <div class="filter-warp" v-if="cell.showFilter">
            <div class="iconfont" contenteditable="false">&#xe66f;</div>
            <input
              class="input-area"
              contenteditable="true"
              v-model="cell.filter"
            />
          </div>
          <span class="iconfont filter" @click="showFilter(cell.value)"
            >&#xe8b6;</span
          >
        </th>
      </thead>
    </table>
    <div class="body">
      <div class="scroll-content" :style="{ top }">
        <table class="container">
          <tbody ref="ele">
            <tr
              v-for="(row, rowIndex) in bodyForShow"
              :key="rowIndex"
              class="text"
            >
              <td
                v-for="prop in Object.keys(row).filter(val => val !== 'color')"
                :key="prop"
                :style="`width: ${100 / headerForShow.length}%`"
              >
                <span :style="`${row.color ? `color: ${row.color}` : ''}`">{{
                  row[prop]
                }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
let timer;
export default {
  props: {
    isScroll: {
      type: Boolean,
      default: true
    },
    header: {
      type: Array,
      require: true,
      default: () => {
        return [
          { value: "编号" },
          { value: "节点名称" },
          { value: "节点类型" }
        ];
      }
    },
    body: {
      type: Array,
      require: true,
      default: () => {
        return [
          { code: "1", value: "北京", status: "正常", color: "green" },
          { code: "2", value: "上海", status: "繁忙", color: "yellow" },
          { code: "3", value: "广州", status: "拥塞", color: "red " },
          { code: "4", value: "云南", status: "故障", color: "gray" },
          { code: "5", value: "新疆", status: "故障", color: "gray" },
          { code: "6", value: "贵州", status: "故障", color: "gray" },
          { code: "7", value: "青海", status: "故障", color: "gray" },
          { code: "8", value: "山东", status: "繁忙", color: "yellow" },
          { code: "9", value: "黑龙江", status: "拥塞", color: "red " },
          { code: "5", value: "新疆", status: "故障", color: "gray" },
          { code: "6", value: "贵州", status: "故障", color: "gray" },
          { code: "7", value: "青海", status: "故障", color: "gray" },
          { code: "8", value: "山东", status: "繁忙", color: "yellow" },
          { code: "9", value: "黑龙江", status: "拥塞", color: "red " },
          { code: "10", value: "黑龙江", status: "拥塞", color: "red " },
          { code: "11", value: "黑龙江", status: "拥塞", color: "red " },
          { code: "12", value: "黑龙江", status: "拥塞", color: "red " }
        ];
      }
    },
    viewHeight: {
      // 可视范围
      type: [Number, String],
      default: "200px" // 暂定组件高度
    }
  },
  data() {
    return {
      activeIndex: 0,
      view: "",
      headerForShow: [],
      bodyForShow: []
    };
  },
  methods: {
    showFilter(name) {
      this.headerForShow.forEach(val => {
        if (val.value === name) {
          val.showFilter = !val.showFilter;
        }
      });
    }
  },
  computed: {
    top: function() {
      let move = 0;
      if (this.activeIndex !== 0) {
        move = this.$refs.ele.offsetHeight / this.body.length; // 动态计算移动步长
        // console.log(move)
      }
      return -this.activeIndex * move + "px"; // 当前移动距离
    }
  },
  watch: {
    header: {
      handler() {
        this.headerForShow = this.header.map(val => {
          return {
            ...val,
            showFilter: false,
            filter: ""
          };
        });
      },
      deep: true
    },
    body: {
      handler() {
        this.bodyForShow = this.body.map(val => val);
      },
      deep: true
    },
    headerForShow: {
      handler() {
        this.bodyForShow = this.body.filter(val => {
          return Object.keys(val)
            .filter(val => val !== "color")
            .every((el, idx) => {
              const filterCon = this.headerForShow[idx].filter;
              return filterCon === "" || val[el].includes(filterCon);
            });
        });
      },
      deep: true
    }
  },
  mounted() {
    // this.view = {"height":this.viewHeight}
    this.headerForShow = this.header.map(val => {
      return {
        ...val,
        showFilter: false,
        filter: ""
      };
    });
    this.bodyForShow = this.body.map(val => val);
    if (this.isScroll) {
      document.querySelector(".body").style.overflow = "scroll";
    } else {
      timer = setInterval(() => {
        if (this.activeIndex < this.body.length) {
          // 最后一行滚动到顶端为止，若加上“-总行数”则只滚动到最后一行出现为止
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      }, 1000); // 移动时间间隔
    }
  },
  beforeDestroy() {
    clearInterval(timer);
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable";

.main-area {
  width: 100%;
  height: 100%;
}

.container {
  margin: auto;
  height: 100%;
  width: 100%;
}

.body {
  width: 100%;
  height: 99%;
  overflow: hidden;
  position: relative;
  //position: absolute;
}

.table-title {
  display: inline-block;
  position: relative;
}

.filter {
  position: absolute;
  cursor: pointer;
}

.filter-warp {
  position: absolute;
  color: black;
  display: flex;
  z-index: 1;

  width: 100%;
  justify-content: space-between;
  // border-radius: 10%;
  .input-area {
    width: 100%;
  }

  // left: 25%;
}

.scroll-content {
  position: relative;
  transition: top 1s; //上移速度
}

.text {
  align-content: center;
  line-height: 200%;
  color: @defaultFontColor; // 默认颜色
  font-size: @defaultFontSize;
  font-weight: @defaultFontWeight;
  position: relative;
}
</style>
