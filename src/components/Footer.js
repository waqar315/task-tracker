import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"



const Footer = () => {
const location = useLocation()

    return (
        <footer>
            <p> Copyright &copy; 2021</p>
           {location.pathname==='/' &&  <Link style={{textDecoration:'none'}} to='/about'>About</Link>}
        </footer>
    )
}

export default Footer