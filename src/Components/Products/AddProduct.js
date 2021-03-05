
import { Form, Input, Button, InputNumber } from 'antd';

import { useState,useEffect } from 'react'



import {
  Link
} from "react-router-dom";

const AddTask = ({addProduct}) => {
 

const [name, setName] = useState('')
const [stock, setStock] = useState(10)


const onSubmit = (e) => {
  e.preventDefault()
    if(name.trim() === ''){
      alert("Enter Name")
      return
    }
    
    addProduct({name,stock});
       setName('')
       setStock(10)
    
}

  return (
    <form style={{marginTop:"20px"}} onSubmit={onSubmit}>
    <Form.Item
      label="Product Name: "
      name="name"
    >
      <Input  onChange={(e) => setName(e.target.value)} value={name}/>
    </Form.Item>

    <Form.Item
      label="Enter Stock: "
      name="stock"
      
      
    >
    <InputNumber min={1} max={100} defaultValue={10} value={stock} onChange={(e) => setStock(e.target.value)}/>
    </Form.Item>
    <Form.Item >
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form.Item>
  </form>
  )
}

export default AddTask