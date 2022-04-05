<template lang="html">
    <!-- <div class="Label" @click="select">
        <transition name="fade">
            <div class="LabelContainer" v-if="show == true">
                dafSDFadf
            </div>
        </transition>
    </div> -->
    <div class="Label" @click="select">
        <transition name="fade">
            <div class="LabelContainer">
                asdfadadfsdfsa
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labelWidth: "",
            currentWidth: "",
            ifSelect: -1,
            fadeSec: 0
            }
        },
    methods: {
        select: function() {
            this.ifSelect *= -1;
            console.log(this.ifSelect);
            // console.log(window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).width);
            this.labelWidth = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).width;
            this.currentWidth = window.getComputedStyle(document.getElementsByClassName("Label")[0]).width;
            console.log("labelWidth(select()): ", this.labelWidth);
            console.log("currentWidth(select()): ", this.currentWidth);

            if(this.ifSelect == 1) {
                document.getElementsByClassName("Label")[0].style.width = "auto";
                document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible";
                }
            if(this.ifSelect == -1) { 
                document.getElementsByClassName("Label")[0].style.width = "48px";
                document.getElementsByClassName("LabelContainer")[0].style.visibility = "hidden";
                }
        }
    }
    // methods: {
    //     select: function() {
    //         this.ifSelect *= -1;
    //         console.log(this.ifSelect);

    //         if(this.ifSelect == 1) { this.show = true; }
    //         if(this.ifSelect == -1) { this.show = false; }
    //     }
    // }
}
</script>

<style lang="css" scoped>
.Label {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    position: absolute;
    min-width: 48px;
    width: 48px;
    height: 10px;
    left: 20px;
    top: 20px;


    background: #3192CA;
    border-radius: 4px;
}
.LabelContainer {
    display: flex;
    visibility: hidden;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;

    position: static;
    min-width: 48px;
    width: auto;
    left: 20px;
    top: 0px;

    background: #3192CA;
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;
}

/* .fade-enter-active { transition: opacity .5s; }
.fade-leave-active { transition: opacity .5s; }
.fade-enter { opacity: 0; }
.fade-leave-to { opacity: 0; } */

</style>
