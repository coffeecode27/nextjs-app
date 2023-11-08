import { useEffect, useState } from "react"

const ProductPage = () => {
    const [products, setProduts] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res.products);
            setProduts(res.products)
        })
    },[])
    return (
        <div className="product-container">
          <div className="product-grid">
            {products.map((product:any) => (
              <div className="product-item" key={product.id}>
                <img src={product.images[0]} alt="" />
                <p>Nama Produk : {product.title}</p>
                <p>Brand : {product.brand}</p>
                <p>Harga : ${product.price}</p>
                <p>Stok : {product.stock}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default ProductPage;