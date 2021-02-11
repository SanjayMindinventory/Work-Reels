import React from 'react'
import onClickOutside from 'react-onclickoutside'
import { Popper } from 'react-popper'

interface Props {
  children: React.ReactElement<typeof Popper>
  onClickOutside: () => void
}

class Wrapper extends React.Component<Props> {
  handleClickOutside = (event: React.MouseEvent) => {
    const { onClickOutside } = this.props
    event.preventDefault()
    onClickOutside()
  }

  render() {
    const { children } = this.props
    return children
  }
}

export const PopperWrapper = onClickOutside(Wrapper)
