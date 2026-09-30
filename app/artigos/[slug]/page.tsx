import type { Metadata } from "next";
import artigos from "@/data/artigos.json";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const artigo = artigos.find(
    (artigo) => artigo.slug === slug
  );

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  return {
    title: `${artigo.titulo} | Meu Blog`,
    description: artigo.conteudo,
  };
}

export default async function Artigo({ params }: Props) {
  const { slug } = await params;

  const artigo = artigos.find(
    (artigo) => artigo.slug === slug
  );

  if (!artigo) {
    return <h1>Artigo não encontrado</h1>;
  }

  return (
    <main>
      <h1>{artigo.titulo}</h1>

      <p>Autor: {artigo.autor}</p>

      <p>Publicado em: {artigo.data}</p>

      <p>{artigo.conteudo}</p>
    </main>
  );
}