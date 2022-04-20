import React, {useEffect} from "react";
import * as THREE from "three";

export default () => {
  const scene =  new THREE.Scene();
useEffect(() => {

  init();
}, []);
  const init = () => {

    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    const camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    //this.camera = camera
    //this.renderer = renderer
    renderer.setSize(width, height );
   // this.mount.appendChild( renderer.domElement );
    camera.position.z = 5;

    createCube()
    createLine()
  // animate();

  }

 const createCube = () => {
    const geometry = new THREE.BoxGeometry( 1, 2, 1, 4 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
     scene.add( cube );
  }

  const  createLine = () => {
    const material = new THREE.LineBasicMaterial({color: 0x0f00ff}) //定义线的材质
    //  const geometry = new THREE.Geometry()
    var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry

    // geometry.vertices.push(new THREE.Vector3( 2, 0, 0) );
    const line = new THREE.Line(geometry, material)
    line.position.x = -1
    line.position.y = 2
    scene.add(line)
  }
/*  const  animate =() => {
    requestAnimationFrame( animate );
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.line.rotation.x += 0.02
    this.renderer.render( this.scene, this.camera );
  }*/

  return (
    <div id="a">


    </div>
  )
}
