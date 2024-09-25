import{Home} from "./pages/Home"
import{About} from "./pages/About"
import{Skills} from "./pages/Skills"
import{Contact} from "./pages/Contact"
import{Interests} from "./pages/Interests"

export default function App(){
  let component
  switch(window.location.pathname){
    case "/":
    component=<Home/>
    break
    case "/about":
    component=<About/>
    break
    case "/skills":
    component=<Skills/>
    break
    case "/contact":
    component=<Contact/>
    break
    case "/interests":
    component=<Interests/>
    break
  }
  return<>
  <nav>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/skills">Skills</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/interests">Interests</a></li>
  </nav>
  {component}
  </> 

}