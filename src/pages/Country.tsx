import React from "react";
import { useParams } from "react-router-dom";

export function Country() {
  const { country } = useParams();
  return <h1>This is Country {country}</h1>;
}
