import React from 'react'
import { Row, Col, Card, Button } from 'antd'

const UsageItems = ({usage}) => {

    return (
        <Row>
        <Col span={12} offset={6}>
            <Card  style={{ width: 400, height: 70 }}>
              <h3>{usage.users_permissions_user.username} - {usage.product.name}</h3>
             </Card>
        </Col>
      </Row>
    )

}

export default UsageItems