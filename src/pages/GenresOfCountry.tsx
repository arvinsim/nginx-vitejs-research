import React from "react";
import { useParams } from "react-router-dom";

export function GenresOfCountry() {
  const { country, genre } = useParams();
  return (
    <div>
      This is Genre {genre} of Country {country}
    </div>
  );
}
