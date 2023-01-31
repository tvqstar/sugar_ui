import React, { createContext, useEffect, useState } from 'react';
import swal from 'sweetalert';

export const DataContext = createContext();

function Provider({ children }) {

    const [products, setProducts] = useState([{ 
        "id": 1, 
        "url": "https://product.hstatic.net/200000033032/product/0674beee-31b3-4c32-9ab9-a49084baaca8_48d69548fc924282a9bab9782be214a8_large.jpg", 
        "title": "giay33", 
        "old": "1", 
        "current": "5",
        "count": 1
    },
    { 
        "id": 2, 
        "url": "https://product.hstatic.net/200000033032/product/151f2039-2aba-47fb-bb39-2d1d72719826_80c723b0557b47d98a00fbc03f48e6ab_large.jpg", 
        "title": "giay 1", 
        "old": "10", 
        "current": "12",
        "count": 1
    },
    { 
        "id": 3, 
        "url": "https://product.hstatic.net/200000033032/product/f2d7d007-7bbc-4566-8167-0a640d92cea0_4d26a1fdd5534b58bdb6824e397ec35c_large.jpg", 
        "title": "giay2", 
        "old": "1", 
        "current": "2",
        "count": 1
    },
    { 
        "id": 4, 
        "url": "https://product.hstatic.net/200000033032/product/d3f86b16-5263-4efc-b7f7-1e0e28ac9e7a_5f87e7fa59594a1191eaec8a7c366f02_large.jpg", 
        "title": "giay3", 
        "old": "2", 
        "current": "3",
        "count": 1
    },
    { 
        "id": 5, 
        "url": "https://product.hstatic.net/200000033032/product/60c9ba4b-5b40-4a3b-8d5c-c3d2d0c95f0c_6aabeeedcfa14614837c8ac72b45a317_large.jpg", 
        "title": "giay4", 
        "old": "3", 
        "current": "1",
        "count": 1
    },
    { 
        "id": 6, 
        "url": "https://product.hstatic.net/200000033032/product/a3eb8b23-819b-4b6e-9d16-bfcb38829e52_f89fdf12e75c43e9b58deec0ae900fa4_large.jpg", 
        "title": "giay33", 
        "old": "1", 
        "current": "5",
        "count": 1
    },
    { 
        "id": 7, 
        "url": "https://product.hstatic.net/200000033032/product/0ccf4d72-b23f-44a1-a425-3e02d953719c_d2611ec17bdc45d2919a3d969f396864_large.jpg", 
        "title": "giay 1", 
        "old": "10", 
        "current": "12",
        "count": 1
    },
    { 
        "id": 8, 
        "url": "https://product.hstatic.net/200000033032/product/6cfd1e49-011d-4b13-99be-f7d7536e37fc_06a60fafae564b699b0c28ed156a5394_large.jpg", 
        "title": "giay2", 
        "old": "1", 
        "current": "2",
        "count": 1
    },
    { 
        "id": 9, 
        "url": "https://product.hstatic.net/200000033032/product/6882723e-1fb4-4846-b32d-5e8d67c441f4_30080bbb1efe4e5e8e5e4f0fe1e0d118_large.jpg", 
        "title": "giay3", 
        "old": "2", 
        "current": "3",
        "count": 1
    },
    { 
        "id": 10, 
        "url": "https://product.hstatic.net/200000033032/product/473b437c-8367-45c2-9be9-ec08a0f0ed4c_bda467c871b44a08bcde8d2c8398a1c6_large.jpg", 
        "title": "giay4", 
        "old": "3", 
        "current": "1",
        "count": 1
    },{ 
        "id": 11, 
        "url": "https://product.hstatic.net/200000033032/product/0674beee-31b3-4c32-9ab9-a49084baaca8_48d69548fc924282a9bab9782be214a8_large.jpg", 
        "title": "giay33", 
        "old": "1", 
        "current": "5",
        "count": 1
    },
    { 
        "id": 12, 
        "url": "https://product.hstatic.net/200000033032/product/151f2039-2aba-47fb-bb39-2d1d72719826_80c723b0557b47d98a00fbc03f48e6ab_large.jpg", 
        "title": "giay 1", 
        "old": "10", 
        "current": "12",
        "count": 1
    },
    { 
        "id": 13, 
        "url": "https://product.hstatic.net/200000033032/product/f2d7d007-7bbc-4566-8167-0a640d92cea0_4d26a1fdd5534b58bdb6824e397ec35c_large.jpg", 
        "title": "giay2", 
        "old": "1", 
        "current": "2",
        "count": 1
    },
    { 
        "id": 14, 
        "url": "https://product.hstatic.net/200000033032/product/d3f86b16-5263-4efc-b7f7-1e0e28ac9e7a_5f87e7fa59594a1191eaec8a7c366f02_large.jpg", 
        "title": "giay3", 
        "old": "2", 
        "current": "3",
        "count": 1
    },
    { 
        "id": 15, 
        "url": "https://product.hstatic.net/200000033032/product/60c9ba4b-5b40-4a3b-8d5c-c3d2d0c95f0c_6aabeeedcfa14614837c8ac72b45a317_large.jpg", 
        "title": "giay4", 
        "old": "3", 
        "current": "1",
        "count": 1
    },
    { 
        "id": 16, 
        "url": "https://product.hstatic.net/200000033032/product/a3eb8b23-819b-4b6e-9d16-bfcb38829e52_f89fdf12e75c43e9b58deec0ae900fa4_large.jpg", 
        "title": "giay33", 
        "old": "1", 
        "current": "5",
        "count": 1
    },
    { 
        "id": 17, 
        "url": "https://product.hstatic.net/200000033032/product/0ccf4d72-b23f-44a1-a425-3e02d953719c_d2611ec17bdc45d2919a3d969f396864_large.jpg", 
        "title": "giay 1", 
        "old": "100", 
        "current": "122",
        "count": 1
    },
    { 
        "id": 18, 
        "url": "https://product.hstatic.net/200000033032/product/6cfd1e49-011d-4b13-99be-f7d7536e37fc_06a60fafae564b699b0c28ed156a5394_large.jpg", 
        "title": "giay2", 
        "old": "1", 
        "current": "2",
        "count": 1
    },
    { 
        "id": 19, 
        "url": "https://product.hstatic.net/200000033032/product/6882723e-1fb4-4846-b32d-5e8d67c441f4_30080bbb1efe4e5e8e5e4f0fe1e0d118_large.jpg", 
        "title": "giay3", 
        "old": "2", 
        "current": "3",
        "count": 1
    },
    { 
        "id": 20, 
        "url": "https://product.hstatic.net/200000033032/product/473b437c-8367-45c2-9be9-ec08a0f0ed4c_bda467c871b44a08bcde8d2c8398a1c6_large.jpg", 
        "title": "giay4", 
        "old": "3", 
        "current": "1",
        "count": 1
    }]);

    const [cart, setCart] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem('dataCart');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    // useEffect(() => {
    //     fetch(`http://localhost:3000/product`)
    //         .then((res) => res.json())
    //         .then((prod) => {
    //             setProducts(prod);
    //         });
    // }, []);

    const addCart = (id) => {
        const check = cart.every((item) => {
            return item.id !== +id;
        });
        if (check) {
            const data = products.filter((product) => {
                return product.id === +id;
            });
            setCart([...cart, ...data]);

            swal({
                icon: 'success',
                title: 'Thêm thành công!',
            });
        } else {
            swal({
                icon: 'warning',
                title: 'Sản phẩm đã có trong giỏ hàng!',
            });
        }
    };

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart) setCart(dataCart);
    }, []);

    // value cho DataContext.Provider ngay duoi :))
    // dung de truyen di cac component con trong toan App
    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default Provider;
