import { useEffect } from "react"

export default function NavBarButton(text, component){

    const [enabled, setEnabled] = useEffect(true)
    
    

    return(<button className="lateralNavBar__button">{text}</button>)
}