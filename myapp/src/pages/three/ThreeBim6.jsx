
import React, {Component, useEffect} from 'react';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader  } from 'three/examples/jsm/loaders/DRACOLoader'
export default () => {
  useEffect(() => {
    three1();
  }, []);
const three1=()=>{
  var scene = new THREE.Scene();

  var point0 = new THREE.PointLight(0xffffff);
  point0.position.set(0, 0, 0); //点光源位置
  scene.add(point0); //点光源添加到场景中
 var ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);
  var point = new THREE.PointLight(0xffffff);
  point.position.set(400, 200, 300); //点光源位置
  //point.position.set(0, 0, 0); //点光源位置
  scene.add(point); //点光源添加到场景中

  var width = window.innerWidth+200; //窗口宽度
  var height = window.innerHeight+200; //窗口高度
  var k = width / height; //窗口宽高比
  var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
  //创建相机对象
  var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  camera.position.set(400, 600, 400); //设置相机位置
  camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);//设置渲染区域尺寸
  //renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
  renderer.setClearColor("#FFF0AC", 1); //设置背景颜色
  document.getElementById("canvas-frame").appendChild(renderer.domElement); //body元素中插入canvas对象


  var loader = new GLTFLoader();var path =  'three/model/ny.gltf';
  /*loader.setDecoderPath( 'three/js/libs/draco/gltf/' );//设置解压库文件路径
  var dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath( '/three/model/' );
  loader.setDRACOLoader( dracoLoader );*/

  //loader.load( '/three/model/ny.gltf', function ( gltf ) {
  loader.load( path, function ( gltf ) {

    // 设置模型缩放比例
   // gltf.scene.scale.set(0.1,0.1,0.1);
    // 相对X轴旋转弧度(为了让模型加载为合适的姿势)
/*    gltf.scene.rotation.x=-0.5 * Math.PI;
    // 相对Z轴旋转弧度
    gltf.scene.rotation.z=-1 * Math.PI;*/
    scene.add( gltf.scene );
  }, undefined, function ( e ) {
    console.error( e );
  } );

  renderer.render(scene, camera);
  function render() {
   // renderer.render(scene,camera);//执行渲染操作
    var vector = camera.position.clone();
    //console.log(vector.x);
    point.position.set(vector.x,vector.y,vector.z); //点光源位置
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

