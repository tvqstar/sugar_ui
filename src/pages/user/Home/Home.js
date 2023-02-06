import React, { useContext } from 'react';

import { DataContext } from '~/Provider';
import Product from '../Product';

function Home() {
    const value = useContext(DataContext);
    const [pro] = value.products;
    const addCart = value.addCart;

    const products = [...pro].reverse(); //Đảo ngược phần tử trong mảng

    return (
        <div className="row sm-gutter">
            {products.map((pr) => (
                <Product key={pr._id} data={pr} addCart={addCart}/>
            ))}
        </div>
    );
}

export default Home;
