<template lang="html">
    <div class="Label" @click="select, show = !show">
        <!--  -->
        <Transition name="bounce">
            <!-- <div class="LabelAnimate" v-if="show == true"></div> -->
            <p v-if="show" style="margin-top: 20px; text-align: center;"></p>
        </Transition>
        <!--  -->
        <div class="LabelContainer">
            label1
        </div>
    </div>
</template>

<script>
//

//

export default {
    data() {
        return {
            labelWidth: "",
            currentWidth: "",
            labelHeight: "36px",
            currentHeight: "",
            firstOpen: 0,
            ifSelect: -1,
            fadeWidth: 26.0, // string -> float 형변환 가능해지면 사용가능
            fadeLevel: 0.0,
            show: false,
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

            if(this.ifSelect == 1) {
                if(this.firstOpen == 0) {
                    document.getElementsByClassName("Label")[0].style.width = "auto";
                    document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible";
                    this.firstOpen = 1;
                    this.labelWidth = window.getComputedStyle(document.getElementsByClassName("Label")[0]).width;
                    this.labelHeight = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).height;
                    document.getElementsByClassName("Label")[0].style.width = "48px";
                    document.getElementsByClassName("LabelContainer")[0].style.visibility = "hidden";
                    this.fadeWidth = 26.0; // labelWidth 결정되고 지정
                    this.fadeLevel = this.fadeWidth / 10.0;
                    console.log(this.fadeWidth, ", ", this.fadeLevel);
                } // 첫번째로 라벨 열었을 때에만 labelWidth, labelHeight 저장
                for(var i = 0; i < 10; i++) {
                    document.getElementsByClassName("Label")[0].style.width = (48.0 + (i + 1) * this.fadeLevel) + "px";
                    console.log((48.0 + (i + 1) * this.fadeLevel) + "px");
                }
                document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible";
                }
                
            if(this.ifSelect == -1) { 
                document.getElementsByClassName("Label")[0].style.width = "48px";
                document.getElementsByClassName("LabelContainer")[0].style.visibility = "hidden";
                }
        }
    }
}
</script>

<style lang="css" scoped>
/*  */
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0, 1);
    }
    100% {
        transform: scale(1, 1);
    }
}
.LabelAnimate {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    position: static;
    min-width: 48px;
    width: 74px;
    height: 10px;
    left: 20px;
    top: 20px;


    background: #3192CA;
    border-radius: 4px;
}
/*  */

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
    min-width: 74px; /* 이거 빼면 Label이 튀어나옴 */
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

</style>
