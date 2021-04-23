import React, { useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import UnorderedList from "../UnorderedList/UnorderedList";
import List from "../List/List";
import "./ProductSpecification.css";
const ProductSpecification = (props) => {
  const { id, specifications } = props.productSpecificationObj;
  const [showLess, setShowLess] = useState(true);
  const specificationList = showLess
    ? specifications.slice(0, 2)
    : [...specifications];
  const handleShow = () => {
    setShowLess(!showLess);
  };
  const getUnorderedList = (specification) => {
    return (
      <div className='product-specification-inner'>
        <div className='product-specification-inner-title'>
          <Paragraph
            paragraphObj={{
              id: specification.id + "-heading",
              size: "big",
              weight: "normal",
              content: specification.title,
              color: "black",
              align: "justify",
            }}
          />
        </div>
        <div className='product-specification-inner-ul'>
          <UnorderedList
            unorderedListObj={{
              id: specification.id,
              gridColumns: "1",
              width: "parent-width",
              rowGap: "10px",
              align: "left",
              padding: "0px",
            }}
          >
            {Object.keys(specification.features).map((propertyName, index) => (
              <List
                key={specification.id + "-specs-inner-li-" + index}
                listObj={{
                  width: "parent-width",
                  align: "left",
                }}
              >
                <Paragraph
                  paragraphObj={{
                    id: specification.id + "-" + propertyName + "-name",
                    size: "small",
                    weight: "normal",
                    content: propertyName,
                    color: "black",
                    align: "justify",
                  }}
                />
                <Paragraph
                  paragraphObj={{
                    id: specification.id + "-" + propertyName + "-value",
                    size: "small",
                    weight: "normal",
                    content: specification.features[propertyName],
                    color: "black",
                    align: "justify",
                  }}
                />
              </List>
            ))}
          </UnorderedList>
        </div>
      </div>
    );
  };
  return (
    <div className='product-specification-component'>
      <div className='product-specification-heading'>
        <Paragraph
          paragraphObj={{
            id: id + "-product-specification-heading",
            size: "extra-big",
            weight: "bold",
            content: "Product Specifications",
            color: "black",
            align: "justify",
            fontWeight: "500",
          }}
        />
      </div>
      <div className='product-specification-ul'>
        <UnorderedList
          unorderedListObj={{
            id: id,
            gridColumns: "1",
            width: "parent-width",
            align: "left",
            padding: "0px",
          }}
        >
          {specificationList.map((specification) => (
            <List
              key={specification.id + "-specs-li"}
              listObj={{
                id: specification.id + "-li",
                align: "left",
                width: "parent-width",
                padding: "0px",
              }}
            >
              {getUnorderedList(specification)}
            </List>
          ))}
        </UnorderedList>
      </div>
      <div className='product-specification-show-more-less-button'>
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

export default ProductSpecification;
