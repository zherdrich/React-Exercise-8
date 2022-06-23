import { useParams } from "react-router-dom"
import picture from "../picture.jpg"

export default function Store() {

const id = useParams().id;

    return <h1>
        This is store # {id}
        <img src={picture} alt=""/>
    </h1>
}