import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from './Brand.module.scss';

const cx = classNames.bind(styles)

function Brand() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Thương hiệu sản phẩm</h2>

            <ul className={cx('cate-list')}>
                <li>
                    <NavLink className={cx('list-item')}>Thương hiệu 1</NavLink>
                </li>

                <li>
                    <NavLink className={cx('list-item')}>Thương hiệu 2</NavLink>
                </li>

                <li>
                    <NavLink className={cx('list-item')}>Thương hiệu 3</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Brand;
