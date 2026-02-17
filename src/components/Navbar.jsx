// import icon
import { useEffect, useState } from "react"
import { Hamburger, Cross, Github} from "./SVGs"

export default function Navbar(){

  const [menu, setMenu] = useState(false);
  
  useEffect(function(){ // function to lock scroll when menu is open 
    document.body.style.overflow = menu? "hidden" : "scroll" ; 
  },[menu])

  function handleNavMenu(){
    setMenu((menu)=> !menu)
  }

  return(
    <>
      <div className="navbar">
        {!menu ? 
          <>
            <Hamburger onClick={handleNavMenu}/>
            <span className="lyriq">LyriQ</span>
          </>
          : 
            <Cross onClick={handleNavMenu}/>
        }
        <span className="sign-up">SIGN UP </span>
      </div>

      {menu && 
        <div className="nav-menu">

          <ul className="list">
            <li>Create an Account</li>
            <li>Saved Cards</li>
          </ul>

          <div className="sticky-nav" onClick={()=>{window.open("https://github.com/neoayus", "_blank");}}>
            <Github />
            <p> neoayus © 2k26</p>
          </div>
        </div>
      }
    </>
  )
}