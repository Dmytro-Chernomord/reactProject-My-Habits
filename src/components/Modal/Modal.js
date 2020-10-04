import React from 'react';
import styles from './Modal.module.css';

const ModalBackdrop = SomeModal => {
  return class Modal extends React.Component {
    state = { isOpen: false };

    componentDidMount() {
      this.setState({ isOpen: true });
      window.addEventListener('keydown', this.handleEscapePress);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleEscapePress);
    }

    handleEscapePress = event => {
      if (event.code === 'Escape' && !this.props.notAbleToClose) {
        this.props.onClose();
      }
    };

    handleBackdropClick = event => {
      if (event.target === event.currentTarget && !this.props.notAbleToClose) {
        this.props.onClose();
      }
    };

    hideModal = () => {
      this.props.onClose();
    };

    render() {
      return (
        <>
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
        </>
      );
    }
  };
};

export default ModalBackdrop;
