<template>
    <canvas
        class="canvas"
        ref="canvas"
    />
</template>

<script lang="ts">
import store from '@/store';
import face from './face1.json';
import { IPoint } from 'face-api.js';
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import '@/shims 

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
        for(const [i, position] of Object.entries(face.landmarks._positions)) {
            //drawPoint(position);
            ctx.fillText(i, position._x, position._y);
        }
    }
};
</script>

<style lang="sass">

</style>
