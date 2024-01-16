import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 로딩
    

    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      // .catch(()=>{
      //   console.log('에러남')
      //   // setOk(true)
      // })
    return () => {
      setLoading(true);
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [loading]);

  return (
    <>
      {loading && <p>Loading...</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
