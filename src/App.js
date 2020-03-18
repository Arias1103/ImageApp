import React, { Component } from 'react'
import Image from './Image.js'
import Creator from './Creator.js'
import './App.css'
import Formulario from './Formulario.js'





class App extends Component {
  render () {
    return (
      <>
      <Creator/>
      <Formulario/>
        <div className='images'>
        {images.map(image => (
          <Image
            image={image}
            key={image.id}
          />
         ))}
      </div>
      </>
    )
  }
}

// Array de componentes

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
      name: 'Renata Ibarra',
      avatar: 'https://images.pexels.com/users/avatars/963082/renato-abati-706.jpeg?w=256&h=256&fit=crop&crop=faces'
    },
    source: 'https://images.pexels.com/photos/2768877/pexels-photo-2768877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 143,
    id: 8
  }
]




export default App