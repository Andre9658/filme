export default function CardFilme() {
    return(
        <div className="w-[350px] h-[320px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-[100%] h-[70%] rounded-t-lg"></div>
            <div className="">
                <img 
                className="w-full h-full rounded-t-lg object-cover"
                src=""
                alt=""
                />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="text-[15px] font-bold">The Last Of us</p>
                <p className="text-[15px] text-[#8a898c]">André Lima</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">Ano</p>
                    <div className="px-2 py-0 bg-[#8F7BD8]/20 text-[#8F7BD8] rounded-lg">Ação</div>
                </div>
            </div>
        </div>
    )
}