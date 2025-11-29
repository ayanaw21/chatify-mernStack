import { useAuthStore } from '../store/useAuthStore'

const ChatPage = () => {
  const { logout } = useAuthStore()
  
  const handleClick = () => {
    console.log('✅ Button clicked!')
  }
  
  const handleLogout = async () => {
    await logout()
  }
  
  return (
    <div>
      <p>Chat page</p>
      {/* Test with simple function first */}
      <button onClick={handleClick}>Test Click</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default ChatPage