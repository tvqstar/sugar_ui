import classNames from 'classnames/bind';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import routesConfig from '~/config/routes';
import Product from '~/components/Product';
import { DataContext } from '~/Provider';

import styles from './Home.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


function Home() {
    const cx = classNames.bind(styles);
    
    const value = useContext(DataContext);
    const [pro] = value.products;
    const addCart = value.addCart;
    const [loading] = value.loading;

    const products = [...pro].reverse(); //Đảo ngược phần tử trong mảng

    return (
        <>
            {/* san pham yeu thich */}
            <div className={cx('product-favourite')}>
                <h1 className={cx('product-favourite__title')}>Sản phẩm yêu thích</h1>

                {!loading && !!products &&(<div className={cx('product-item', 'row sm-gutter')}>
                    {products.map(
                        (pr) => pr.favourite === true && <Product key={pr._id} data={pr} addCart={addCart} />,
                    )}
                </div>)}

                { !!loading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner}/>}

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
                        backgroundImage: `url(https://fanatics.frgimages.com/new-york-yankees/wincraft-new-york-yankees-3-x-5-primary-logo-single-sided-flag_pi4889000_ff_4889610-1083412370ce510a4ba6_full.jpg?_hv=2&w=900)`,
                    }}
                ></Button>
            </div>
        </>
    );
}

export default Home;
