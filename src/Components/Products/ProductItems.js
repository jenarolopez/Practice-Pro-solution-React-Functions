import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button } from 'antd'
import '../../App.css'


const ProductItems = ({product, user ,consume}) => {


    const onClick = () =>{
        
    consume(product)
   
    }

    return (
        
            <Row>
            <Col span={12} offset={6}>
                <Card  style={{ width: 300 }}>
                <h1>{product.name}</h1>
                <h3>{product.stock}</h3>
                  { user ? <Button type="primary" danger onClick={onClick}>Consume</Button>:""}
                </Card>
            </Col>
          </Row>
        
    )
}

export default ProductItems