import { useState } from 'react'

const useCustomHook = () => {
  const [state, setState] = useState(null)
  return [state, setState]
}

export default useCustomHook