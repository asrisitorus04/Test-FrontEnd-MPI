import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeActive } from "../utils/redux/navActive/navSlice"

const Sales = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeActive("Sales"))
    }, [])

    return (
        <div>Sales</div>
    )
}

export default Sales