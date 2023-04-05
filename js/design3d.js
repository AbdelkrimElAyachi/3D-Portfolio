
import * as THREE from "./three/three.module.js";
import {CUBE} from "./cube.js";
import {addStar} from "./cube.js";





const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000011)

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,10,30)

const renderer = new THREE.WebGLRenderer({canvas:document.querySelector("#bg_3d")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);





let my_cube = new CUBE(scene);
my_cube.Create();
my_cube.Display(0,10,0);




addStar(200,scene);

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, -10, 10);
scene.add(light);

function animate(){

  if(my_cube.Top()){
    my_cube.cube.rotation.x += 0.01;
  }
  if(my_cube.Bottom()){
    my_cube.cube.rotation.x -= 0.01;
  }

  // for responsive 
  renderer.setSize(window.innerWidth,window.innerHeight);

  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();



  renderer.render(scene,camera)
  requestAnimationFrame(animate);
}
animate();



// for responsive size of the scene



document.body.onscroll = moveCamera;

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.y = t * - 0.05;
  console.log(t);
}

document.getElementById("top").addEventListener("click",() =>{
  my_cube.restart();
});
document.getElementById("bottom").addEventListener("click",() =>{
  my_cube.restart();
});


