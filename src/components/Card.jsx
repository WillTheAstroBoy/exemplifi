export default function Card({item}){
    return (
        <div className="hover:bg-gray-200 cursor-pointer flex p-3 justify-between h-52 items-center flex-col" >
            <img className="my-3 h-16 object-contain w-40 inline-block" src={item.src} />
            <h3 className="mb-1 uppercase font-semibold text-violet-950" >{item.title}</h3>
            <p className="h-10" >{item.description}</p>
        </div>
    )
}