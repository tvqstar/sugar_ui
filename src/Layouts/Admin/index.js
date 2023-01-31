import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routes2 } from '~/config/routes';

import styles from './AdminLayout.module.scss';

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')} style={{ margin: '66px 0 20px 0' }}>
                <div className="row sm-gutter">
                    <div className="col l-2 m-0 c-0">
                        <Link to={routes2.product}>
                            Thêm sản phẩm
                        </Link>
                    </div>

                    <div className="col l-10 m-12 c-12">
                        <div className={cx('content')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
