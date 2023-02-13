import classNames from 'classnames/bind';
import React, { useContext } from 'react';
import Button from '~/components/Button';
import routesConfig from '~/config/routes';
import Product from '~/components/Product';

import { DataContext } from '~/Provider';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const value = useContext(DataContext);
    const [pro] = value.products;
    const addCart = value.addCart;

    const products = [...pro].reverse(); //Đảo ngược phần tử trong mảng

    return (
        <>
            {/* san pham yeu thich */}
            <div className={cx('product-favourite')}>
                <h1 className={cx('product-favourite__title')}>Sản phẩm yêu thích</h1>
                <div className={cx('product-item', 'row sm-gutter')}>
                    {products.map(
                        (pr) => pr.favourite === true && <Product key={pr._id} data={pr} addCart={addCart} />,
                    )}
                </div>
                <div className={cx('product-favourite__link')}>
                    <Button className={cx('btn')}>Xem tất cả sản phẩm yêu thích</Button>
                </div>
            </div>

            <div className={cx('banner')}>
                <Button
                    className={cx('banner_image')}
                    to={routesConfig.product}
                    style={{
                        backgroundImage: `url(https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/sportswear-SS23-global-launch-hp-masthead-primary-d_tcm337-984109.jpg)`,
                    }}
                ></Button>

                <Button
                    className={cx('banner_image')}
                    to={routesConfig.product}
                    style={{
                        backgroundImage: `url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/3ca3d7dc-9050-4bd7-b820-a0b23fce34eb/nike-just-do-it.jpg)`,
                    }}
                ></Button>

                <Button
                    className={cx('banner_image')}
                    to={routesConfig.product}
                    style={{
                        backgroundImage: `url(https://mlbchinhhang.com/wp-content/uploads/2022/07/giay-mlb-chunky-high-1.jpg)`,
                    }}
                ></Button>
            </div>
        </>
    );
}

export default Home;
