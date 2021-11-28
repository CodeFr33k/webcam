<template>
    <div class="face-mask-box" ref="faceBox"> 
    </div>
</template>

<script>
import store from '@/store';
import * as THREE from 'three';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
    Component,
    Vue,
} from 'vue-property-decorator';
let camera, scene, renderer;
let geometry, material, mesh;

@Component()
export default class extends Vue {
    store = store;
    mounted() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2500 );
        camera.position.set( 0.0, 400, 400 * 3.5 );
        const particleLight = new THREE.Mesh(
            new THREE.SphereBufferGeometry( 4, 8, 8 ),
            new THREE.MeshBasicMaterial( { color: 0xffffff } )
        );
        scene.add(particleLight);
        const ambientLight = new THREE.AmbientLight( 0xcccccc );
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight( 0xffffff, 2, 800 );
        particleLight.add(pointLight);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        const effect = new OutlineEffect(renderer, {});
        this.$refs.faceBox.appendChild(renderer.domElement);
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.minDistance = 200;
        controls.maxDistance = 2000;
        const loader = new GLTFLoader();
        loader.load( 'box.glb', ( gltf ) => {
            scene.add( gltf.scene );
            camera.lookAt( gltf.scene.position );
            const cube = gltf.scene.children[2];
            const colors = new Uint8Array(2);
            for ( let c = 0; c <= colors.length; c ++ ) {
                colors[ c ] = ( c / colors.length ) * 256;
            }
            const gradientMap = new THREE.DataTexture( colors, colors.length, 1, THREE.LuminanceFormat );
            gradientMap.minFilter = THREE.NearestFilter;
            gradientMap.magFilter = THREE.NearestFilter;
            gradientMap.generateMipmaps = false;
            const material = new THREE.MeshToonMaterial( {
                color: new THREE.Color( 0xff0000 ),
                gradientMap,
            });
            cube.traverse((o) => {
              if (o.isMesh) {
                o.material = material;
                o.material.skinning = true;
              }
            });
            window.cube = cube;
            const animate = () => {
                const timer = Date.now() * 0.00025;
				particleLight.position.x = Math.sin( timer * 7 ) * 300;
				particleLight.position.y = Math.cos( timer * 5 ) * 400;
				particleLight.position.z = Math.cos( timer * 3 ) * 300;
                requestAnimationFrame( animate );
                const yaw = this.store.yaw * Math.PI / 360;
                const pitch = this.store.pitch * Math.PI / 360;
                cube.children[0].children[0].rotation.y = yaw;
                cube.children[0].children[0].rotation.x = pitch;
                effect.render(scene, camera);
            }
            animate();
        }, undefined, function ( error ) {
            console.error( error );
        });
    }
}

</script>

<style>
            body { margin: 0; background-color: white; }
            canvas { width: 100%; height: 100%; background-color: white; }
</style>
