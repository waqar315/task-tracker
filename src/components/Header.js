import PropsTypes from "prop-types"
import { useLocation } from "react-router-dom"
import Button from "./Button"

const Header = ({title, ONAdd, showTask}) => {

    const location = useLocation()

    return (
       <header className='header'>
           <h1>{title}</h1>
           {location.pathname === '/' && <Button color={showTask ? 'green' : 'black'} text={showTask ? 'Add' : 'Close'} whenclick={ONAdd}/>}
       </header>
    )
}
export default Header

Header.defaultProps={
    title:'Tasks Tracer',
}
Header.propTypes={
    title: PropsTypes.string.isRequired,
}