import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { SignInButton, SignOutButton, SignedIn, UserButton } from '@clerk/clerk-react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <SignOutButton><SignInButton /></SignOutButton>
      <SignedIn><SignOutButton /></SignedIn>
      <SignedIn><UserButton /></SignedIn>


    </>
  )
}

export default App
