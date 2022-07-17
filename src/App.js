const alertMessage = (message) => alert(message)

const ButtonAlert = (props) => <button onClick={() => alertMessage(props.message)}>{props.message}</button>

const App = () => {
  return (
    <div>
      <div>Hello,</div>
      <div>I have a book!</div>
      <div>Do you want to read my book?</div>
      <ButtonAlert message={"Yes, I do"}/>
      <ButtonAlert message={"No, I don't"}/>
      <ButtonAlert message={"Ah I'm not sure"}/>
    </div>
  )
}

export default App
