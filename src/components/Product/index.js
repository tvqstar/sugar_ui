import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import styles from './Product.module.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Product({ data, addCart }) {

    return (
        <div className="col l-2-4 m-4 c-6">
            <div className={cx('product-item')}>
                <Link className={cx('product-link')} to={`/${data._id}`}>
                    <div
                        className={cx('imgPro')}
                        style={{
                            backgroundImage: `url(${data.image})`,
                        }}
                    ></div>

                    <h4 className={cx('product-name')}>{data.name}</h4>

                    <div className={cx('price')}>
                        <span className={cx('inStock')}>{`Còn ${data.countInStock} sp`}</span>
                        <span className={cx('price-current')}>{`${data.price}đ`}</span>
                    </div>

                    {data.favourite === true && (
                        <div className={cx('product-favourite')}>
                            <FontAwesomeIcon className={cx('icon_favourite')} icon={faCheck} />
                            <span>Yêu thích</span>
                        </div>
                    )}
                </Link>
                <Button className={cx('add-cart')} onClick={() => addCart(data._id)}>
                    Thêm vào giỏ hàng
                </Button>
            </div>
        </div>
    );
}

export default Product;
