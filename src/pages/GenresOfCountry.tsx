import React from "react";
import { useParams } from "react-router-dom";

export function GenresOfCountry() {
  const { country, genre } = useParams();
  return (
    <h1>
      This is Genre {genre} of Country {country}
    </h1>
  );
}
