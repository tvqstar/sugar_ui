import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import swal from 'sweetalert';

import Button from '~/components/Button';
import { DataContext } from '~/Provider';
import routesConfig from '~/config/routes';

import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function ProductDetail() {
    const { id } = useParams();

    console.log(id);

    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;

    const detailProducts = products.filter((product, index) => {
        return product._id === id;
    });

    return (
        <>
            {detailProducts.map((detailProduct) => (
                <div className={cx('product', 'row sm-gutter')} key={detailProduct._id}>
                    <div className="col l-5 m-5 c-5">
                        <div className={cx('product-images')}>
                            <div
                                className={cx('image')}
                                style={{
                                    backgroundImage: `url(${detailProduct.image})`,
                                }}
                            ></div>

                            <div className={cx('images-small')}>
                                <img className={cx('images-small-item')} src={detailProduct.image} alt="product" />
                                <img className={cx('images-small-item')} src={detailProduct.image} alt="product" />
                                <img className={cx('images-small-item')} src={detailProduct.image} alt="product" />
                            </div>
                        </div>
                    </div>

                    <div className="col l-7 m-7 c-7">
                        <div className={cx('product-title')}>
                            <div className={cx('wrap')}>
                                <h2>{detailProduct.name}</h2>
                                <p className={cx('brand')}>Đây là thương hiệu</p>
                            </div>

                            <div className={cx('wrap', 'sparate')}>
                                <h3 className={cx('price')}>{detailProduct.price}đ</h3>
                            </div>

                            <div className={cx('wrap', 'sparate')}>
                                <h4 className={cx('quantity')}>Số lượng</h4>

                                <div className={cx('select-quantity')}>
                                    <button className={cx('prev')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span className={cx('value')}>1</span>
                                    <button className={cx('next')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>

                                <Button to={routesConfig.cart} primary onClick={() => addCart(detailProduct._id)}>
                                    Thêm vào giỏ
                                </Button>
                                <Button to={routesConfig.home} outline>
                                    Trở về
                                </Button>
                            </div>

                            <div className={cx('desc-wrap', 'sparate')}>
                                <h3 className={cx('desc')}>Mô tả sản phẩm</h3>

                                <h4 className={cx('desc-title')}>{detailProduct.name}</h4>

                                <p className={cx('desc-content')}>{detailProduct.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductDetail;
