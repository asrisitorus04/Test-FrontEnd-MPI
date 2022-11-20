import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeActive } from "../utils/redux/navActive/navSlice"

const Homepage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeActive("Homepage"))
    }, [])

    return (
        <>
            <h1>HEllo world</h1>
        </>
    )
}

export default Homepage