<template lang="html">
    <!-- <div class="Label" @click="select">
        <transition name="fade">
            <div class="LabelContainer">
                ldfkjasldks
            </div>
        </transition>
    </div> -->
    <!-- 라벨 오픈만 구현, 애니메이션 미구현 -->
    <div class="Label" @click="select">
        <div class="LabelContainer">
            ldfkjasldks
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labelWidth: "",
            currentWidth: "",
            labelHeight: "",
            currentHeight: "",
            ifSelect: -1,
            fadeSec: 0,
            firstOpen: 0,
            fadeWidth: "",
            fadeHeight: "6px",
            }
        },
    props: {
        label: String
    },
    // methods: {
    //     select: function() {
    //         this.ifSelect *= -1;
    //         console.log(this.ifSelect);
    //         // console.log(window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).width);
    //         this.labelWidth = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).width;
    //         this.currentWidth = window.getComputedStyle(document.getElementsByClassName("Label")[0]).width;
    //         console.log("labelWidth(select()): ", this.labelWidth);
    //         console.log("currentWidth(select()): ", this.currentWidth);

    //         if(this.ifSelect == 1) {
    //             document.getElementsByClassName("Label")[0].style.width = "auto";
    //             document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible";
    //             }
    //         if(this.ifSelect == -1) { 
    //             document.getElementsByClassName("Label")[0].style.width = "48px";
    //             document.getElementsByClassName("LabelContainer")[0].style.visibility = "hidden";
    //             }
    //     }
    // }
    methods: {
        select: function() {
            this.ifSelect *= -1;
            console.log(this.ifSelect);
            // this.labelWidth = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).width;
            this.currentWidth = window.getComputedStyle(document.getElementsByClassName("Label")[0]).width;
            // this.labelHeight = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).height;
            this.currentHeight = window.getComputedStyle(document.getElementsByClassName("Label")[0]).height;
            console.log("labelWidth: ", this.labelWidth);
            console.log("currentWidth: ", this.currentWidth);
            console.log("labelHeight: ", this.labelHeight);
            console.log("currentHeight: ", this.currentHeight);
            console.log("fadeWidth: ", this.fadeWidth);
            console.log("fadeHeight: ", this.fadeHeight);

            if(this.ifSelect == 1) {
                if(this.firstOpen == 0) {
                    document.getElementsByClassName("Label")[0].style.width = "auto";
                    document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible";
                    this.firstOpen = 1;
                    this.labelWidth = window.getComputedStyle(document.getElementsByClassName("Label")[0]).width;
                    this.labelHeight = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).height;
                    document.getElementsByClassName("Label")[0].style.width = "48px";
                    document.getElementsByClassName("LabelContainer")[0].style.visibility = "hidden";
                    } // 첫번째로 라벨 열었을 때에만 labelWidth, labelHeight 저장
                document.getElementsByClassName("Label")[0].style.width = this.labelWidth;
                document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible";
                }
                
            if(this.ifSelect == -1) { 
                document.getElementsByClassName("Label")[0].style.width = "48px";
                document.getElementsByClassName("LabelContainer")[0].style.visibility = "hidden";
                }
        }
    }
}
// if(this.fadeLevel == 1) {
//     document.getElementsByClassName("Label")[0].style.width = this.labelWidth;
//     this.fadeLevel = 2;
// }
// if(this.fadeLevel == 2) {
//     document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible";
//     this.fadeLevel = 0;
// }
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
