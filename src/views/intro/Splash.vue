<template lang="html">
    <button class="label" @click="open = !open">
    </button>
</template>

<script>
export default {
    data() {
        return {
            open: false
        }
    }
    // methods: {
        
    // }
}
</script>

<style lang="css" scoped>
.label {
    background-color: #3192CA;
    width: 48px;
    height: 10px;
    border: none;
    border-radius: 4px;
}
</style>
