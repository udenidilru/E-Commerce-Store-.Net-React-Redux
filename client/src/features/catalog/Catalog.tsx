import { Product } from "../../product";
import {Button } from '@mui/material';
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog(){
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct(){
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1), 
      price: ((prevState.length * 100) + 100),
      brand: 'some brand',
      description: 'some description',
      pictureUrl: 'http://picsum.photos/200'
    }]);
  }

  useEffect(() => {
    fetch('http://localhost:5240/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])

    return(
    <>
        <ProductList products={products}/>
        <Button onClick={addProduct}>Add Product</Button>
    </>
    )
}