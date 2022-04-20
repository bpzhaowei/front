import "../css/style1.css"
import React,  {useState,useEffect} from "react"
import * as THREE from "three";

export default ()=>{

  const [width, setWidth] = React.useState(0);  //可见页面宽度
  const [divicewidth, setDivicewidth] = React.useState(0);//屏幕宽度，屏幕分辨率
  useEffect(() => {
    setWidth(window.innerWidth);
    setDivicewidth(window.screen.width)
  }, []);
  function createTube(pathArr, radius) {
    let curveArr = []
    // 三个一组取出curve数据
    for(let i=0; i < pathArr.length; i+=3) {
      curveArr.push(new THREE.Vector3(pathArr[i], pathArr[i+1], pathArr[i+2]))
    }
    var curve = new THREE.CatmullRomCurve3(curveArr);
    /**
     * TubeGeometry(path : Curve, tubularSegments : Integer, radius : Float, radialSegments : Integer, closed : Boolean)
     */
    var tubeGeometry = new THREE.TubeGeometry(curve, 100, radius, 50, false);
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load(`${process.env.BASE_URL}imgLib/arrow.png`);

    // 设置阵列模式 RepeatWrapping
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    // 设置x方向的重复数(沿着管道路径方向)
    // 设置y方向的重复数(环绕管道方向)
    texture.repeat.x = 10;
    texture.repeat.y = 4;
    // 设置管道纹理偏移数,便于对中
    texture.offset.y = 0.5;
    var tubeMaterial = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
    });
    var tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    // 使用加减法可以设置不同的运动方向
    setInterval(() => {
      texture.offset.x -= 0.0076
    })
    return tube
  }
  return(
    <div>
   {/*    <h1>你好</h1>
      <h2>你好</h2>
      <h3>你好</h3>*/}
      <div className="top0">你好啊</div>
      <div className="top1">你好啊</div>
      <div className="top2">你好啊</div>
      {width}<br/>
      {divicewidth}
    </div>

  )
}
