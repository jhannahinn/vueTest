<template lang="html">
    <div class="label" @click="open = !open">
    </div>
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
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;

    position: absolute;
    width: 48px;
    height: 10px;
    left: 20px;
    top: 20px;


    background: #3192CA;
    border-radius: 4px;
}
</style>
