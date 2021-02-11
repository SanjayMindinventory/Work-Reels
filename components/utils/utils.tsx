import { TOKEN_NAME } from 'lib/constants'
import { useSpring } from 'react-spring'

export function useFadeUp() {
  return useSpring({
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    from: { opacity: 0, transform: 'translate3d(0,30px,0)' },
  })
}

export const getAccessToken = () => {
  let accessToken

  if (typeof window !== 'undefined') {
    accessToken = localStorage.getItem(TOKEN_NAME)
  }

  return accessToken
}
