import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeActive } from "../utils/redux/navActive/navSlice"

const Login = () => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(changeActive("Login"))
    },[])

    return (
        <>
            <button onClick={() => dispatch(changeActive("Login"))}>Test</button>
        </>
    )
}

export default Login