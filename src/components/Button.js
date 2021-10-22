
const Button =({whenclick, color, text}) =>{
   
    return(
    <button onClick={whenclick} style={{backgroundColor:color}} className='btn'>{text}</button>
    )
}
export default Button
