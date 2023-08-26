import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Home",
  description:
    "Página principal da aplicação para controle de pedido de produtos feitos pela empresa MAG",
};


export default function Home() {

  return (
    <div className="container h-screen flex flex-col justify-start items-center bg-green-300">
      <h1>Página Principal</h1>
    </div>
  );
}
