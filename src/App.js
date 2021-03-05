
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Products from './Components/Products/Products';
import AddProduct from './Components/Products/AddProduct';
import { Row, Col } from 'antd';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  
} from 'antd';


function App () {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE0OTEyNjcwLCJleHAiOjE2MTc1MDQ2NzB9.SezEZ-33rCkZxVd4BafVeumQ2VtGFWggoe9U4dHFo9U"
  const instance = axios.create({
    baseURL: 'http://localhost:1337',
    headers: {'Authorization': 'Bearer '+ token }
  });


  const [products, setProduct] = useState([])

  
  const getProduct = async () =>{
    const response = await instance.get(`/products`)
    setProduct(response.data)
  }

  const consumeProduct = async (data) =>{

    const response = await axios.post(`http://localhost:1337/auth/local`,
    {
      identifier: "Jen",
      password: "Password12345"
    })

    console.log(response.data.user.username)

    const newInstance = axios.create({
      baseURL: 'http://localhost:1337',
      headers: {'Authorization': 'Bearer '+ response.data.jwt }
    });

    const new_response = await instance.post(`/usages`,
        {
        name:response.data.user.username,
        product: data.id
        }
    )
    console.log(data.name)
    console.log(new_response)
    const updateProductResponse = await instance.put(`/products/` + new_response.data.product.id,
        {
        
          stock: new_response.data.product.stock - 1
        }
    )
    console.log(updateProductResponse)
    // const products = products.map(product =>{
    //   if(new_response.data.)
    // })

   
    
  }

  const addProduct = async (data) =>{
    const response = await instance.post(`/products`,
        {
        name:data.name,
        stock:data.stock
        }
    )
    setProduct([...products,response.data])
   
    
  }


  useEffect(() => {
      getProduct()
      
     
  },[]);



  return (
    <Router>
    
    <Row>
           <Col span={12} offset={6} color='@blue-5' style={{backgroundColor:'#096dd9',color: '@blue-5'}}>
               <h1 style={{color:"white"}}>TODO APP TEST PRO SOLUTIONS - Header</h1>
           </Col> 
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Button><Link to="/">Home</Link></Button>
          <Button><Link to="/products">Products</Link></Button>
          <Button><Link to="/add">Add Product</Link></Button>
          
        </Col>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
           <Switch>
          <Route excact path="/add" >
             <AddProduct addProduct={addProduct} />
          </Route>
          <Route excact path="/products">
          <Products products={products} consume={consumeProduct}/>
          </Route>
          <Route excact path="/">
          <h1>landing</h1>
          </Route>
        </Switch>
      </Col>
        </Row>
        <Row>
           <Col span={12} offset={6} color='@blue-5' style={{backgroundColor:'#073069',color: '@blue-5'}}>
              <a> <h3 style={{alignItems: "center", color:"red"}}>Among US - Footer</h3></a>
           </Col>  
    </Row>
    </Router>

  );
}

export default App;
