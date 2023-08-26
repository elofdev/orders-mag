import { gql, useQuery } from "@apollo/client";
import { Category } from "@prisma/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Home",
  description:
    "Página principal da aplicação para controle de pedido de produtos feitos pela empresa MAG",
};

const AllCategoriesQuery = gql`
  query {
    categories {
      id
      name
      tax
      createdAt
      updatedAt
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(AllCategoriesQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="container h-screen flex flex-col justify-start items-center bg-green-300">
      <h1>Página Principal</h1>
      <div>
        <ul>
          {data.categories.map((category: Category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
