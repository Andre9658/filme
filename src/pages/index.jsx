import CardFilme from "@/Components/CardFilme";
import PageWrapper from "@/Components/PageWrapper";

export default function Home(){
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7">
        <h1 className="text-[40px] text-[#907CDA] ">Sua coleção de Filme</h1>
        <p className="text-[#8a898c] text-[20px]">Acompanhe seus filmes favoritos. Adicione Novos filmes à sua coleção</p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center">
        <CardFilme/>
      </div>
    </PageWrapper>
  )
}