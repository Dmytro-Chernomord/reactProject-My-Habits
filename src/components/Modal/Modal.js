import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

const ModalBackdrop = SomeModal => {
  return class Modal extends React.Component {
    state = { isOpen: false };
    // [isOpen, setIsOpen] = useState(false);

    componentDidMount() {
      this.setState({ isOpen: true });
      window.addEventListener('keydown', this.handleEscapePress);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleEscapePress);
    }

    handleEscapePress = event => {
      if (event.code === 'Escape') {
        this.props.onClose();
      }
    };

    handleBackdropClick = event => {
      if (event.target === event.currentTarget) {
        this.props.onClose();
      }
    };

    hideModal = () => {
      this.props.onClose();
    };

    render() {
      return (
        <div
          className={styles.Modal__backdrop}
          onClick={this.handleBackdropClick}
        >
          <div className={styles.Modal__content}>
            {this.state.isOpen && (
              <SomeModal {...this.props} onClick={this.hideModal} />
            )}
          </div>
        </div>
      );
    }
  };
};

export default ModalBackdrop;
