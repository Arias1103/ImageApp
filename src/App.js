import React, { Component } from 'react'
import './App.css'




const images = [
  {
    author: {
      name: 'pancho López',
      avatar: 'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 153,
    id: 1
  },
  {
    author: {
      name: 'juan Gonzalez',
      avatar: 'https://images.pexels.com/users/avatars/1265479/moreno-matkovic-149.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/2779539/pexels-photo-2779539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 214,
    id: 2
  },
  {
    author: {
      name: 'Daniel Salas',
      avatar: 'https://images.pexels.com/users/avatars/1263347/jarod-lovekamp-411.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 985,
    id: 3
  },
  {
    author: {
      name: 'Alberto Felix',
      avatar: 'https://images.pexels.com/users/avatars/1431801/xandro-vandewalle-530.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/2763239/pexels-photo-2763239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 124,
    id: 4
  },
  {
    author: {
      name: 'Valeria Gonzalez',
      avatar: 'https://images.pexels.com/users/avatars/1190917/two-dreamers-438.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/2717087/pexels-photo-2717087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 987,
    id: 5
  },
  {
    author: {
      name: 'Luis Quintero',
      avatar: 'https://images.pexels.com/users/avatars/447123/luis-quintero-294.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/1408196/pexels-photo-1408196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 147,
    id: 6
  },
  {
    author: {
      name: 'Alonso Pérez',
      avatar: 'https://images.pexels.com/users/avatars/706370/tobias-bjorkli-371.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/1940041/pexels-photo-1940041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 387,
    id: 7
  },
  {
    author: {
      name: 'Renato Ibarra',
      avatar: 'https://images.pexels.com/users/avatars/963082/renato-abati-706.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/2768877/pexels-photo-2768877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 143,
    id: 8
  },
  {
    author: {
      name: 'Juan Pérez',
      avatar: 'https://images.pexels.com/users/avatars/851295/brayden-law-840.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/1829191/pexels-photo-1829191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 637,
    id: 10
  }
]

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

const Creator = () => (
  <div>
    
      <h1 className='title'> Images Project </h1>
       <h3 className='title'> By Getinsoft</h3>

  </div>
)

class App extends Component {
  render () {
    return (
      <div className='images'>
         <Creator/>
        {images.map(image => (
          <Image
            image={image}
            key={image.id}
          />
        ))}
      </div>
    )
  }
}

export default App