// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const { products } = useSelector((state) => state.productData);

//   // console.log(products);

//   return (
//     <>
//       <div className="d-flex">
//         <div className="row">
//           {products &&
//             products.map((m) => {
//               return (
//                 <div className="col-md-4 my-3">
//                   <div className="card" style={{ width: "18rem" }} key={m?.id}>
//                     <img src="..." className="card-img-top" alt="..." />
//                     <div className="card-body">
//                       <h5 className="card-title">{m?.title}</h5>
//                       <p className="card-text">{m?.description}</p>
//                       <Link className="btn btn-primary">Add To Cart</Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;


import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useSelector((state) => state.productData);

  return (
    <>
      <div className="container">
        <div className="row">
          {products &&
            products.map((m) => {
              return (
                <div className="col-md-4 my-3" key={m?.id}>
                  <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{m?.title}</h5>
                      <p className="card-text">{m?.description}</p>
                      <Link className="btn btn-primary">Add To Cart</Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Products;
