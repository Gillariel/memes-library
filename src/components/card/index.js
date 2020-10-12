import * as React from 'react'
import Lightbox from 'react-image-lightbox'

const Card = ({ title, source }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div class="card 1">
      {isOpen && <Lightbox 
        mainSrc={source}
        onCloseRequest={() => { setIsOpen(false) }}
        onMovePrevRequest={() => null }
        onMoveNextRequest={() => null }
      />}
      <div class="card_image">
        <img src={source} onClick={() => setIsOpen(true)}/>
      </div>
    </div>
  )
}

export default Card;