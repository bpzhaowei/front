import React, {useState} from "react";
import {Button, Checkbox, Radio, Col, DatePicker,Form, Input, Menu, Pagination, Row, Table, Tag, Space} from "antd";
const { Column, ColumnGroup } = Table;
export default () => {
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010'];
  const data = [
    {
      serialNumber: '1',
      date: "2021-12-10",
      powerGenerationSum: 200,
      powerStorageSum: 100,
      powerDischargeSum: 90,
      powerRemainStorage: 10,
    },
    {
      serialNumber: '2',
      date: "2021-12-11",
      powerGenerationSum: 200,
      powerStorageSum: 100,
      powerDischargeSum: 90,
      powerRemainStorage: 20,
    },
    {
      serialNumber: '3',
      date: "2021-12-12",
      powerGenerationSum: 200,
      powerStorageSum: 100,
      powerDischargeSum: 90,
      powerRemainStorage: 30,
    },
    {
      serialNumber: '4',
      date: "2021-12-13",
      powerGenerationSum: 200,
      powerStorageSum: 100,
      powerDischargeSum: 80,
      powerRemainStorage: 50,
    },
  ];

  return (
    <div>
      <h1 style={{fontSize: "18px", fontWeight: "bold",}}>发、放、储电记录</h1>
      <Table
     >
        <Column title="序号" dataIndex="xuhao" key="xuhao"/>
        {/*    <Column title="序号" dataIndex="xuhao" key="xuhao"  />*/}
        <Column title="日期" dataIndex="date" key="date"/>
        <Column title="累计发电量" dataIndex="powerGenerationSum" key="powerGenerationSum"/>
        <Column title="累计储电量" dataIndex="powerStorageSum" key="powerStorageSum"/>
        <Column title="累计放电量" dataIndex="powerDischargeSum" key="powerDischargeSum" className=''/>
        <Column title="剩余储电量" dataIndex="powerRemainStorage" key="powerRemainStorage" className=''/>
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>编辑</a>
              <a>删除</a>
            </Space>
          )}
        />
      </Table>

    </div>
  )
}
