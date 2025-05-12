import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { LuArrowLeft } from "react-icons/lu"
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Filme() {
    const router = useRouter()
    const { id } = router.query
    const [filme, setFilme] = useState ({})


    useEffect(() => {
        async function getFilmeById(){
         const response = await instance.get(`/api/movies/${id}`)
         setFilme(response.data)
        }
        if(id) {
            getFilmeById()
        }
       
    }, []);
     
    
    return (
        <PageWrapper
            showHeader={false}
        >
            <div className="w-full h-full min-h-screen flex flex-col px-[350px] pt-12 items-start">
                <button 
                    onClick={() => router.back()}
                    className="px-5 py-2 text-[#8a898c] gap-2 flex 
                    items-center justify-center rounded-lg hover:bg-[#27282B] hover:text-[#8F7BD8]">
                    <LuArrowLeft />
                    <p>Voltar para lista de filmes</p>
                </button>
                <div className="w-full min-h-[90vh] flex">
                    <div className="w-[40%] h-full flex flex-col">
                        <div className="w-full h-[90%] ">
                            <img 
                            className="w-full h-full rounded-lg object-cover"
                            src="https://www.outerspace.com.br/wp-content/uploads/2021/07/donkeykong.jpg"
                            alt=""
                             />
                        </div>
                        <div className="w-full flex h-[10%] pt-4 justify-between">
                            <button className="w-[46%] h-full border border-[#9b87f533] rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20 flex items-center justify-center gap-2 py-2"><BiEdit size={20} />Editar filme</button>
                            <button className="w-[46%] h-full border border-[#ef444433] rounded-md text-[#ef4444]  hover:bg-[#ef4444]/20 flex items-center justify-center gap-2 py-2"><FaTrashAlt size={20}/>Excluir filme</button>
                        </div>
                    </div>
                    <div className="w-[60%] h-full pl-4 flex flex-col">
                        <div className="w-full flex gap-2 items-baseline">
                            <h1 className="text-[33px] text-[#9b87f5] font-bold ">Dong Kong</h1>
                            <p className="text-[#8a898c] font-semibold text-[17px]">(2019)</p>
                        </div>
                        <div className="w-full gap-3 flex">
                            <div className="py-1 px-4 rounded-2xl bg-[#4ade80] tex-[#4ade80]">
                                <p className="text-[17px]">10/10</p>
                            </div>
                            <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                                <p className="text-[17px]">Comédia</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px]">Diretor</h4>
                            <p  className="text-[#8a898c]">André Lima</p>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px]">Sinopse</h4>
                            <p  className="text-[#8a898c]">Um dos melhores Jogos do Super Nitendo</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}