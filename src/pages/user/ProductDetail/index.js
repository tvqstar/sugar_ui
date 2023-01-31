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

    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;

    const detailProducts = products.filter((product, index) => {
        return product.id === +id;
    });

    return (
        <>
            {detailProducts.map((detailProduct) => (
                <div className={cx('product', 'row sm-gutter')} key={detailProduct.id}>
                    <div className="col l-5 m-5 c-5">
                        <div className={cx('product-images')}>
                            <div
                                className={cx('image')}
                                style={{
                                    backgroundImage: `url(${detailProduct.url})`,
                                }}
                            ></div>

                            <div className={cx('images-small')}>
                                <img className={cx('images-small-item')} src={detailProduct.url} alt="product" />
                                <img className={cx('images-small-item')} src={detailProduct.url} alt="product" />
                                <img className={cx('images-small-item')} src={detailProduct.url} alt="product" />
                            </div>
                        </div>
                    </div>

                    <div className="col l-7 m-7 c-7">
                        <div className={cx('product-title')}>
                            <div className={cx('wrap')}>
                                <h2>{detailProduct.title}</h2>
                                <p className={cx('brand')}>Đây là thương hiệu</p>
                            </div>

                            <div className={cx('wrap', 'sparate')}>
                                <h3 className={cx('price')}>{detailProduct.current}đ</h3>
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

                                <Button to={routesConfig.cart} primary onClick={() => addCart(detailProduct.id)}>
                                    Thêm vào giỏ
                                </Button>
                                <Button to={routesConfig.home} outline>
                                    Trở về
                                </Button>
                            </div>

                            <div className={cx('desc-wrap', 'sparate')}>
                                <h3 className={cx('desc')}>Mô tả sản phẩm</h3>

                                <h4 className={cx('desc-title')}>Ten san pham</h4>

                                <p className={cx('desc-content')}>
                                    ✳️ CAM KẾT ⛔Các bạn KIỂM TRA hàng trước khi nhận - Báo nhân viên giao hàng gọi điện
                                    cho Shop là sẽ được kiểm tra trước khi nhận hàng ⛔ Hàng giống hình 💯 % ⛔ Đổi ngay
                                    đôi mới nếu hàng bị lỗi do sản xuất, đổi size ngay nếu shop gửi không đúng size. ⛔
                                    Giao hàng siêu tốc( nội thành HÀ NỘI 6-12h, giao tỉnh 1-2 ngày tùy gần xa) ⛔ Tuyển
                                    Cộng tác viên 🔸Cam kết giá cả cạnh tranh, mẫu mã đa dạng ✅ Nói không với hàng chợ,
                                    hàng kém chất lượng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductDetail;
