
import * as THREE from "./three/three.module.js";




const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000011)

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,10,30)

const renderer = new THREE.WebGLRenderer({canvas:document.querySelector("#bg_3d")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);




const geoemetry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshBasicMaterial({color:0x00ffaa,wireframe:true});
const torus = new THREE.Mesh(geoemetry,material)
torus.position.set(20,-5,0)
scene.add(torus)

// const gridHelper = new THREE.GridHelper(200,50,0xffffff);
// scene.add(gridHelper)

const texture = new THREE.TextureLoader().load("../images/ofppt.png")
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(10,10,10),
  new THREE.MeshBasicMaterial({map:texture})
)
cube.position.set(20,40,0)
scene.add(cube)

addStar(200)

function animate(){
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;


  // for responsive 
  renderer.setSize(window.innerWidth,window.innerHeight);



  renderer.render(scene,camera)
  requestAnimationFrame(animate);
}
animate();


function addStar(number){
  for(let i=0;i<number;i++){
    const geoemetry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshBasicMaterial({color:0xffffff});
    const star = new THREE.Mesh(geoemetry,material);
  
    scene.add(star);
    star.position.set(randomNumber(-100,100),randomNumber(-100,100),randomNumber(-100,100));
  }


}
// for responsive size of the scene


function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min)+min)
}

document.body.onscroll = moveCamera;

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.y = t * -0.05;
  console.log(t);
}