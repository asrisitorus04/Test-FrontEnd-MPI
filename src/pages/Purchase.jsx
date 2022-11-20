import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeActive } from "../utils/redux/navActive/navSlice"

const Purchase = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeActive("Purchase"))
    }, [])

    return (
        <>
            <h1>HEllo Purchase</h1>
        </>
    )
}

export default Purchase