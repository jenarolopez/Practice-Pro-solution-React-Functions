import {React ,useState} from 'react'
import UsageItems from './UsageItems'

const Usages = ({usages}) => {


    return (
        <div>

        { usages ? usages.map((usage=><UsageItems key={usage.id}  usage={usage}/>)) : "No usage"}
      
     </div>
    )
}
export default Usages