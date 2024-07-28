import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('grey')

  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'green'}} onClick={() => setColor('green')}>Green</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'yellow'}} onClick={() => setColor('yellow')}>Yellow</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'cyan'}} onClick={() => setColor('cyan')}>Cyan</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'grey'}} onClick={() => setColor('grey')}>Grey</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'orange'}} onClick={() => setColor('orange')}>Orange</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'brown'}} onClick={() => setColor('brown')}>Brown</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'black'}} onClick={() => setColor('black')}>Black</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'purple'}} onClick={() => setColor('purple')}>Purple</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'Pink'}} onClick={() => setColor('Pink')}>Pink</button>
          <button className='outline-none py-1 px-4 rounded-lg shadow-lg text-white' style={{backgroundColor: 'skyblue'}} onClick={() => setColor('skyblue')}>Skyblue</button>
        </div>
      </div>
    </div>
  )
}

export default App
