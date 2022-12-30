import React from "react";
import Thumbnail from "./Thumbnail";
// importamos la libreria para el efecto de movimiento
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid sm:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
