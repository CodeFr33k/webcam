<template>
    <canvas
        class="canvas"
        ref="canvas"
    />
</template>

<script lang="ts">
import {
    IPoint,
    Point,
} from 'face-api.js';
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
        const canvas = this.$refs.canvas as HTMLCanvasElement;
        canvas.width = 640;
        canvas.height = 480;
        const ctx = canvas.getContext("2d") as any;
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = "#FF0000";
        const drawPoint = (pt: IPoint) => {
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, 2, 0, 2 * Math.PI)
            ctx.fill()
          }
        for(const position of face.landmarks._positions) {
            drawPoint(new Point(position._x, position._y));
        }
    }
};
</script>

<style lang="sass">

</style>
