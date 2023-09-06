export default function NotAvailable({handleHover}){
    return (
        <div onMouseLeave={() => handleHover(false, null)} className="bg-red-300 py-4 px-6 h-full" >
            <div className="flex justify-center items-center my-4 mx-6 bg-white" >
                <p className="text-2xl " >Not Available</p>
            </div>
        </div>
    )
}