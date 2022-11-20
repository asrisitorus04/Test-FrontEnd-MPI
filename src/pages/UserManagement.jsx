import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeActive } from "../utils/redux/navActive/navSlice"

const UserManagement = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeActive("User Management"))
    }, [])

    return (
        <>
            <h1>HEllo world</h1>
        </>
    )
}

export default UserManagement