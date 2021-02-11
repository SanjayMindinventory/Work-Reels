import { useRef, useState, useEffect, RefObject } from 'react'

// Hook
function useHover(): [RefObject<HTMLElement>, boolean] {
  const [value, setValue] = useState(false)

  const ref = useRef<HTMLElement>(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [ref.current], // Recall only if ref changes
  )

  return [ref, value]
}

export default useHover
