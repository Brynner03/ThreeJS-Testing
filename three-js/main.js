import * as THREE from 'three'

// Code to draw lines
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

// Create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( {color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3 ( -10, 0, 0 ) );
points.push( new THREE.Vector3 ( 0, 10, 0 ) );
points.push( new THREE.Vector3 ( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points )

// Put points and material together to make a line
const line = new THREE.Line( geometry, material )

scene.add(line)
renderer.render( scene, camera )

function animate() {
  line.rotation.x += 0.02
  line.rotation.y -= 0.03
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );