import { useState } from "react"

export default function NavBarButton({text, funcionality}){

    return(<button className="NavBar__button" onClick={() => funcionality(text)}>{text}</button>)
}