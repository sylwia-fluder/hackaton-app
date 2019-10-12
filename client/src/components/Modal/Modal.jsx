import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import styles from './Modal.module.scss';

const Modal = ({ children, open, toggle }) => {
    return (
        <Portal>
            {open && (
                <div className={styles.modal}
                     onClick={toggle}>
                    <div className={styles.modal__body}
                         onClick={e => e.stopPropagation()}>
                        <div className={styles.modal__container}>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </Portal>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default Modal;