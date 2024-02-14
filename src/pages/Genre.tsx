import React from "react";
import { useParams } from "react-router-dom";

export function Genre() {
  const { genre } = useParams();
  return <h1>This is Genre {genre}</h1>;
}
