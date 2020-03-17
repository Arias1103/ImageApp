import React from 'react'

const Image = ({ image }) => (
    <div className='card'>
      <img
        src={image.source}
        alt='Imagen'
        className='image'
      />
      <div className='footer'>
        <img
          src={image.author.avatar}
          alt='Avatar'
          className='avatar'
        />
        <div>
         Author: {image.author.name}
        </div>
        <div>
          views: {image.views}
        </div>
      </div>
    </div>
  )

  export default Image