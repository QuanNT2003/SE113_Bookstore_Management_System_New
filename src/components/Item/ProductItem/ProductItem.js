import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const ProductItem = [
    {
        name: 'Mã sản phẩm',
        grow: 2,
        minWidth: '250px',
        cell: (row) => (
            <div
                key={row.id}
                className={cx('product-code-container')}
                data-tag="allowRowEvents"
            >
                <div
                    className={cx('product-img')}
                    style={{
                        backgroundImage: `url('${row.image[0]}')`,
                    }}
                    data-tag="allowRowEvents"
                ></div>
                <div
                    className={cx('product-id-name')}
                    data-tag="allowRowEvents"
                >
                    <div className={cx('product-id')} data-tag="allowRowEvents">
                        {row.id}
                    </div>
                    <div
                        className={cx('product-name')}
                        data-tag="allowRowEvents"
                    >
                        {row.name}
                    </div>
                </div>
            </div>
        ),
    },
    {
        name: 'Trạng thái',
        center: true,
        minWidth: '180px',
        cell: (row) => (
            <div
                className={cx({
                    'product-state-container': true,
                    'state-0': row.status === 1 ? false : true,
                })}
                data-tag="allowRowEvents"
            >
                <FontAwesomeIcon
                    className={cx('product-state-icon')}
                    icon={row.status === 1 ? faCheck : faXmark}
                    data-tag="allowRowEvents"
                />
                <div className={cx('product-state')} data-tag="allowRowEvents">
                    {row.status === 1 ? 'Đang giao dịch' : 'Ngừng giao dịch'}
                </div>
            </div>
        ),
    },
    {
        name: 'Loại sản phẩm',
        center: true,
        minWidth: '180px',
        cell: (row) => (
            <div
                className={cx('product-type-container')}
                data-tag="allowRowEvents"
            >
                <div className={cx('product-type')} data-tag="allowRowEvents">
                    {row.type_name}
                </div>
            </div>
        ),
    },
    {
        name: 'Giá bán',
        sortable: true,
        center: true,
        cell: (row) => (
            <div
                className={cx('product-value-container')}
                data-tag="allowRowEvents"
            >
                <div className={cx('product-value')} data-tag="allowRowEvents">
                    {addCommas(row.price)}
                </div>
            </div>
        ),
    },
    {
        name: 'Giá vốn',
        sortable: true,
        center: true,
        cell: (row) => (
            <div
                className={cx('product-value-container')}
                data-tag="allowRowEvents"
            >
                <div className={cx('product-value')} data-tag="allowRowEvents">
                    {addCommas(row.cost)}
                </div>
            </div>
        ),
    },
    {
        name: 'Tồn kho',
        sortable: true,
        center: true,
        cell: (row) => (
            <div
                className={cx('product-value-container')}
                data-tag="allowRowEvents"
            >
                <div className={cx('product-value')} data-tag="allowRowEvents">
                    {addCommas(row.quantity)}
                </div>
            </div>
        ),
    },
];
