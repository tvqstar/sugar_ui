import React, { createContext, useEffect, useState } from 'react';
import swal from 'sweetalert';

export const DataContext = createContext();

function Provider({ children }) {
    

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Hien thi san pham trong localStorage ra trang gio hang
    const [cart, setCart] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem('dataCart');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    // get product
    useEffect(() => {
        setLoading(true);
        fetch(`https://sugarapitvq.onrender.com/api/product/all-product`)
            .then((res) => res.json())
            .then((prod) => {
                setProducts(prod);
                setLoading(false);
            });
    }, []);

    // Them sp vao gio hang
    const addCart = (id) => {
        const check = cart.every((item) => {
            return item._id !== id;
        });
        if (check) {
            const data = products.filter((product) => {
                return product._id === id;
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

    // luu sp vao gio hang
    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart));
    }, [cart]);

    // lay ra list sp trong local
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart) setCart(dataCart);
    }, []);

    // value cho DataContext.Provider ngay duoi :))
    // dung de truyen di cac component con trong toan App
    const value = {
        products: [products, setProducts],
        loading: [loading, setLoading],
        cart: [cart, setCart],
        addCart: addCart,
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default Provider;
