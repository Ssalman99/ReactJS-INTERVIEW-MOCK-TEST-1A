import './App.css'

const LanguageItem = props => {
  const {buttonList, buttonClicked, isActive} = props
  const {buttonText, id} = buttonList

  const active = isActive ? 'selected-button' : 'button'

  const onButtonClick = () => {
    buttonClicked(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${active}`}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
