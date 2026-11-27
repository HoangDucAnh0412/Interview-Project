import React from 'react'
import { SignInButton, SignOutButton, SignedIn, UserButton, SignedOut } from '@clerk/clerk-react'
import toast, { Toaster } from 'react-hot-toast'
function HomePage() {
    return (
        <div>
            <button onClick={() => toast.success("This is a success message!")}>Show Toast</button>
            <h1>Hello</h1>
            <SignedOut>
                <SignInButton>
                    <button>Sign In</button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <SignOutButton />
            </SignedIn>

            <UserButton />
        </div>
    )
}

export default HomePage
