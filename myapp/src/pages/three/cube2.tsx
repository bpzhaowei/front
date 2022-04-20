import React,  {useRef,useState,useEffect} from "react";
import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
interface MyProps {
  style?: Record<string, any>;
  [key: string]: any;
}
let timeNow = new Date().valueOf();
const values = { tep: '40.0', sec: '20.0' };
const meshcolor = 0xffffff;
let renderer: any,
  camera: any,
  scene: any,
  light: any,
  controls: any,
  isAutoRotate: boolean,
  cube: any;

export default (props: MyProps) => {
  const { style, ...pros } = props;
  const [btnRender, setBtnRender] = useState<boolean>(false);
  const renderRef = useRef<any>();
  // 初始化render
  const threeInit = (curDom: any) => {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(curDom.clientWidth, curDom.clientHeight);
    renderer.setClearColor(0xeeeeee);
    renderer.shadowMap.enabled = true;
    // curDom.innerHTML = null;
    curDom.appendChild(renderer.domElement);
  };
  // 初始化相机
  const initCamera = (curDom: any) => {
    camera = new THREE.PerspectiveCamera(45, curDom.clientWidth / curDom.clientHeight, 0.1, 300);
    camera.position.set(0, 15, 40);
  };
  // 初始化场景
  const initScene = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x39609b);
    // scene.fog = new THREE.Fog( 0xa0a0a0, 5, 250 );
  };
  // 初始化光线
  const initLight = (myScene: any) => {
    light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    myScene.add(light);
  };
  // 初始化控制器
  const initControls = (myCamera: any) => {
    controls = new OrbitControls(myCamera, renderer.domElement);
    //设置控制器的中心点
    controls.target.set(0, 10, 0);
    // 如果使用animate方法时，将此函数删除
    //controls.addEventListener( 'change', render );
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    controls.enableDamping = false;
    //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    // 阻尼系数
    controls.dampingFactor = 0.1;

    controls.minPolarAngle = Math.PI / 12;
    controls.maxPolarAngle = (Math.PI * 19) / 40;
    //是否可以缩放
    controls.enableZoom = true;
    //是否自动旋转
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    //设置相机距离原点的最远距离
    controls.minDistance = 10;
    //设置相机距离原点的最远距离
    controls.maxDistance = 200;
    //是否开启右键拖拽
    controls.enablePan = true;
    controls.update();
  };

  // 获取带数据的canvas
  const getTextCanvas = async ({ tep, sec }: any) => {
    const time = moment().format('HH:mm:ss');
    const width = 200,
      height = 300;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    return new Promise((resole) => {
      if (ctx) {
        const img = new Image();
        img.src = collectorImg;
        //图片加载完后，将其显示在canvas中
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height);
          ctx.font = 30 + 'px " bold';
          ctx.fillStyle = '#333';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(tep, (width * 11) / 24, (height * 10) / 40);
          ctx.fillText(sec, (width * 11) / 24, (height * 20) / 40);
          ctx.font = 10 + 'px " bold';
          ctx.fillText(time, (width * 16.5) / 24, (height * 26.6) / 40);
          resole(canvas);
        };
      }
    });
  };

  // 改变材质种类
  const changeMaterial = async (myScene: any) => {
    const canvas: any = await getTextCanvas({ tep: 40, sec: 20 });
    if (canvas) {
      const texture = new THREE.CanvasTexture(canvas);
      const materials = [
        new THREE.MeshLambertMaterial({ color: meshcolor, opacity: 1, transparent: true }),
        new THREE.MeshLambertMaterial({ color: meshcolor, opacity: 1, transparent: true }),
        new THREE.MeshLambertMaterial({ color: meshcolor, opacity: 1, transparent: true }),
        new THREE.MeshLambertMaterial({ color: meshcolor, opacity: 1, transparent: true }),
        new THREE.MeshLambertMaterial({
          color: meshcolor,
          opacity: 1,
          transparent: true,
          map: texture,
        }),
        new THREE.MeshLambertMaterial({ color: meshcolor, opacity: 1, transparent: true }),
      ];
      const geometry = new THREE.BoxGeometry(20, 20, 5);
      cube = new THREE.Mesh(geometry, materials);
      cube.position.set(0, 10, 0);
      myScene.add(cube);
    }
  };
  // 初始化物体
  const initModel = (myScene: any) => {
    // 添加collector
    changeMaterial(myScene);
  };
  // 更新value数据
  const changeValues = () => {
    values.tep = (39 + Math.random() * 2).toFixed(1);
    values.sec = (19 + Math.random() * 2).toFixed(1);
  };

  const updateData = async () => {
    if (new Date().valueOf() - timeNow > 5000) {
      timeNow = new Date().valueOf();
      changeValues();
    }
    const canvas: any = await getTextCanvas(values);
    if (canvas && cube) {
      cube.material[4].map = new THREE.CanvasTexture(canvas);
      cube.material.map.needsUpdate = true;
    }
  };

  const render = () => {
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  };
  const animate = () => {
    //更新控制器
    render();
    if (controls && isAutoRotate) {
      controls.update();
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (renderRef && renderRef.current) {
      threeInit(renderRef.current);
      initCamera(renderRef.current);

      initScene();
      animate();
    }
    const timer = setInterval(() => {
      updateData();
    }, 1000);
    return () => {
      cancelAnimationFrame(1);
      clearInterval(timer);
    };
  }, [renderRef]);

  useEffect(() => {
    if (scene) {
      initLight(scene);
      initModel(scene);
    }
  }, [scene]);
  useEffect(() => {
    if (camera) {
      initControls(camera);
    }
  }, [camera]);

  return (
    <div
      ref={renderRef}
      style={{ width: '300px', height: '200px', position: 'relative', ...style }}
      {...pros}
    >
      <div>
        <div

          onClick={() => {
            isAutoRotate = !isAutoRotate;
            setBtnRender(isAutoRotate);
          }}
        >
          {btnRender ? '自动旋转' : '旋转关闭'}
        </div>
      </div>
    </div>
  );
};

