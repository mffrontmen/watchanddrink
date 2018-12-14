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
	</div>
</template>

<script>
import Btn from '@/components/Button'
import Input from '@/components/Input'

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
	methods: {
		handleInput({ name, value }) {
			console.log(name, value)
		},
		handleSearch() {
			console.log('start searching')
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