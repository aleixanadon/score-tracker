import { Link, useNavigate } from 'react-router-dom'
import './newPlayerPage.css'
import { ArrowLeft, Check, Person } from '../../common/icons/icons'
import { useState } from 'react'
import usePlayerStorage from '../../common/hooks/usePlayerStorage'

const NewPlayerPage = () => {

  const [isInputFocused, setInputFocused] = useState<boolean>(false);

  const onInputFocus = () => setInputFocused(!isInputFocused);

  const [playerName, setPlayerName] = useState<string>("");

  const onChangePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const [initialPoints, setInitialPoints] = useState<number>(0);
  
  const addInitialPoints = () => setInitialPoints(initialPoints + 1) ;
  const substractInitialPoints = () => {
    if (initialPoints !== 0) {
      setInitialPoints(initialPoints - 1);
    }
  };
  const assignInitialPoints = (initialPoints: number) => { 
    setInitialPoints(initialPoints) 
  }

  const { addPlayer } = usePlayerStorage();

  const navigate = useNavigate();

  return (
    <main>
      <nav className='new-player-navbar'>
        <Link to="/score-tracker/">
          <ArrowLeft />
        </Link>
        <h2>New Player</h2>
        <button 
          className='check-button' 
          onClick={() => {
            if (playerName !== "" || playerName.length !== 0) {
              addPlayer({id: self.crypto.randomUUID(), playerName: playerName, points: initialPoints});
              navigate("/score-tracker/");
            }
          }}>
          <Check />
        </button>
      </nav>
      <div className={`new-player-div ${isInputFocused ? 'focused' : ''}`}>
        <Person />
        <input
          type="text"
          name=""
          id=""
          placeholder='Player name'
          className='new-player-input'
          autoFocus
          onFocus={onInputFocus}
          onBlur={onInputFocus}
          onChange={onChangePlayerName}
        />
      </div>
      <h2 className='initial-score-h2'>Initial score</h2>
      <div className='initial-score-div'>
        <div className='input-number-div'>
          <input
            type="number"
            name=""
            id=""
            placeholder='0'
            value={initialPoints}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {assignInitialPoints(parseInt(e.target.value))}}
            className='score-input-number'
            min={0}
          />
        </div>
        <div className='initial-score-buttons'>
          <button className='plus-button' onClick={addInitialPoints}>+</button>
          <button className='minus-button' onClick={substractInitialPoints}>-</button>
        </div>
      </div>
    </main>
  )
}

export default NewPlayerPage