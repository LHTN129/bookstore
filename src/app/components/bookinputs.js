"use client";

import AddBook from "./addbook";
import { useState } from "react";

export default function BookInputs({ userId }) {
  const [BookName, setName] = useState("");
  const [BookDesc, setDesc] = useState("");
  const [BookPrice, setPrice] = useState("");
  const [BookISBN10, setIsbn] = useState("");
  const [BookBuyLink, setBuyLink] = useState("");

  const resetInputs = () => {
    setName("");
    setDesc("");
    setPrice("");
    setIsbn("");
    setBuyLink("");
  };

  return (
    <>
      <label>
        Name:
        <input
          className="text-black"
          type="text"
          value={BookName}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          className="text-black"
          type="text"
          value={BookDesc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          className="text-black"
          type="number"
          value={BookPrice}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        ISBN-10:
        <input
          className="text-black"
          type="text"
          value={BookISBN10}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </label>
      <label>
        Buy Link:
        <input
          className="text-black"
          type="text"
          value={BookBuyLink}
          onChange={(e) => setBuyLink(e.target.value)}
        />
      </label>

      <AddBook
        name={BookName}
        desc={BookDesc}
        price={BookPrice}
        isbn10={BookISBN10}
        buy={BookBuyLink}
        userId={userId}
        onAddBook={resetInputs}
      />
    </>
  );
}
