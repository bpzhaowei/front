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
