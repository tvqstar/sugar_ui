import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.scss';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row sm-gutter">
                    <div className={cx('yourself', 'col l-3 m-6 c-6')}>
                        <h1 className={cx('title')}>GIỚI THIỆU</h1>
                        <p className={cx('sub-title')}>
                            Sugar Shop trang mua sắm trực tuyến của thương hiệu thời trang Lama, thời trang nam, nữ, phụ
                            kiện, giúp bạn tiếp cận xu hướng thời trang mới nhất.
                        </p>

                        <p className={cx('sub-title')}>
                            Sugar Shop trang mua sắm trực tuyến của thương hiệu thời trang Lama, thời trang nam, nữ, phụ
                            kiện, giúp bạn tiếp cận xu hướng thời trang mới nhất.
                        </p>
                    </div>

                    <div className={cx('time', 'col l-3 m-6 c-6')}>
                        <h1 className={cx('title')}>Giờ mở cửa</h1>
                        <p className={cx('sub-title')}>
                            Từ 8:00 - 22:00 tất cả các ngày trong tuần (bao gồm cả các ngày lễ, ngày Tết).
                        </p>
                    </div>

                    <div className={cx('link-footer', 'col l-3 m-6 c-6')}>
                        <h1 className={cx('title')}>LIÊN KẾT</h1>
                        <Link className={cx('link')}>Chính sách đổi trả</Link>
                        <Link className={cx('link')}>Chính sách bảo mật</Link>
                        <Link className={cx('link')}>Điều khoản dịch vụ</Link>
                    </div>

                    <div className={cx('address', 'col l-3 m-6 c-6')}>
                        <h1 className={cx('title')}>THÔNG TIN LIÊN HỆ</h1>
                        <div className={cx('sub-title', 'sub-title-icon')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                            <div>
                                <span>Hà Nội.</span>
                            </div>
                        </div>

                        <div className={cx('sub-title', 'sub-title-icon')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                            <div>
                                <span>0123456789</span>
                            </div>
                        </div>

                        <div className={cx('sub-title', 'sub-title-icon')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                            <div>
                                <span>sugarshoptvq@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row sm-gutter">
                    <div className="col l-12 m-12 c-12">
                        <div className={cx('content-end')}>
                            <span>
                                © 2022 Visitors. All rights reserved | by
                                <a href="https://www.facebook.com/tvq22/">Tạ Văn Quyết</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
