import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <div className='main-container'>
      <div className='layout-game'>
        <div className='decor'>
          <div className='l'></div>
          <div className='r'></div>
        </div>
        <div className='screen-box'>
          <div className='screen'></div>
        </div>
        <div className='button-container' id='container'>
          <div className='container-pad' id='container'>
            <div className='pad'id='up'></div>
            <div id='middle'>
              <div className='pad' id='left'></div>
              <div className='pad' id='center'></div>
              <div className='pad' id='right'></div>
            </div>
            <div className='pad'id='down'></div>
          </div>
          <div className='container-select' id='container'>
            <div className='container' id='first'>
              <div className='button-select' id='button'></div>
              <div>SELECT</div>
            </div>
            <div className='container'>
              <div className='button-start' id='button'></div>
              <div>START</div>
            </div>
          </div>
          <div className='container-action' id='container'>
            <div className='contain-all'>
              <div className='container' id='first'>
                <div className='button-a' id='button'></div>
                <div>A</div>
              </div>
              <div className='container'>
                <div className='button-b' id='button'></div>
                <div>B</div>
              </div>
            </div>
          </div>
        </div>
        <div id='decor'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <span></span>
        </div>
        <div className='label'>
          <div id='N'>Nintendo</div><div id='GB'>GAME BOY</div><div id='tm'>TM</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
