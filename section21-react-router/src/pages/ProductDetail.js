import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <div>{params.productId}</div>
      <div>
        <Link to=".." relative="path">
          Back
        </Link>
      </div>
    </>
  );
}

export default ProductDetail;
