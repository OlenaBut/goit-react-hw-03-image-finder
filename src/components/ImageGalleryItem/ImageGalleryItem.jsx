import React, { Component } from 'react';
import  { Item, Image } from 'components/ImageGalleryItem/ImageGalleryItem.styled'
import { Modal } from 'components/Modal/Modal.jsx';


export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };
  render() {
    return (
      <Item>
        <Image
          src={this.props.webformatURL}
          alt={this.props.tags}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal
            alt={this.props.alt}
            modalImg={this.props.largeImageURL}
            closeModal={this.toggleModal}
          />
        )}
      </Item>
    );
  }
}