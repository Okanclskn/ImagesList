import React from "react";
import ImageCard from "./ImageCard";
import "../index.css";

const ImageList = ({ imageslist }) => {
  return (
    <div className="image-list">
      {imageslist.map((image) => {
        return <ImageCard key={image.id} image={image}></ImageCard>;
      })}
    </div>
  );
};

export default ImageList;
