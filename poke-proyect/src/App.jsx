import { useEffect, useState } from 'react'
import './App.css'
import ScreenPokemon from './components/ScreenPokemon';
import BattleScreen from './components/BattleScreen';

function App() {
  const[pokemones, setPokemon] = useState([]);
  const[position, setPosition] = useState(0);
  const[myPokeSelection, setMyPokeSelection] = useState([]);
  const[computerRandomSelection, setComputerRandomSelection] = useState([]);
  const[startGame,setStartGame] = useState(false);
  
  const[Health,setHealth] = useState(100);
  const[enemyHP,setEnemyHP] = useState(100);

  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'

  const fetchData = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  };
  const pokemonData = async (pokeUrl) => {
    const response = await fetchData(pokeUrl);
    const promises = await response.results.map((poke) => (
      fetchData(poke.url)
    ));
    const pokeImage = await Promise.all(promises);
    
    setPokemon(pokeImage);
  };
  useEffect(() => {
    pokemonData(pokeUrl);
  }, [])
  const handleSelection = (foward) => {
    if (foward && position > 20) return;
    if (!foward) {
      setPosition(position - 1);
    } else {
      setPosition(position + 1);
    }
    console.log(position);
  }
  const filterSelection = () => {
    const myPokeSelection = pokemones.filter((value, idx) => position === idx);
    setMyPokeSelection(myPokeSelection);
    getComputerSelection();

    console.log('aaaa');
    console.log(myPokeSelection);
  }
  const getComputerSelection = () => {
    const computerPos = Math.floor(Math.random()*20);
    const computerSelection = pokemones.filter(
      (value,idx) => computerPos === idx
    );

    setComputerRandomSelection(computerSelection);
    console.log(computerSelection);
  }
  const handleStart = () => {
    setStartGame(true);
  }
  const attack = () => {
    const dmg = Math.floor(Math.random()*20);
    const hp = enemyHP - dmg;
    setEnemyHP(hp);

    const enemyDmg = Math.floor(Math.random()*20);
    const myHp = Health - enemyDmg;
    setHealth(myHp);
  }

  return (
    <>
    <div className='main-container'>
      <div className='layout-game'>
        <div className='decor'>
          <div className='l'></div>
          <div className='r'></div>
        </div>
        <div className='screen-box'>
          <div className='screen'>
            {
              startGame ? (
                <BattleScreen myPokeSelection = {myPokeSelection} computerRandomSelection = {computerRandomSelection} enemyHP = {enemyHP} Health = {Health} />
              ) : (
                <ScreenPokemon pokemones={pokemones} position={position}/>
              )
            }  
          </div>
        </div>
        <div className='button-container' id='container'>
          <div className='container-pad' id='container'>
            <div className='pad'id='up'></div>
            <div id='middle'>
              <div className='pad' id='left'onClick={() => handleSelection(false)}></div>
              <div className='pad' id='center'></div>
              <div className='pad' id='right'onClick={() => handleSelection(true)}></div>
            </div>
            <div className='pad'id='down'></div>
          </div>
          <div className='container-select' id='container'>
            <div className='container' id='first'>
              <div className='button-select' id='button' onClick={() => filterSelection()}></div>
              <div>SELECT</div>
            </div>
            <div className='container'>
              <div className='button-start' id='button' onClick={() => handleStart()}></div>
              <div>START</div>
            </div>
          </div>
          <div className='container-action' id='container'>
            <div className='contain-all'>
              <div className='container' id='first'>
                <div className='button-a' id='button' onClick={() => attack()}></div>
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
