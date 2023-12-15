import classNames from 'classnames/bind';
import styles from './ImportItem.module.scss';

const cx = classNames.bind(styles);

export const ImportItem = [
    {
        name: 'Mã đơn nhập hàng',
        minWidth: '180px',
        center: true,
        cell: (row) => (
            <div className={cx('font', 'id')} data-tag="allowRowEvents">
                {row.id}
            </div>
        ),
    },
    {
        name: 'Ngày nhập hàng',
        minWidth: '180px',
        center: true,
        sortable: true,
        cell: (row) => (
            <div className={cx('font')} data-tag="allowRowEvents">
                {row.date}
            </div>
        ),
    },
    {
        name: 'Trạng thái',
        minWidth: '180px',
        center: true,
        cell: (row) => (
            <div
                className={cx({
                    'product-state-container': true,
                    'state-0': !row.isPurchase,
                })}
                data-tag="allowRowEvents"
            >
                <div className={cx('product-state')} data-tag="allowRowEvents">
                    {row.isPurchase ? 'Đã thanh toán' : 'Chưa thanh toán'}
                </div>
            </div>
        ),
    },
    {
        name: 'Nhà cung cấp',
        minWidth: '180px',
        center: true,
        cell: (row) => (
            <div className={cx('font')} data-tag="allowRowEvents">
                {row.supplierName}
            </div>
        ),
    },
    {
        name: 'Nhân viên tạo',
        minWidth: '180px',
        center: true,
        cell: (row) => (
            <div className={cx('font')} data-tag="allowRowEvents">
                {row.staffName}
            </div>
        ),
    },
];
