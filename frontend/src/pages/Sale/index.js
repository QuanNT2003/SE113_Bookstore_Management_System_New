import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sale.module.scss';
import SearchResult from '~/components/SearchResult';
import { FaHouseChimney } from "react-icons/fa6";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { FaBoxOpen } from "react-icons/fa6";
import Item_Sale from '~/components/Item_Sale';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaRegCircleXmark } from "react-icons/fa6";
import { options2, options3 } from '../ImportProduct/data';
const cx = classNames.bind(styles);
const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


function Sale() {
    const [arr, setArr] = useState([])
    const [nums, setNums] = useState(0)
    const [total, setTotal] = useState(0)
    const [open, setOpen] = useState(false)
    const [discount, setDiscount] = useState(0)
    const [typediscount, setType] = useState(true)
    const [paid, setPaid] = useState(0)
    const [customer, setCustomer] = useState(null)
    const [note, setNote] = useState('')
    const [coupon, setCoupon] = useState('')
    const [couponvalue, setCoupnvalue] = useState(0)
    const addarr = (value) => {
        // console.log(value)
        const isFound = arr.some(element => {
            if (element.sku === value.sku) {
                return true;
            }

            return false;
        });
        const obj = {
            id: value.id,
            sku: value.sku,
            name: value.name,
            img: value.img,
            cost: value.cost,
            stock: value.stock,
            nums: 0,
            total: 0,
        }

        if (isFound === false) {
            setArr(arr => [...arr, obj]);
        }

    }
    const update = () => {
        let newcost = 0;
        let newnums = 0;
        if (arr.length !== 0) {
            arr.map(item => {
                newcost += item.total
                newnums += item.nums
            })
        }


        setTotal(newcost)
        setNums(newnums)



    }

    const addCustomer = (value) => {
        setCustomer(value)
    }
    const deletearr = (id, index) => {
        let newcost = total - arr[index - 1]['total'];
        let newnums = nums - arr[index - 1]['nums']
        setTotal(newcost)
        setNums(newnums)


        setArr(arr.filter(items => items.id !== id));


    }

    const handleShow = () => setOpen(true)


    const handleClose = () => {
        setOpen(false)

    }

    const submit = () => {
        console.log(coupon)
        console.log(arr)
    }
    return (
        <div className={` ${cx('wrapper')}`}>
            <div className={`${cx('header')} d-flex align-items-center`}>
                <p className={` ${cx('title')} d-flex `}>Tạo đơn mới</p>
                <div className={` ${cx('search-bar')} me-auto`}>
                    <SearchResult stypeid={1} setValue={addarr} list={options2} />
                </div>
                <div className={`text-end me-4`}>
                    <FaHouseChimney className={` ${cx('icon')}`} />
                </div>
            </div>
            <Row >
                <Col lg={9} className='p-0'>
                    <div className={` ${cx('frame')}`}>
                        {
                            arr.length === 0 ? (
                                <div >
                                    <div className={`text-center w-100 mt-5`}>
                                        <FaBoxOpen className={`${cx('icon-empty')}`} />
                                        <p className='fs-5'>Đơn hàng của bạn chưa có sản phẩm nào</p>
                                    </div>

                                </div>
                            ) : (
                                <div className={cx('content')}>
                                    <div className={cx('columns')}>
                                        <div className={cx('properties-1')}>STT</div>
                                        <div className={cx('properties-1')}>Ảnh</div>
                                        <div className={cx('properties-1')}>Mã Sku</div>
                                        <div className={cx('properties-2')}>Tên sản phẩm</div>
                                        <div className={cx('properties-3')}>Số lượng nhập</div>
                                        <div className={cx('properties-3')}>Đơn giá</div>
                                        <div className={cx('properties-3')}>Thành tiền</div>

                                    </div>
                                    {
                                        arr.map((item, index) => (
                                            <div key={item.id}>
                                                <Item_Sale product={item} index={index + 1} funtion={deletearr} update={update} />

                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </Col>
                <Col lg={3} >
                    <div className={` ${cx('frame')} d-flex flex-column justify-content-between`}>
                        <div><div className={` `}>
                            {
                                customer === null ? (
                                    <SearchResult stypeid={2} setValue={addCustomer} list={options3} />
                                ) : (
                                    <Row>
                                        <Col lg={1}>
                                            <img src={customer.img} className={cx('img')} />
                                        </Col>
                                        <Col lg={8} >
                                            <p className='ms-3'><span className='fs-6'>{customer.name}</span> - {customer.phone}</p>
                                        </Col>
                                        <Col lg={3} className='text-end'>
                                            <FaRegCircleXmark className={cx('icon-delete')} onClick={() => setCustomer(null)} />
                                        </Col>
                                    </Row>
                                )
                            }

                        </div>
                            <hr />
                            <Row className='mt-3'>
                                <Col xs md lg={6}>
                                    Tổng tiền ( {nums} sản phẩm)
                                </Col>
                                <Col xs md lg={6} className='text-end'>
                                    {addCommas(total)}
                                </Col>

                            </Row>
                            <Row className='mt-3'>
                                <Col xs md lg={6} className='align-self-center'>
                                    <p >Chiết khấu</p>
                                </Col>
                                <Col xs md lg={6} className='text-end'>
                                    <input className={`${cx('textfield')} `} onClick={() => handleShow()} />
                                </Col>

                            </Row>
                            <Row className='mt-3'>
                                <Col xs md lg={6}>
                                    <p className='ms-3'>Chiết khấu thường</p>
                                </Col>
                                <Col xs md lg={6} className='text-end'>
                                    {
                                        typediscount ? discount + '%' : addCommas(discount) + 'đ'
                                    }
                                </Col>

                            </Row>
                            <Row className='mt-3'>
                                <Col xs md lg={6}>
                                    <p className='ms-3'>Mã giảm giá</p>
                                </Col>
                                <Col xs md lg={6} className='text-end'>

                                </Col>

                            </Row>
                            <Row className='mt-4'>
                                <Col xs md lg={6} className='fw-bold'>
                                    KHÁCH PHẢI TRẢ
                                </Col>
                                <Col xs md lg={6} className='text-end'>
                                    {addCommas(typediscount === true ? total * (1 - discount / 100) : total - discount)} đ
                                </Col>

                            </Row>
                            <Row className='mt-4'>
                                <Col xs md lg={6} className='fw-bold'>
                                    Tiền khách đưa
                                </Col>
                                <Col xs md lg={6} className='text-end'>
                                    <input className={`${cx('textfield')} pe-2 `} type="number" inputMode='numeric' onChange={(e) => {
                                        const cost = typediscount === true ? total * (1 - discount / 100) : total - discount;

                                        if (e.target.value > cost) e.target.value = cost
                                        else if (e.target.value < 0) e.target.value = 0

                                        setPaid(e.target.value)
                                    }} />
                                </Col>

                            </Row>
                            <hr />
                            <Row className='mt-4'>
                                <Col xs md lg={6} className='fw-bold'>
                                    Tiền thừa trả khách
                                </Col>
                                <Col xs md lg={6} className='text-end'>
                                    {
                                        addCommas(paid - (typediscount === true ? total * (1 - discount / 100) : total - discount))
                                    } đ
                                </Col>

                            </Row>

                        </div>

                        <div className={``}>
                            <Form.Control type="text" placeholder='Nhập ghi chú' onChange={(e) => setNote(e.target.value)} />
                            <hr />
                            <div className='text-center'>
                                <Button className={`m-1 ${cx('my-btn')}`} variant="primary" onClick={() => submit()}>THANH TOÁN</Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Modal size="lg" show={open} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Chiết khấu đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-between'>
                        <p className='align-self-center'>Chiết khấu thường</p>
                        <div className={`d-flex w-75`}>
                            <Button className={typediscount ? `${cx('btn_active')}` : `${cx('btn')}`} onClick={() => {
                                setType(true)
                                setDiscount(0)

                            }}>%</Button>
                            <Button className={typediscount ? `${cx('btn')}` : `${cx('btn_active')}`} onClick={() => {
                                setType(false)
                                setDiscount(0)

                            }}>Giá trị</Button>
                            <input className={`ms-3 me-5 w-50 ${cx('textfield-1')}`} type="number" min={0} max={100} value={discount} onChange={(e) => {

                                if (typediscount === true) {
                                    if (e.target.value > 100) e.target.value = 100;
                                    else if (e.target.value < 0 || e.target.value === '') e.target.value = 0;

                                }

                                else {
                                    if (e.target.value > total) e.target.value = total;
                                    else if (e.target.value < 0 || e.target.value === '') e.target.value = 0;

                                }
                                setDiscount(parseInt(e.target.value));
                            }} inputMode='numeric' />
                        </div>
                    </div>

                    <hr />

                    <Form.Floating className="mt-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="Nhập mã giảm giá"
                            className={cx('form-control')}
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                        <label htmlFor="floatingInputCustom">Mã giảm giá</label>
                    </Form.Floating>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleClose}>Xác nhận</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Sale;