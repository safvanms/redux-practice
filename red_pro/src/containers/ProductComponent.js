import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function ProductComponent() {

     const products = useSelector((state) => state.allProducts.products)

     const renderList = products.map((product) => {
          const { id, title, image, price, category } = product;
          return (
               <div className='four column wide' key={id} >
                    <Link to={`/product/${id}`} >
                         <div className='ui link cards'>
                              <div className='card'>
                                   <div className='image'>
                                        <img src={image} alt={title} />
                                   </div>
                                   <div className='content'>
                                        <p className='header'>{title}</p>
                                        <h2 className='meta price'>$ {price}</h2>
                                        <p className='meta '>Rs. {category}</p>
                                   </div>
                              </div>
                         </div>
                    </Link>
               </div>
          );
     });

     return (
          <>
               {renderList}
          </>
     )

}
