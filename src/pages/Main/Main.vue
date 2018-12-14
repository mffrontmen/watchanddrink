<template>
    <div id="main">
        <ul>
            <li
              v-for="({ id, name }, key) in movieList"
              :key="key"
            >
							{{name}}
            </li>
						<hr>
						<li
              v-for="({ id, name }, key) in drinksList"
              :key="key"
            >
							{{name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        data: () => ({
            movieList: [
                { id: 1, name: 'Titanic' }
						],
						drinksList: [
							{ id: 1, name: 'Red Vine', movie_id: 1 }
						]
        })
    }
</script>