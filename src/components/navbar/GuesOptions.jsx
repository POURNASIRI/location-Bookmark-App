import OptionItem from "./OptionItem";

 function GuestOptions({
    options,
    handleOptions})
    {

    return(
        <div className='guestOptions'>
            <OptionItem
            handleOptions={handleOptions}
             type ="adult" 
            options={options} minLimit ={1}/>
            <OptionItem
            handleOptions={handleOptions} 
            type ="children" 
            options={options} minLimit ={0}/>
            <OptionItem
            handleOptions={handleOptions}
             type = "room" 
            options={options} minLimit ={1}/>
        </div>
    )
}
export default GuestOptions