import React, {useState,useEffect } from "react";
import * as THREE from 'three'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default () => {

  useEffect(() => {
    const scene=new THREE.Scene();

    //环境光
    var ambient = new THREE.AmbientLight(0x222244);
    scene.add(ambient);
    //2 创建网格模型
    var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    var material = new THREE.MeshLambertMaterial({color: 0x0000ff}); //材质对象Material
    var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    //3 创建透视投影相机对象
    let camera=new THREE.PerspectiveCamera(60,width/height,2000);
    camera.position.x=-10;
    camera.position.y=15;
    camera.position.z=500;
    camera.lookAt(scene.position);
   // var orbitControls = new Orbitcontrols(camera)
  //  var  orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

    //let orbitControls=new OrbitControls(camera);
 // orbitControls.autoRotate=false;
    //4  创建渲染器对象
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xb9d3ee, 1); //设置背景颜色
   // document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    document.getElementById('a').appendChild(renderer.domElement);

    //执行渲染操作   指定场景、相机作为参数
    renderer.render(scene, camera);


  });

  return (
    <div id="a">


    </div>
  )

}

