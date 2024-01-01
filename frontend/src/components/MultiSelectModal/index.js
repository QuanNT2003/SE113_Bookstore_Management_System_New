import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import classNames from 'classnames/bind';
import styles from './MultiSelectModal.module.scss';
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalProduct from './ModalProduct';


const cx = classNames.bind(styles);

function MultiSelectModal({ funtion, suppliername }) {
    const [open, setOpen] = useState(false);

    const [list, setList] = useState([])

    useEffect(() => {


    });


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)

    };

    const handlesubmit = (value) => {
        handleClose()
        funtion(value)
    }


    return (
        <div>
            <div onClick={handleOpen} className={`justify-content-center align-items-center d-flex ${cx('multi-open')}`}>
                Chọn nhiều
            </div>

            <Modal open={open} onClose={handleClose}>
                <Slide in={open}>
                    <Box className={cx('box')}>
                        {
                            open === true ? (
                                <ModalProduct suppliername={suppliername} handleClose={handleClose} handlesubmit={handlesubmit} />

                            ) : (
                                <div>

                                </div>
                            )
                        }

                    </Box>

                </Slide>
            </Modal>
        </div >
    );
}

export default MultiSelectModal;