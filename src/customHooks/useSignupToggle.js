import { useState } from "react"

export const useSignupToggle = (isSignupState) => {
  const [isSignupState, setIsSignupState] = useState(isSignupState)

  function toggleIsSignup() {
    setIsSignupState(!isSignupState)
  }

  return { isSignupState, toggleIsSignup }


}