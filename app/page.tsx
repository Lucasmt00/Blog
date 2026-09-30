import Link from "next/link";
import artigos from "@/data/artigos.json";

export default function Home() {
  return (
    <main>
      <h1>Meu Blog</h1>

      <p>Confira nossos artigos:</p>

      {artigos.map((artigo) => (
        <article key={artigo.id}>
          <h2>{artigo.titulo}</h2>

          <p>Autor: {artigo.autor}</p>

          <p>Publicado em: {artigo.data}</p>

          <Link href={`/artigos/${artigo.slug}`}>
            Ler artigo
          </Link>
        </article>
      ))}
    </main>
  );
}