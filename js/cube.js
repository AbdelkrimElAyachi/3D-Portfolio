import * as THREE from "./three/three.module.js";

export class CUBE{
    constructor(scene){
      this.scene = scene;
    }
    Create(){
        this.cube;
        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(20,20,20),
            new THREE.MeshPhongMaterial({color:0x00ffff})
        )

    }
    Display(positionX,positionY,positionZ){
        this.cube.position.set(positionX,positionY,positionZ)
        this.scene.add(this.cube)
    }
    
    Left(){

    }
    Right(){

    }
    Top(){
        if(this.cube.rotation.x <= 1.6 && !this.Bottom){
            return true;
        }
        return false;
    }
    Bottom(){
        if(this.cube.rotation.x >= -1.6 && !this.Top()){
            return true;
        }
        return false;
    }
    restart(){
        this.cube.rotation.x = 0;
        this.cube.rotation.y = 0;
        this.z = 0;
    }
}

export function addStar(number,scene){
    for(let i=0;i<number;i++){
      const geoemetry = new THREE.SphereGeometry(0.25,24,24);
      const material = new THREE.MeshBasicMaterial({color:0xffffff});
      const star = new THREE.Mesh(geoemetry,material);
    
      scene.add(star);
      star.position.set(randomNumber(-100,100),randomNumber(-100,100),randomNumber(-100,100));
    }  
  
}
function randomNumber(min,max){
return Math.floor(Math.random()*(max-min)+min)
}
  
