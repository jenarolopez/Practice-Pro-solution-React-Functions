
import ProductItems from './ProductItems.js'

import React, {  useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

 function Todos({products,consume}) {
   
  
    
  
   
    return (
       <div>

       {products.map((product=><ProductItems key={product.id} consume={consume} product={product}/>))}
        
       </div>
    )
}


export default Todos