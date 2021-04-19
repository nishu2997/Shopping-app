import React, { useContext, useState } from "react";
import products from "../../products";
import Product from "../Product/Product";
import UnorderedList from "../UnorderedList/UnorderedList";
import AppContext from "../../contexts/AppContext";
import List from "../List/List";
import "./ProductList.css";
const ProductList = () => {
  const windowSize = useContext(AppContext).window.windowSize;
  const [productList, setProductList] = useState(products);
  return (
    <div className='product-list-component'>
      {windowSize > 1000 ? (
        <UnorderedList
          unorderedListObj={{
            id: "products-ul-1",
            gridColumns: "5",
            width: "parent-width",
            align: "center",
            colGap: "10px",
            rowGap: "10px",
          }}
        >
          {productList.map((product) => (
            <List
              key={"key-" + product.id}
              listObj={{
                id: "product-list-" + product.id,
                align: "center",
                width: "parent-width",
              }}
            >
              <Product product={product} />
            </List>
          ))}
        </UnorderedList>
      ) : windowSize > 800 ? (
        <UnorderedList
          unorderedListObj={{
            id: "products-ul-1",
            gridColumns: "4",
            width: "parent-width",
            align: "center",
            colGap: "10px",
            rowGap: "10px",
          }}
        >
          {productList.map((product) => (
            <List
              key={"key-" + product.id}
              listObj={{
                id: "product-list-" + product.id,
                align: "center",
                width: "parent-width",
              }}
            >
              <Product product={product} />
            </List>
          ))}
        </UnorderedList>
      ) : (
        <UnorderedList
          unorderedListObj={{
            id: "products-ul-1",
            gridColumns: "3",
            width: "parent-width",
            align: "center",
            colGap: "10px",
            rowGap: "10px",
          }}
        >
          {productList.map((product) => (
            <List
              key={"key-" + product.id}
              listObj={{
                id: "product-list-" + product.id,
                align: "center",
                width: "parent-width",
              }}
            >
              <Product product={product} />
            </List>
          ))}
        </UnorderedList>
      )}
    </div>
  );
};

export default ProductList;
