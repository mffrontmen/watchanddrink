<template>
  <div class="button">
    <button
      class="btn-default"
      @click="handleClick"
    >
      {{title}}
    </button>
  </div>
</template>

<script>
export default {
  name: "button",
  props: {
    title: {
      default: String
    }
  },
  methods: {
    handleClick() {
      this.$emit("handleClick");
    }
  }
};
</script>

<style>
.button .btn-default {
  width: 204px;
  height: 44px;
  background: #d23232;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  margin-left: 5px;
  cursor: pointer;
  transition: all .5s;
}

.button .btn-default:hover {
  background: #a03838;
  transition: all .5s;
}
</style>
