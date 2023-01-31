import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React from 'react';

import Button from '~/components/Button';
import styles from './Product.module.scss';
// import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Product({ data, addCart }) {
    return (
        <div className="col l-2-4 m-4 c-6">
            <div className={cx('product-item')}>
                <Link className={cx('product-link')} to={`/${data.id}`}>
                    <div
                        className={cx('imgPro')}
                        style={{
                            backgroundImage: `url(${data.url})`,
                        }}
                    ></div>
                    <h4 className={cx('product-name')}>{data.title}</h4>
                    <div className={cx('price')}>
                        <span className={cx('price-old')}>{data.old}</span>
                        <span className={cx('price-current')}>{data.current}</span>
                    </div>
                </Link>
                <Button className={cx('add-cart')} onClick={() => addCart(data.id)}>
                    Thêm vào giỏ hàng
                </Button>
            </div>
        </div>
    );
}

export default Product;
