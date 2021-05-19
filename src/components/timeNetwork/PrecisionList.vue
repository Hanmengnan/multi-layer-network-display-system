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
  props: {
    nodeList: {
      type: Array,
      require: false,
      default: () => []
    }
  },
  data() {
    return {
      header: [
        { value: "编号" },
        { value: "名称" },
        { value: "类型" },
        { value: "误差" }
      ],
      selector: "",
      selectTitle: "下拉选择",
      selectBody: [],
      body: [],
      source: [
        { name: "误差0 - 10ns", id: "误差0 - 10ns" },
        { name: "误差0 - 5ns", id: "误差0 - 5ns" },
        { name: "全选", id: "全选" }
      ],
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
                console.log(this.range);
                return (
                  this.range.length === 0 ||
                  (Number(item) >= this.range[0] &&
                    Number(item) <= this.range[1])
                );
              })
          );
        });
      }
    },
    nodeList: {
      deep: true,
      handler: function() {
        this.body = this.nodeList.map(val => {
          return {
            code: val.id,
            value: val.name,
            type: val.type,
            error: val.error + "ns",
            color: "white"
          };
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
      while ((item = parttern.exec(data)) != null) {
        console.log(item);
        this.range.push(Number(item[0]));
      }
      console.log(this.range);
    }
  },
  mounted() {
    this.selectBody = this.nodeList.map(val => {
      return {
        code: val.id,
        value: val.name,
        type: val.type,
        error: val.error + "ns",
        color: "white"
      };
    });
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
    padding-bottom: 8%;
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
    height: 70%;
    overflow: scroll;
  }
}
</style>
