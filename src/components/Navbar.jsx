import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai"

const Navbar = () => {
    return (
        <div className="w-full h-14 bg-white border flex justify-end items-center text-[#8b8b8b] p-3 mb-10">
            <AiOutlineQuestionCircle size={30} className="mr-6"/>
            <AiOutlineMail size={30} className="mr-6"/>
            <div className="flex items-center ">
                <div className="w-8 h-8 rounded-full bg-[#c4c4c4] mr-2"></div>
                <div className="leading-tight">
                    <p className="font-bold">Ramon Dimitri</p>
                    <p>Owner</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar