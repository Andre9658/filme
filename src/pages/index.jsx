import instance from "@/api/instance";
import CardFilme from "@/Components/CardFilme";
import PageWrapper from "@/Components/PageWrapper";
import { consumeDynamicAccess } from "next/dist/server/app-render/dynamic-rendering";
import { useEffect, useState } from "react";

export default function Home(){
  const [filmes,setFilmes] = useState ([]);
  
  
  useEffect(() => {
   async function getFilmes(){
    const response = await instance.get("/api/movies")
    setFilmes(response.data)
   }
   getFilmes()
  }, []);


  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7">
        <h1 className="text-[40px] text-[#907CDA] ">Sua coleção de Filme</h1>
        <p className="text-[#8a898c] text-[20px]">Acompanhe seus filmes favoritos. Adicione Novos filmes à sua coleção</p>
      </div>
      <div className="w-full h-screen flex flex-wrap justify-center gap-2 pt-8 ">
        {
          filmes.map((filme) => {
            return (
              <CardFilme filme={filme} key={filme.id}/>
            )
          })
        }
      </div>
    </PageWrapper>
  )
}