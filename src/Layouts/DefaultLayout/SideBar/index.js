import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

import Category from '~/components/Category';
import Brand from '~/components/Brand';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* Category */}
                <Category/>

                <br/>

                {/* Brand Product */}
                
                <Brand/>
            </div>
        </div>
    );
}

export default SideBar;
