import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';

import routesConfig from '~/config/routes';
import styles from './Register.module.scss';
const cx = classNames.bind(styles);

function Register() {
    // const [email, setEmail] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [rePwd, setRePwd] = useState('');
    const [pwdShow, setPwdShow] = useState(false);
    const [rePwdShow, setRePwdShow] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        getValues,
    } = useForm();

    let password = watch('password', '');

    const togglePassword = () => {
        setPwdShow(pwdShow ? false : true);
    };

    const toggleRePassword = () => {
        setRePwdShow(rePwdShow ? false : true);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Đăng ký tài khoản</h2>
                <form className={cx('form-input')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('input-item')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            type="text"
                            placeholder="Nhập email..."
                            spellCheck={false}
                            {...register('email', {
                                required: 'Trường này không được để trống',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Vui lòng nhập đúng email',
                                },
                            })}
                            // ***********************************
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
                            spellCheck={false}
                            {...register('password', {
                                required: 'Trường này không được để trống',
                                minLength: {
                                    value: 6,
                                    message: 'Tối thiểu 6 kí tự',
                                },
                            })}
                        />

                        <span onClick={togglePassword} style={{ userSelect: 'none' }}>
                            {pwdShow && <FontAwesomeIcon className={cx('showPwdIcon')} icon={faEye} />}

                            {!pwdShow && <FontAwesomeIcon className={cx('showPwdIcon')} icon={faEyeSlash} />}
                        </span>
                    </div>

                    {errors.password?.message && <span className={cx('show-err')}>{errors.password?.message}</span>}

                    <div className={cx('input-item')}>
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            type={rePwdShow ? 'text' : 'password'}
                            placeholder="Nhập lại mật khẩu..."
                            spellCheck={false}
                            {...register('rePassword', {
                                required: 'Trường này không được để trống',
                                validate: (value) => value === getValues('password') || 'Xác nhận không đúng!',
                            })}
                        />

                        <span onClick={toggleRePassword} style={{ userSelect: 'none' }}>
                            {rePwdShow && <FontAwesomeIcon className={cx('showPwdIcon')} icon={faEye} />}

                            {!rePwdShow && <FontAwesomeIcon className={cx('showPwdIcon')} icon={faEyeSlash} />}
                        </span>
                    </div>

                    {errors.rePassword?.message && <span className={cx('show-err')}>{errors.rePassword?.message}</span>}

                    <div className={cx('button')}>
                        <button type="submit" className={cx('button-register')} to={routesConfig.login}>
                            Đăng ký
                        </button>
                        <Link className={cx('button-return')} to={routesConfig.home}>
                            Trở về trang chủ
                        </Link>
                    </div>
                </form>

                <div className={cx('link')}>
                    <span>Bạn đã có tài khoản?</span>
                    <Link className={cx('link-button')} to={routesConfig.login}>
                        Đăng nhập ngay!
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
