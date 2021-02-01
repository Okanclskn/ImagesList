import React from "react";

const ImageList = ({ imageslist }) => {
  return (
    <div>
      {imageslist.map((image) => {
        return (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
          ></img>
        );
      })}
    </div>
  );
};

export default ImageList;
