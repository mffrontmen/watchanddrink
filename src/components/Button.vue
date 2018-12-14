<template>
    <div class="button">
        <button @click="handleClick">
            {{title}}
        </button>
    </div>
</template>

<script>
    export default {
        name: "button",
        props: {
            title: {
                default: String,
                type: ''
            }
        }
    }
</script>