// import icon
import { Hamburger } from "./SVGs"

export default function Navbar(){
  return(
    <div className="navbar">
      <Hamburger />
      <span className="lyriq">LyriQ</span>
      <span className="sign-up">SIGN UP </span>
    </div>
  )
}