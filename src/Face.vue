<template>
    <div class="face-box"> 
        <video
            @loadedmetadata="onPlay"
            ref="video"
            autoplay
            muted
            playsinline
            class="video"
        ></video>
        <canvas
            class="canvas"
            ref="canvas"
        />
    </div>
</template>

<script>
import store from '@/store';
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import * as faceapi from 'face-api.js';

@Component()
export default class extends Vue {
    mounted() {
        this.start();
    }
    async start() {
        await faceapi.nets.tinyFaceDetector.load(BASE);
        await faceapi.loadFaceLandmarkModel(BASE);

        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });  
        this.$refs.video.srcObject = stream
    }
    async onPlay() {
        if (
            this.$refs.video.paused ||
            this.$refs.video.ended ||
            !faceapi.nets.tinyFaceDetector.params
        ) {
            return setTimeout(() => this.onPlay())
        }
        const inputSize = 512
        const scoreThreshold = 0.5 
        const options = new faceapi.TinyFaceDetectorOptions({
            inputSize,
            scoreThreshold,
        });

      const ts = Date.now()

      const result = await faceapi.detectSingleFace(this.$refs.video, options).withFaceLandmarks()

      if (result) {
        const dims = faceapi.matchDimensions(this.$refs.canvas, this.$refs.video, true)
        const resizedResult = faceapi.resizeResults(result, dims)

          new faceapi.draw.DrawFaceLandmarks(resizedResult.landmarks, {
            lineColor: 'rgb(255,255,255)',
            pointColor: 'rgb(255,255,255)',
          }).draw(this.$refs.canvas);
          store.updateFaceData({
            landmarks: resizedResult.landmarks,
          });
      }

      setTimeout(() => this.onPlay())
    }
}

</script>

<style lang="sass">
.face-box
    position: relative

.canvas 
    position: absolute
    top: 0
    left: 0
    background: 0
    width: auto
    height: auto

.video
    opacity: 0

</style>
