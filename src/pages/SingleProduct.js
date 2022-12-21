
import { Link, useParams } from "react-router-dom"; 
const SingleProduct = () => {
  console.log(useParams())
  const {productId} = useParams()
  return (
    <section className='section product'>
      <h2>single product: {productId}</h2>
      <Link to='/products'>Go Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
