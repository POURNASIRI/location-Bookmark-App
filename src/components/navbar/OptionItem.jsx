import { HiMinus, HiPlus } from "react-icons/hi";

 function OptionItem({options,minLimit,type,handleOptions}){
    return(
    <div className="guestOptionItem">
        <span className='optionText'>{type}</span>
        <div className="optionCounter">
            <button
            onClick={()=>handleOptions(type,"dec")}
            disabled={options[type] <= minLimit} 
            className='optionCounterBtn'>
                <HiMinus className='icon'/>
            </button>
            <span className='optionCounterNumber'>{options[type]}</span>
            <button
            onClick={()=>handleOptions(type,"inc")}
            className='optionCounterBtn'>
                <HiPlus className='icon'/>
            </button>
        </div>
    </div>
    )
}

export default OptionItem