import React, { useState } from "react";
import Image from "../Image/Image";
import List from "../List/List";
import Paragraph from "../Paragraph/Paragraph";
import UnorderedList from "../UnorderedList/UnorderedList";
import "./ProductDescription.css";
const ProductDescription = (props) => {
  const { id, descriptions } = props.productDescriptionObj;
  const [showLess, setShowLess] = useState(true);
  const descriptionList = showLess
    ? descriptions.slice(0, 2)
    : [...descriptions];

  const handleShow = () => {
    setShowLess(!showLess);
  };
  const productImage = (id, img) => {
    return (
      <div className='product-description-img'>
        <Image
          imageObj={{
            id: id + "-image",
            width: "auto",
            height: "150px",
            src: img,
          }}
        />
      </div>
    );
  };

  const productBody = (id, title, body) => {
    return (
      <div className='product-description-box'>
        <div className='product-description-title'>
          <Paragraph
            paragraphObj={{
              id: id + "-title",
              size: "big",
              weight: "normal",
              content: title,
              color: "black",
              align: "justify",
            }}
          />
        </div>
        <div className='product-description-body'>
          <Paragraph
            paragraphObj={{
              id: id + "-paragraph",
              size: "small",
              weight: "normal",
              content: body,
              color: "black",
              align: "justify",
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <div className='product-description-component'>
      <div className='product-description-heading'>
        <Paragraph
          paragraphObj={{
            id: "product-description-component-heading",
            size: "extra-big",
            weight: "bold",
            content: "Product Descriptions",
            color: "black",
            align: "justify",
            fontWeight: "500",
          }}
        />
      </div>
      <div className='product-description-component-ul'>
        <UnorderedList
          unorderedListObj={{
            id: "product-description-ul",
            gridColumns: 1,
            width: "parent-width",
            align: "left",
            padding: "0px",
          }}
        >
          {descriptionList.map((description, index) => (
            <div
              key={description.id + "-description-li"}
              className='product-description-li'
            >
              <List
                listObj={{
                  id: description.id,
                  align: "left",
                  width: "parent-width",
                }}
              >
                {index % 2 == 0 ? (
                  <div className='product-description-li-inner'>
                    {productImage(description.id, description.img)}
                    {productBody(
                      description.id,
                      description.title,
                      description.body
                    )}
                  </div>
                ) : (
                  <div className='product-description-li-inner'>
                    {productBody(
                      description.id,
                      description.title,
                      description.body
                    )}
                    {productImage(description.id, description.img)}
                  </div>
                )}
              </List>
            </div>
          ))}
        </UnorderedList>
      </div>
      <div className='product-description-show-more-less-button'>
        {showLess ? (
          <button type='button' onClick={handleShow}>
            show more
          </button>
        ) : (
          <button type='button' onClick={handleShow}>
            show less
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
