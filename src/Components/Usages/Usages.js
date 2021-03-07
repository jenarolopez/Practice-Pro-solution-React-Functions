import {React ,useState} from 'react'
import UsageItems from './UsageItems'

const Usages = ({usages}) => {

    console.log(usages)

    return (
        <div>

        {usages.sort((a, b) => b.date - a.date).map((usage=><UsageItems key={usage.id}  usage={usage}/>))}
      
     </div>
    )
}
export default Usages