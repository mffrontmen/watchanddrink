<template>
  <div class="input">
    <input
      class="field"
      :type="type"
      :name="name"
      @input="handleInput"
    />
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

<style>
  .field {
    height: 40px;
    width: 400px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 24px;
  }
</style>
