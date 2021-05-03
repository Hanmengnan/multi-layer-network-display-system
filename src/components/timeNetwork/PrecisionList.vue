<template>
  <div class="container">
    <div class="precision">
      <div class="title">精度筛选</div>
      <div class="select">
        <div class="select-list">
          <SelectDown
            :title="selectTitle"
            v-model="selector"
            :selectList="source"
            @input="chooseRange"
          />
        </div>
      </div>
    </div>
    <div class="list-body">
      <List is-scroll="scroll" :header="header" :body="selectBody" />
    </div>
  </div>
</template>

<script>
import List from "@/components/base/List.vue";
import SelectDown from "@/components/base/SelectDown.vue";

export default {
  components: {
    SelectDown,
    List
  },
  data() {
    return {
      header: [
        { value: "编号" },
        { value: "名称" },
        { value: "类型" },
        { value: "误差" }
      ],
      body: [
        {
          code: "0001",
          value: "北京",
          type: "最高基准站",
          error: "0",
          color: "white"
        },
        {
          code: "0013",
          value: "上海",
          type: "超高精度",
          error: "5ns",
          color: "white"
        },
        {
          code: "0018",
          value: "甘肃",
          type: "超高精度",
          error: "6ns",
          color: "white"
        },
        {
          code: "0020",
          value: "武汉",
          type: "超高精度",
          error: "9ns",
          color: "white"
        }
      ],
      selectTitle: "下拉选择",
      selectBody: [],
      source: ["误差0 - 10ns", "误差0 - 5ns"], //temp
      range: []
    };
  },
  watch: {
    body: {
      handler() {
        this.selectBody = this.body.map(val => val);
      }
    },
    selectTitle: {
      handler() {
        this.selectBody = this.body.filter(val => {
          return (
            Object.keys(val)
              .filter(val => val === "error")
              // eslint-disable-next-line no-unused-vars
              .every((el, idx) => {
                let parttern = /\d+/g;
                let item = parttern.exec(val[el]);
                return (
                  this.range === [] ||
                  (Number(item) >= this.range[0] &&
                    Number(item) <= this.range[1])
                );
              })
          );
        });
      }
    }
  },
  methods: {
    chooseRange(data) {
      this.selectTitle = data;
      let parttern = /\d+/g;
      this.range = [];
      let item = "";
      while ((item = parttern.exec(data)) != null)
        this.range.push(Number(item[0]));
      console.log(this.range);
    }
  },
  mounted() {
    this.selectBody = this.body.map(val => val);
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";

.container {
  height: 90%;
  color: @defaultFontColor;
  font-size: @defaultFontSize;
  .precision {
    position: relative;
    display: flex;
    height: 5%;
    padding-bottom: 10%;
    padding-top: 2%;
    .title {
      flex: 2;
    }
    .select {
      //background-color: @themeColorMiddle;
      position: relative;
      flex: 3;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }
    .select:hover {
      cursor: pointer;
    }
  }
  .list-body {
    width: 100%;
    height: auto;
  }
}
</style>
