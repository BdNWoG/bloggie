import { assets } from "@/assets/assets";
import Sidebar from "@/components/admin/Sidebar";
import Image from "next/image";

//@ts-ignore
export default function layout({children}){
    return (
        <>
            <div className="flex">
                <Sidebar/>
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-black border-b">
                        <h3 className="font-medium">
                            Admin Panel
                        </h3>
                        <Image src={assets.profile_icon} width={40} alt=""/>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}