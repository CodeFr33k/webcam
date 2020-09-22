<template>
    <canvas
        class="canvas"
        ref="canvas"
    />
</template>

<script lang="ts">
import face from './face2.json';
import {
    Component,
    Vue,
} from 'vue-property-decorator';

@Component({
    components: { },
})
export default class extends Vue {
    mounted() {
        this.$refs.canvas.width = 640;
        this.$refs.canvas.height = 480;
        const ctx = this.$refs.canvas.getContext("2d");
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = "#FF0000";
        const drawPoint = (pt: IPoint) => {
            ctx.beginPath()
            ctx.arc(pt._x, pt._y, 2, 0, 2 * Math.PI)
            ctx.fill()
          }
        for(const position of face.landmarks._positions) {
            drawPoint(position);
        }
    }
};
</script>

<style lang="sass">

</style>
