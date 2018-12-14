<template>
  <div class="input">
    <input :type="type" :name="name">
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleInput({ target: { value } }) {
      this.$emit("handleInput", {
        value,
        name: this.name
      });
    }
  }
};
</script>