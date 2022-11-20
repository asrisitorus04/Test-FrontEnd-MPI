import { BsBasket } from "react-icons/bs"
import { MdOutlineInventory2, MdOutlineAddShoppingCart } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { HiOutlineHome } from "react-icons/hi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Layout = ({ children }) => {

    const navigate = useNavigate()
    const navActive = useSelector((state) => state.navActive.value)

    const classIcon = { size: 22, className: "mr-4" }
    const nav = [
        {
            icon: <HiOutlineHome {...classIcon} />,
            name: "Homepage"
        },
        {
            icon: <BsBasket {...classIcon} />,
            name: "Sales"
        },
        {
            icon: <MdOutlineInventory2 {...classIcon} />,
            name: "Inventory"
        },
        {
            icon: <MdOutlineAddShoppingCart {...classIcon} />,
            name: "Purchase"
        },
        {
            icon: <CgProfile {...classIcon} />,
            name: "User Management"
        },
    ]

    return (
        <div className="flex">
            <div className={navActive === "Login" ? "hidden" : "w-2/12 pr-3 h-screen border-r-2"}>
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" width={100} height={100} />
                {/* List nav */}
                <div className="mt-10">
                    {nav.map((item, i) => {
                        return (
                            <li onClick={() => navigate(item.name)} key={i} className={`flex p-2 mb-3 cursor-pointer list-none font-semibold hover:text-[#69b5e1] hover:bg-[#e5ebf1] ${navActive === item.name ? "text-[#69b5e1] bg-[#e5ebf1]" : ""}`}>{item.icon} {item.name}</li>
                        )
                    })}
                </div>
            </div>
            <div className={navActive === "Login" ? "w-full" : "w-8/12"}>{children}</div>
        </div>
    )
}

export default Layout