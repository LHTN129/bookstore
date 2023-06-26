import { supabase } from "src/database/supabase";
import Link from "next/link";

export default function BookDetails({ book }) {
  const { name, desc, buy, isbn10, price } = book;

  return (
    <div>
      <h1>Book Details</h1>
      <Link href="/">homepage</Link>
      <h2>Name: {name}</h2>
      <p>Description: {desc}</p>
      <p>
        Buy link: <a href={buy}>{buy}</a>
      </p>
      <p>ISBN-10: {isbn10}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const bookId = query.id;

  try {
    const { data, error } = await supabase
      .from("books")
      .select("name, desc, buy, isbn10, price")
      .eq("id", bookId)
      .single();

    if (error) {
      throw error;
    }

    const book = data;
    return {
      props: { book },
    };
  } catch (error) {
    console.error("Error fetching book details:", error);
    return {
      props: { book: null },
    };
  }
}
