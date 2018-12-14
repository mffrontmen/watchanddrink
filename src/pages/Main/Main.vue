<template>
  <div id="main">
    <div class="main_header">
      <Input name="search-box" type="string" @handleInput="handleInput"/>
      <Btn title="Advice me drink" @handleClick="handleSearch"/>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/Button";
import Input from "@/components/Input";
import gql from "graphql-tag";

const DRINKS_QUERY = gql`
  query {
    allUsers {
      id
      name
      age
      job
    }
  }
`;

export default {
  name: "Main",
  data: () => ({
    movieList: [{ id: 1, name: "Titanic" }],
    drinksList: [{ id: 1, name: "Red Vine", movie_id: 1 }]
  }),
  components: {
    Btn,
    Input
  },
  apollo: {
    drinks: {
      query: DRINKS_QUERY,
      loadingKey: "loading"
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