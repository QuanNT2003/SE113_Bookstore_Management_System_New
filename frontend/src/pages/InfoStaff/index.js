import { useState, useEffect, useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';

import styles from './InfoStaff.module.scss';
import Wrapper from '~/components/Wrapper';
import Button from '~/components/Button';
import ModalComp from '~/components/ModalComp';
import ModalLoading from '~/components/ModalLoading';
import { ToastContext } from '~/components/ToastContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Input from '~/components/Input';

const cx = classNames.bind(styles);

const staff = {
    id: 'NV0002',
    name: 'Nguyễn Văn A',
    phone: '0235556963',
    email: 'hello@example.com',
    dateOfBirth: '28/04/2023',
    address: '252 Hai Bà Trưng, Bình Thạnh, TPHCM',
    role: 'Nhân viên kho',
    isActive: false,
};

function InfoStaff() {
    const toastContext = useContext(ToastContext);

    useEffect(() => {
        setName(staff.name);
        setPhone(staff.phone);
        setEmail(staff.email);
        setAddress(staff.address);
        setIsActive(staff.isActive);
        setRole(staff.role);
    }, []);

    // PROPS
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [group, setGroup] = useState('');
    const [address, setAddress] = useState('');
    const [isActive, setIsActive] = useState(true);

    const navigate = useNavigate();
    const handleExit = () => {
        navigate(-1);
    };

    // MODAL LOADING
    const [loading, setLoading] = useState(false);

    // MODAL DELETE
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleValidation = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            handleCloseModal();
            toastContext.notify('success', 'Xóa nhân viên thành công');
        }, 2000);
    };

    const [role, setRole] = useState('');
    const [errorRole, setErrorRole] = useState('');

    const handleSubmit = () => {
        // CALL API
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toastContext.notify('success', 'Cập nhật nhân viên thành công');
        }, 2000);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <Wrapper
                        title={'Thông tin nhân viên'}
                        className={cx('m-b')}
                    >
                        <div className={cx('twocols')}>
                            <div className={cx('col1')}>
                                <div className={cx('label', 'm-b')}>
                                    <div className={cx('label-title')}>
                                        Mã nhân viên
                                    </div>
                                    <div className={cx('label-content')}>
                                        {staff.id}
                                    </div>
                                </div>
                                <div className={cx('label', 'm-b')}>
                                    <div className={cx('label-title')}>
                                        Tên nhân viên
                                    </div>
                                    <div className={cx('label-content')}>
                                        {staff.name}
                                    </div>
                                </div>
                                <div className={cx('label', 'm-b')}>
                                    <div className={cx('label-title')}>
                                        Tình trạng
                                    </div>
                                    <div
                                        className={cx(
                                            'label-content',
                                            'fit',
                                            'm-b',
                                        )}
                                    >
                                        <div
                                            className={cx({
                                                'product-state-container': true,
                                                'state-0': !isActive,
                                            })}
                                        >
                                            <FontAwesomeIcon
                                                className={cx(
                                                    'product-state-icon',
                                                )}
                                                icon={
                                                    isActive ? faCheck : faXmark
                                                }
                                            />
                                            <div
                                                className={cx('product-state')}
                                            >
                                                {isActive
                                                    ? 'Đang làm việc'
                                                    : 'Đã nghỉ việc'}
                                            </div>
                                        </div>
                                        <Switch
                                            checked={isActive}
                                            onChange={() =>
                                                setIsActive(!isActive)
                                            }
                                        />
                                    </div>
                                    <Input
                                        title={'Vai trò'}
                                        items={[
                                            'Nhân viên bán hàng',
                                            'Nhân viên kho',
                                            'Quản lý',
                                        ]}
                                        value={role}
                                        onChange={(value) => setRole(value)}
                                        readOnly
                                        required
                                        error={errorRole}
                                        className={cx('m-b')}
                                    />
                                </div>
                            </div>
                            <div className={cx('col2')}>
                                <div className={cx('label', 'm-b')}>
                                    <div className={cx('label-title')}>
                                        Số điện thoại
                                    </div>
                                    <div className={cx('label-content')}>
                                        {staff.phone}
                                    </div>
                                </div>
                                <div className={cx('label', 'm-b')}>
                                    <div className={cx('label-title')}>
                                        Email
                                    </div>
                                    <div className={cx('label-content')}>
                                        {staff.email}
                                    </div>
                                </div>
                                <div className={cx('label', 'm-b', 'm-bb')}>
                                    <div className={cx('label-title')}>
                                        Địa chỉ
                                    </div>
                                    <div className={cx('label-content')}>
                                        {staff.address}
                                    </div>
                                </div>
                                <div className={cx('label', 'm-b')}>
                                    <div className={cx('label-title', 'red')}>
                                        Lưu ý
                                    </div>
                                    <div className={cx('label-content')}>
                                        Để cập nhật thông tin nhân viên, bạn vui
                                        lòng báo nhân viên Cập nhật thông tin
                                        tài khoản trên website
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>

                <div className={cx('action')}>
                    <Button outlineBlue onClick={handleExit}>
                        Thoát
                    </Button>
                    <Button
                        solidRed
                        className={cx('margin')}
                        onClick={handleOpenModal}
                    >
                        Xóa
                    </Button>
                    <Button
                        solidBlue
                        className={cx('margin')}
                        onClick={handleSubmit}
                    >
                        Lưu
                    </Button>
                </div>
            </div>

            <ModalComp
                open={openModal}
                handleClose={handleCloseModal}
                title={'Xóa nhân viên'}
                actionComponent={
                    <div>
                        <Button
                            className={cx('btn-cancel')}
                            outlineRed
                            onClick={handleCloseModal}
                        >
                            Hủy
                        </Button>
                        <Button
                            className={cx('btn-ok', 'm-l-10')}
                            solidRed
                            onClick={handleValidation}
                        >
                            Xóa
                        </Button>
                    </div>
                }
            >
                <div className={cx('info')}>
                    Bạn có chắc chắn muốn xóa nhân viên
                    <strong> {staff.name}</strong>?
                </div>
            </ModalComp>
            <ModalLoading open={loading} title={'Đang tải'} />
        </div>
    );
}

export default InfoStaff;
