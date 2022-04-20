import React, { useState, useEffect } from 'react';
import {Button, Divider ,Checkbox, Radio, Col, DatePicker, Form, Input, Menu, Pagination, Row, Table, Switch, Tabs,Carousel} from "antd";
import { Choropleth} from '@antv/l7plot';
import { history } from 'umi';
const colorA=[220000,370000,];
const colorA1=[130100,130300,140600,220700,371100   ];
const colorA2=[371121  ];
export default () => {
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(`https://gw.alipayobjects.com/os/alisis/geo-data-v0.1.1/administrative-data/area-list.json`)
      .then((response) => response.json())
      .then((list) => {
          const data = list
            .filter(({ level }) => level === 'province')
            .map((item) => Object.assign({}, item, { value:item.adcode}));

          const cityData = list
            .filter(({ level }) => level === 'city')
            .map((item) => Object.assign({}, item, { value: item.adcode }));
          const districtData = list
            .filter(({ level }) => level === 'district')
            .map((item) => Object.assign({}, item, { value: item.adcode }));

         const choropleth= new Choropleth('map1', {
            map: {
              type: 'mapbox',
              style: 'blank',
              center: [120.19382669582967, 30.258134],
              zoom: 3,
              pitch: 0,
            },
            source: {
              data: data,
              joinBy: {
                sourceField: 'adcode',
                geoField: 'adcode',
              },
            },
            viewLevel: {
              level: 'country',
              adcode: 100000,
            },
            autoFit: true,
            drill: {
            // enabled:( ) =>{choropleth.options.viewLevel.adcode === "371121"},
              enabled:( ) =>{choropleth.options.viewLevel.adcode === "371121" },
              steps: [
                {level: 'province', source: { data: cityData },granularity:"city"},
                {level: 'city', source: { data: districtData },granularity:"district"},
                {level: 'district', source: { data: districtData },},
              ],
              triggerUp: 'unclick',
              triggerDown: 'click',
            },

            color: {field: 'value',
              value: ({ value }) => {
                if(colorA.includes(value)){return  value= '#CDAD00';}
                if(colorA1.includes(value)){return  value= '#FF00FF';}
                if(colorA2.includes(value)){return  value= '#F330FF';}
                else {return  value= '#6CA6CD';}
              },
              scale: { type: 'quantile' },
            },
            style: {opacity: 1, stroke: '#ccc', lineWidth: 0.6, lineOpacity: 1,},
            label: {
              visible: true, field: 'name',
              style: {fill: '#000', opacity: 0.8, fontSize: 10, stroke: '#fff', strokeWidth: 1.5, textAllowOverlap: false, padding: [5, 5],
              },
            },
            state: {active: { stroke: 'black', lineWidth: 1 },
            },
            tooltip: {items: ['name', 'adcode', 'value'],},
            zoom: {position: 'bottomright',},
            legend: {position: 'bottomleft',
            },
          })
           //.on('click', ( options) => console.log(choropleth.options.viewLevel.adcode));
           .on('click', ( ) =>{
               console.log(choropleth.options.viewLevel.adcode)

               if (choropleth.options.viewLevel.adcode == "371121") {
                 history.push({pathname: "/fadian"});
               }else{
               }


           }


          //33
           );
        }
      );

  };
  return(
    <div>
      <h1 style={{fontSize:"18px",fontWeight: "bold",}}>农光基地分布地图</h1>
      {/* <Row style={{width:"100%",height:"178px"}}>*/}
      <Row >
        <Col span={24}  id="map1" style={{ height: '600px'}} />
      </Row>

    </div>
  )
}

