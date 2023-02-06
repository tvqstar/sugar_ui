import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';

import routesConfig from '~/config/routes';
import styles from './Login.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

function Login() {
    // const [email, setEmail] = useState('');
    // const [pwd, setPwd] = useState('');
    const [pwdShow, setPwdShow] = useState(false);
    const [message, setMessage] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post('https://sugarapitvq.onrender.com/api/user/sign-in', {
                email: data.email,
                password: data.password,
            })
            .then((res) => {
                console.log(res);
                if (res.data.access_token) {
                    localStorage.setItem('user', JSON.stringify(res.data.access_token));
                }
                setMessage(res.data.message);
                if (res.data.status === 'ERR') {
                    setMessage(res.data.message);
                }
            });
    };

    const togglePassword = () => {
        setPwdShow(pwdShow ? false : true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Đăng nhập</h2>
                {!!message && <h3>{message}</h3>}
                <form className={cx('input')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('input-item')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            type="text"
                            placeholder="Nhập email..."
                            {...register('email', {
                                required: 'Trường này không được để trống',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Vui lòng nhập đúng email',
                                },
                            })}
                            // ***************************
                            // value={email}

                            // onChange={(e) => {
                            //     setEmail(e.target.value);
                            // }}
                        />
                    </div>

                    {errors.email?.message && <span className={cx('show-err')}>{errors.email?.message}</span>}

                    <div className={cx('input-item')}>
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            type={pwdShow ? 'text' : 'password'}
                            placeholder="Nhập mật khẩu..."
                            {...register('password', {
                                required: 'Trường này không được để trống',
                                minLength: {
                                    value: 6,
                                    message: 'Tối thiểu 6 kí tự',
                                },
                            })}
                        />

                        <span style={{ userSelect: 'none' }} onClick={togglePassword}>
                            {pwdShow && <FontAwesomeIcon className={cx('showPwdIcon')} icon={faEye} />}
                            {!pwdShow && <FontAwesomeIcon className={cx('showPwdIcon')} icon={faEyeSlash} />}
                        </span>
                    </div>

                    {errors.password?.message && <span className={cx('show-err')}>{errors.password?.message}</span>}

                    <div className={cx('button')}>
                        <button type="submit" className={cx('button-login')} to={routesConfig.home}>
                            Đăng nhập
                        </button>
                        <Link className={cx('button-return')} to={routesConfig.home}>
                            Trở về trang chủ
                        </Link>
                    </div>
                </form>

                <div className={cx('link')}>
                    <span>Bạn chưa có tài khoản?</span>
                    <Link className={cx('link-button')} to={routesConfig.register}>
                        Đăng ký ngay!
                    </Link>
                </div>

                <Link
                    onClick={() => {
                        alert('Chức năng chưa hỗ trợ');
                    }}
                >
                    Quên mật khẩu
                </Link>
            </div>
        </div>
    );
}

export default Login;
