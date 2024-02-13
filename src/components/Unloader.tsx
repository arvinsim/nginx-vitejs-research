import React, { useEffect } from "react";

export const Unloader: React.FC = (props) => {
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      return "Where are you going!";
    });
  });

  return <div>{props.children}</div>;
};

export default Unloader;
