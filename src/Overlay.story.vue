<template>
    <canvas
        class="canvas"
        ref="canvas"
    />
</template>

<script lang="ts">
import store from '@/store';
import face from './face1.json';
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
        for(const [i, position] of Object.entries(face.landmarks._positions)) {
            //drawPoint(position);
            ctx.fillText(i, position._x, position._y);
        }
    }
};
</script>

<style lang="sass">

</style>
