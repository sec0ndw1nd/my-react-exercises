import { Link } from 'react-router-dom';

const DUMMY_PRODUCTS = [
  { id: 'p1', title: 'Product 1' },
  { id: 'p2', title: 'Product 2' },
  { id: 'p3', title: 'Product 3' },
];

function Products() {
  const products = DUMMY_PRODUCTS;
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
