<template>
  <div id="main">
    <div class="main_header">
      <Input
        name="search-box"
        type="string"
        @handleInput="handleInput"
      />
      <Btn
        title="Advice me drink"
        @handleClick="handleSearch"
      />
    </div>
    <div class="main_content">
      <ul>
        <li
          v-for="({ id, name }, key) in drinksList"
          :key="key"
        >
          {{id}} - {{name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/Button";
import Input from "@/components/Input";
import { DRINKS_QUERY } from "@/graphql/drinks";

export default {
  name: "Main",
  data: () => ({
    movieList: [{ id: 1, name: "Titanic" }],
    drinksList: []
  }),
  components: {
    Btn,
    Input
  },
  apollo: {
    beers() {
      return {
        query: DRINKS_QUERY
      }
    }
  },
  methods: {
    handleInput({ name, value }) {
      console.log(name, value); // eslint-disable-line
    },
    handleSearch() {
      console.log("start searching"); // eslint-disable-line
    }
  }
};
</script>

<style >
#main {
  display: flex;
  justify-content: center;
}

.main_header {
  display: flex;
  border-bottom: 2px solid;
  padding-bottom: 20px;
}
</style>