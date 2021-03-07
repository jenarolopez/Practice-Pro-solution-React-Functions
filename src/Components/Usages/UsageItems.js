import React from 'react'
import { Row, Col, Card, Button } from 'antd'

const UsageItems = ({usage}) => {

    return (
        <Row>
        <Col span={12} offset={6}>
            <Card  style={{ width: 300 }}>
              <h1>{usage.users_permissions_user.username}</h1>
              <h3>{usage.product.name}</h3>
             </Card>
        </Col>
      </Row>
    )
}
export default UsageItems