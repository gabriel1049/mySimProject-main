import './index.css';
import jsonTeste from '../../json/plan.json'

function DicasToViagens(){
  
  return(
    <div>
        {jsonTeste.map((obj) =>{
          return(
            <div>{obj.planName}</div>
          )
        })}
    </div>
  )
}

export default DicasToViagens;