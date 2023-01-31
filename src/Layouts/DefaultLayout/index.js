import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Header/Header';
import SideBar from './SideBar';
import Footer from './Footer';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('grid wide')} style={{ margin: '66px 0 20px 0' }}>
                <div className="row sm-gutter">
                    <div className="col l-2 m-0 c-0">
                        <SideBar />
                    </div>

                    <div className="col l-10 m-12 c-12">
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
