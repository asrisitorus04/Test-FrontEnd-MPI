import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeActive } from "../utils/redux/navActive/navSlice"

const Inventory = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeActive("Inventory"))
    }, [])

    return (
        <>
            <h1>Inventory</h1>
        </>
    )
}

export default Inventory