
import ProductItems from './ProductItems.js'

import React, {  useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

 function Todos({products,user,consume}) {
   
  
    
  
   
    return (
       <div>

          {products.map((product=><ProductItems key={product.id} consume={consume} user={user} product={product}/>))}
        
       </div>
    )
}


export default Todos