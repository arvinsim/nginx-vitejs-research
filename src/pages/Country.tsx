import React from "react";
import { useParams } from "react-router-dom";

export function Country() {
  const { country } = useParams();
  return <div>This is Country {country}</div>;
}
