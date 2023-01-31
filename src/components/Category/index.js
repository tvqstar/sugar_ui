import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from "./Category.module.scss";

const cx = classNames.bind(styles)
function Category() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Danh mục sản phẩm</h2>

            <ul className={cx('cate-list')}>
                <li>
                    <NavLink className={cx('list-item')}>Danh muc 1</NavLink>
                </li>

                <li>
                    <NavLink className={cx('list-item')}>Danh muc 2</NavLink>
                </li>

                <li>
                    <NavLink className={cx('list-item')}>Danh muc 3</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Category;
