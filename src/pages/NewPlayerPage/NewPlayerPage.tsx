import { Link } from 'react-router-dom'
import './newPlayerPage.css'
import { ArrowLeft, Check, Person } from '../../common/icons/icons'

const NewPlayerPage = () => {
  return (
    <main>
      <nav className='new-player-navbar'>
        <Link to="/score-tracker/">
          <ArrowLeft />
        </Link>
        <h2>New Player</h2>
        <button className='check-button'>
          <Check />
        </button>
      </nav>
      <div className='new-player-div'>
        <Person />
        <input
          type="text"
          name=""
          id=""
          placeholder='Player name'
          className='new-player-input'
          autoFocus
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
            value={0}
            className='score-input-number'
          />
        </div>
        <div className='initial-score-buttons'>
          <button className='plus-button'>+</button>
          <button className='minus-button'>-</button>
        </div>
      </div>
    </main>
  )
}

export default NewPlayerPage