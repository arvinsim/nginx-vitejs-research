import React from "react";
import { useParams } from "react-router-dom";

export function Genre() {
  const { genre } = useParams();
  return <div>This is Genre {genre}</div>;
}
