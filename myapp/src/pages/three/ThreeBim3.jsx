
import React, {Component, useEffect} from 'react';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
export default () => {
  useEffect(() => {
    three1();
  }, []);
const three1=()=>{
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
 document.getElementById("canvas-frame").appendChild( renderer.domElement );
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
 var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
//  var material = new THREE.MeshBasicMaterial( { color: "#CE0000" } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  //var point=new THREE.PointLight(0xffffff);
  /*var point=new THREE.PointLight(0x444444);
  scene.add( point );*/
/*  var light = new THREE.AmbientLight( "#00A600" ); // soft white light
  scene.add( light );
  var point = new THREE.PointLight("#3D7878");
  point.position.set(400, 200, 300); //点光源位置
// 通过add方法插入场景中，不插入的话，渲染的时候不会获取光源的信息进行光照计算
  scene.add(point); //点光源添加到场景中*/
  camera.position.z = 5;
  renderer.setClearColor("#FFF0AC", 1); //设置背景颜色
/*  var animate = function () {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  };
  animate();*/
  function render() {
    renderer.render(scene,camera);//执行渲染操作
  }
  render();
  var controls = new OrbitControls(camera,renderer.domElement);//创建控件对象
  controls.addEventListener('change', render);//监听鼠标、键盘事件
}
  return(
    <div >

    <div id='canvas-frame'></div>
    </div>
  )

}

