import React, { useEffect } from "react";
import UnorderedList from "../UnorderedList/UnorderedList";
import List from "../List/List";
import Image from "../Image/Image";
import "./ImageThumbnailGrid.css";
const ImageThumbnailGrid = (props) => {
  const { id, images, handleRender } = props.imageThumbnailGridObj;
  const handleActiveImage = (divId, imageId) => {
    const imageElement = document.querySelector(
      ".image-thumbnail-grid-li.active"
    );
    imageElement.classList.remove("active");
    const hoverOnElement = document.getElementById(divId);
    hoverOnElement.classList.add("active");
    handleRender(imageId);
  };
  return (
    <div id={id} className='image-thumbnail-grid-component'>
      <UnorderedList
        unorderedListObj={{
          id: id + "-thumbnail-ul",
          gridColumns: "1",
          width: "parent-width",
          align: "center",
          rowGap: "10px",
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.id + "-thumbnail-li-key"}
            id={image.id + "-thumbnail-li"}
            className={
              index == 0
                ? "image-thumbnail-grid-li active"
                : "image-thumbnail-grid-li"
            }
            onMouseOver={() =>
              handleActiveImage(image.id + "-thumbnail-li", image.id)
            }
          >
            <List
              listObj={{
                align: "center",
                width: "parent-width",
              }}
            >
              <Image
                imageObj={{
                  id: image.id + "-thumbnail-img-" + (index + 1),
                  width: "auto",
                  height: "60px",
                  src: image.url,
                }}
              />
            </List>
          </div>
        ))}
      </UnorderedList>
    </div>
  );
};

export default ImageThumbnailGrid;
