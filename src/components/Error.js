import '../styles/error.scss';

export default function Error() {
  return (
    <div className="error-message">
      <h1 className='msg-title'>Page not found</h1>
      <p className='message'>Make sure the address is correct.</p>
    </div>
  )
}