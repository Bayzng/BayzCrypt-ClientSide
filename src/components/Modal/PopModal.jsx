import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './modal.css';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    background: 'white',
    right: 'auto',
    // height: '20rem',
    // border: "1px solid red",
    boxShadow: "0px 1px 9px 2px rgba(0,0,0,0.75)",
    webkitboxShadow: "0px 1px 9px 2px rgba(0,0,0,0.75)",
    width: '35rem',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PopModal = () => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <h4 onClick={openModal}>Logout</h4>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <div style={{textAlign: 'center'}}>
          <h2>Logout</h2>
          <h2>
            <CiLogout size={24} color="red" />
          </h2>
          <p>Are you sure you want to logout?</p>
          <div style={{marginTop: '15px'}}>
            <button style={{padding: '10px', borderRadius: "10px", width: '10rem', marginRight: '20px'}} onClick={closeModal}>Cancel</button>
            <Link to='/'><button style={{padding: '10px', borderRadius: "10px", width: '10rem', gap: '7px'}} onClick={() => signOut(auth)}>Logout</button></Link>
          </div>
        </div>
        
      </Modal>
    </div>
  )
}

export default PopModal