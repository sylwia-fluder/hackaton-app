import React from 'react';
import { useToggle } from '../../hooks';
import Modal from '../Modal';

const Login = () => {
    const [showModal, setShowModal] = useToggle(false);
    return (
        <div>
            <button onClick={setShowModal}>Login</button>
            {showModal && (
                <Modal open={showModal} toggle={setShowModal}>
                    <p>Login</p>
                </Modal>
            )}
        </div>
    );
};

export default Login;