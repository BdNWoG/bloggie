import Sidebar from "@/components/admin/Sidebar";

//@ts-ignore
export default function layout({children}){
    return (
        <>
            <div className="flex">
                <Sidebar/>
            </div>
            {children}
        </>
    )
}