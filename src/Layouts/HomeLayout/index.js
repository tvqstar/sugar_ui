import classNames from 'classnames/bind';

import Header from '~/components/Header/Header';
import SideBar from '../DefaultLayout/SideBar';
import Footer from '../DefaultLayout/Footer';
import Slider from '../DefaultLayout/Slider';

import styles from './HomeLayout.module.scss';

function HomeLayout({ children }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="grid wide">
                {/* <div className="row sm-gutter"> */}
                <div className={cx('sidebar-slider', 'row sm-gutter')}>
                    <div className={cx('side-bar', 'col l-2')}>
                        <SideBar />
                    </div>
                    <div className="col l-10">
                        <Slider />
                    </div>
                </div>
                <div className="row sm-gutter">
                    <div className="col l-12 m-12 c-12 ">
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HomeLayout;
