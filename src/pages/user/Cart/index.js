import React, { useContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { DataContext } from '~/Provider';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import swal from 'sweetalert';

const cx = classNames.bind(styles);
function Cart() {

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + item.price * item.count;
            }, 0);
            setTotal(res);
        };
        getTotal();
    }, [cart]);

    const reduction = (id) => {
        cart.forEach((item) => {
            if (item._id === id) {
                item.count === 1
                    ? (item.count = 1) &&
                      swal({
                          icon: 'error',
                          title: 'Không thể giảm nữa :(',
                      })
                    : (item.count -= 1);
            }
        });
        setCart([...cart]);
    };
    const increase = (id) => {
        cart.forEach((item) => {
            if (item._id === id) {
                item.count += 1;
            }
        });
        setCart([...cart]);
    };

    const removeProduct = (id) => {
        swal({
            title: 'Cảnh báo!',
            text: 'Bạn có thật sự muốn xóa!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                cart.forEach((item, index) => {
                    if (item._id === id) {
                        cart.splice(index, 1);
                    }
                });
                setCart([...cart]);
            }
        });

        // window.confirm
        // if (window.confirm('Do you want to delete this product?')) {
        //     cart.forEach((item, index) => {
        //         if (item.id === id) {
        //             cart.splice(index, 1);
        //         }
        //     });
        //     setCart([...cart]);
        // }
    };

    if (cart.length === 0)
        return <h2 style={{ textAlign: 'center', fontSize: '3rem', marginTop: '15px' }}>Giỏ hàng trống</h2>;

    return (
        <>
            <h3 className={cx('heading-cart')}>Giỏ hàng</h3>

            <div className={cx('list-cart')}>
                {cart.map((product) => (
                    <div key={product._id}>
                        <div className={cx('cart-row', 'row sm-gutter')}>
                            {/* san pham trong ham map */}
                            <div className={cx('cart-item', 'col l-2 m-4 c-6')}>
                                <div
                                    className={cx('item-img')}
                                    style={{
                                        backgroundImage: `url(${product.image})`,
                                    }}
                                ></div>
                            </div>

                            <div className="col l-5 m-4 c-6">
                                <div className={cx('item-title')}>
                                    <h3 className={cx('item-name')}>{product.name}</h3>
                                    <p className={cx('item-desc')}>{product.description}</p>
                                </div>
                            </div>

                            <div className="col l-2 m-4 c-6">
                                <button className={cx('prev')} onClick={() => reduction(product._id)}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>

                                <span className={cx('value')}>{product.count}</span>

                                <button
                                    className={cx('next')}
                                    onClick={() => {
                                        increase(product._id);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>

                            <div className="col l-2 m-4 c-6">
                                <span className={cx('price')}>{`${product.price}`}</span>
                            </div>

                            <div className="col l-1 m-4 c-6">
                                <button className={cx('delete')} onClick={() => removeProduct(product._id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>

                        {/* san pham trong ham map */}
                    </div>
                ))}
            </div>

            <div className={cx('total-price')}>{`Tổng tiền: ${total}`}</div>

            <div className={cx('btn-cart')}>
                <Button primary>Đặt hàng</Button>
                <Button outline>Trở về</Button>
            </div>
        </>
    );
}

export default Cart;
