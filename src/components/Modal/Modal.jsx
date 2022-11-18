import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import {ModalOverlay, ModalImg } from './Modal.styled'


const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  closeByEscape = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEscape);
  }
  render() {
    return createPortal(
      <ModalOverlay onClick={this.props.closeModal}>
        <ModalImg>
          <img src={this.props.modalImg} alt={this.props.alt} />
        </ModalImg>
      </ModalOverlay>,
      modalRoot
    );
  }
}