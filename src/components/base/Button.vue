<template>
  <button
    data-text="切换"
    class="btn btn-primary btn-ghost btn-border-stroke  btn-text-float-up"
    @click="toHref(link)"
  >
    <div class="btn-borders">
      <div class="border-top"></div>
      <div class="border-right"></div>
      <div class="border-bottom"></div>
      <div class="border-left"></div>
    </div>
    <span class="btn-text">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
      default: ""
    },
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    toHref: function(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable";

.btn {
  --hue: 190;
  --ease-in-duration: 0.25s;
  --ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-out-duration: 0.65s;
  --ease-out-delay: var(--ease-in-duration);
  --ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  //padding: 0.5rem 0.5rem;
  font-size: @defaultFontSize*1.2;
  color: white;
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.25s;
  height: 60%;
  border: none;

  &-ghost {
    background-color: transparent;
  }

  &-text-float-up {
    &::after {
      position: absolute;
      content: attr(data-text);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transform: translateY(35%);
      transition: 0.25s ease-out;
    }

    // when hover, ease-in top-text; ease-out bottom-text

    .btn-text {
      display: block;
      transition: 0.75s 0.1s var(--ease-out-exponential);
    }

    &:hover {
      // when hover, ease-in bottom-text; ease-out top-text

      .btn-text {
        opacity: 0;
        transform: translateY(-25%);
        transition: 0.25s ease-out;
      }

      &::after {
        opacity: 1;
        transform: translateY(0);
        transition: 0.75s 0.1s var(--ease-out-exponential);
      }
    }
  }

  &:focus {
    border: 0;
    outline-color: color(@selectedColor);
    color: color(@selectedColor);
  }
}
</style>
