import React, {useState,useEffect } from "react";
import { Line } from '@ant-design/charts';
import {Button, Checkbox, Radio, Col, DatePicker, Form, Input, Menu, Pagination, Row, Table, Switch, Tabs} from "antd";

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default () => {
  const [chartValue, setChartValue] = React.useState("none");
  //3d模型导入

  let group;
  useEffect(() => {

    const scene=new THREE.Scene();
   group=new THREE.Group();
    scene.add(group);
    //1  光源
      //点光源
      var point = new THREE.PointLight(0xffffff);
      point.position.set(400, 200, 300); //点光源位置
      scene.add(point); //点光源添加到场景中
     //环境光
        var ambient = new THREE.AmbientLight(0x444444);
       scene.add(ambient);
   //2 创建网格模型
      // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
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
     let orbitControls=new OrbitControls(camera);
        orbitControls.autoRotate=false;
  //4  创建渲染器对象
     var renderer = new THREE.WebGLRenderer();
   //  renderer.setSize(width, height);//设置渲染区域尺寸
      renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
     document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
     //执行渲染操作   指定场景、相机作为参数
       renderer.render(scene, camera);
    /* var width = window.innerWidth; //窗口宽度
     var height = window.innerHeight; //窗口高度
     var k = width / height; //窗口宽高比
     var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大*/
    //创建正投影相机对象
    // var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);

    //加载三维模型

    var loader = new OBJLoader();
    var mtlLoader = new MTLLoader();


    mtlLoader.load('/pages/ny/environment/a1.mtl', (mtl) => {
      mtl.preload();
      loader.setMaterials(mtl);

      // load a resource
      loader.load(
        // resource URL
        '/pages/ny/environment/a1.obj',
        function ( object ) {
          const renderingParent = new THREE.Group();
          renderingParent.scale.set(0.3, 0.3, 0.3);
          renderingParent.add(object);
          scene.add( renderingParent );
        }
      );
    });

  });




  return (
    <div>


    </div>
  )

}

