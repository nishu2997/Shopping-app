import React, { useContext, useEffect } from "react";
import UnorderedList from "../UnorderedList/UnorderedList";
import List from "../List/List";
import Image from "../Image/Image";
import AppContext from "../../contexts/AppContext";
import "./Product.css";
import Paragraph from "../Paragraph/Paragraph";
const Product = (props) => {
  const { id, name, url, ram, rom, processor, price } = props.product;
  const windowSize = useContext(AppContext).window.windowSize;

  const handleOnMouseOver = () => {
    const imgOfProduct = document.getElementById(id + "-img");
    imgOfProduct.style.transition = "transform 100ms ease";
    imgOfProduct.style.transform = "perspective(200px) translateZ(10px)";
  };
  const handleOnMouseOut = () => {
    const imgOfProduct = document.getElementById(id + "-img");
    imgOfProduct.style.transition = "";
    imgOfProduct.style.transform = "";
  };
  return (
    <div
      className='product-component'
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      {windowSize > 1000 ? (
        <UnorderedList
          unorderedListObj={{
            id: id,
            gridColumns: "1",
            width: "parent-width",
            align: "center",
            colGap: "10px",
            rowGap: "3px",
          }}
        >
          <List
            listObj={{
              id: id + "-list-1",
              align: "center",
              width: "parent-width",
            }}
          >
            <Image
              imageObj={{
                id: id + "-img",
                width: "auto",
                height: "200px",
                src: url,
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-2",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-1",
                size: "big",
                weight: "bolder",
                content: name,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-3",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-2",
                size: "medium",
                weight: "normal",
                content: ram + " " + rom,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-4",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-3",
                size: "medium",
                weight: "normal",
                content: processor,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-5",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-4",
                size: "medium",
                weight: "bold",
                content: "Rs. " + price,
                color: "black",
              }}
            />
          </List>
        </UnorderedList>
      ) : windowSize > 800 ? (
        <UnorderedList
          unorderedListObj={{
            id: id,
            gridColumns: "1",
            width: "parent-width",
            align: "center",
            colGap: "10px",
            rowGap: "2px",
          }}
        >
          <List
            listObj={{
              id: id + "-list-1",
              align: "center",
              width: "parent-width",
            }}
          >
            <Image
              imageObj={{
                id: id + "-img",
                width: "auto",
                height: "150px",
                src: url,
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-2",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-1",
                size: "big",
                weight: "bolder",
                content: name,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-3",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-2",
                size: "medium",
                weight: "normal",
                content: ram + " " + rom,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-4",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-3",
                size: "medium",
                weight: "normal",
                content: processor,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-5",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-4",
                size: "medium",
                weight: "bold",
                content: "Rs. " + price,
                color: "black",
              }}
            />
          </List>
        </UnorderedList>
      ) : (
        <UnorderedList
          unorderedListObj={{
            id: id,
            gridColumns: "1",
            width: "parent-width",
            align: "center",
            colGap: "10px",
            rowGap: "1px",
          }}
        >
          <List
            listObj={{
              id: id + "-list-1",
              align: "center",
              width: "parent-width",
            }}
          >
            <Image
              imageObj={{
                id: id + "-img",
                width: "auto",
                height: "150px",
                src: url,
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-2",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-1",
                size: "big",
                weight: "bolder",
                content: name,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-3",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-2",
                size: "medium",
                weight: "normal",
                content: ram + " " + rom,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-4",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-3",
                size: "medium",
                weight: "normal",
                content: processor,
                color: "black",
              }}
            />
          </List>
          <List
            listObj={{
              id: id + "-list-5",
              align: "center",
              width: "parent-width",
            }}
          >
            <Paragraph
              paragraphObj={{
                id: id + "-paragraph-4",
                size: "medium",
                weight: "bold",
                content: "Rs. " + price,
                color: "black",
              }}
            />
          </List>
        </UnorderedList>
      )}
    </div>
  );
};

export default Product;
