import PropsTypes from "prop-types"
import Button from "./Button"

const Header = ({title, ONAdd, showTask}) => {



    return (
       <header className='header'>
           <h1>{title}</h1>
           <Button color={showTask ? 'green' : 'black'} text={showTask ? 'Add' : 'Close'} whenclick={ONAdd}/>
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