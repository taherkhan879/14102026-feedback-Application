import {useState} from 'react'
import './index.css'

const Feedback = ({resources}) => {
  const [isFeedback, setIsFeedback] = useState(false)
  const onEmojiClick = () => {
    setIsFeedback(true)
  }
  return (
    <div className="container">
      {!isFeedback ? (
        <div className="innerContaier">
          <h1 className="title">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-list">
            {resources.emojis.map(emoji => (
              <li key={emoji.id} className="emoji-item">
                <button
                  type="button"
                  className="emoji-button"
                  onClick={onEmojiClick}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-img"
                  />
                  <p>{emoji.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="thankyu-container">
          <img
            src={resources.loveEmojiUrl}
            alt="love emoji"
            className="emoji-img"
          />
          <h1 className="thankyu-text">Thank You!</h1>
          <p>we'll use your feedback to improve our customer Support</p>
        </div>
      )}
    </div>
  )
}
export default Feedback
