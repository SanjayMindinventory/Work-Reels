import classNames from 'classnames'
import { Placement } from 'popper.js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Popper, Reference } from 'react-popper'

import { PopperWrapper } from './popper-wrapper'

interface Props {
  children: (closePopover: () => void) => React.ReactNode
  position?: Placement
  target: (
    openPopover: () => void,
    closePopover: () => void,
    opened: boolean,
  ) => React.ReactNode
  disableOnClickOutsideContent?: boolean
  usePortal?: boolean
  portalContainer?: HTMLElement
}

interface State {
  opened: boolean
  entered: boolean
}

const getPopperClass = (entered: boolean) =>
  classNames([
    'transition-opacity',
    {
      'opacity-0': !entered,
      'opacity-100': entered,
    },
  ])

const popperModifiers = {
  flip: { enabled: false },
  preventOverflow: { enabled: false },
}

export class Popover extends React.Component<Props, State> {
  element?: HTMLElement

  state = {
    opened: false,
    entered: false,
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    const element = ReactDOM.findDOMNode(this)
    // TODO: check if element String here
    // TODO: check if element is Fragment here
    if (element) {
      this.element = element as HTMLElement
    }
  }

  openPopover = () => {
    this.setState({
      opened: true,
      entered: true,
    })
  }

  closePopover = () => {
    const { opened } = this.state
    if (opened) {
      this.setState({ entered: false })
      setTimeout(() => this.setState({ opened: false }), 200)
    }
  }

  render() {
    const {
      children,
      position,
      target,
      usePortal,
      portalContainer,
    } = this.props

    const { opened, entered } = this.state

    const popperClass = getPopperClass(entered)
    const content = (
      <PopperWrapper
        disableOnClickOutside={this.props.disableOnClickOutsideContent}
        eventTypes={['click', 'touchend']}
        onClickOutside={this.closePopover}
      >
        <Popper
          referenceElement={this.element}
          placement={position}
          modifiers={[]}
        >
          {({ ref, style, placement, arrowProps }) => (
            <div
              ref={ref}
              style={style}
              data-placement={placement}
              className={popperClass}
            >
              {children(this.closePopover)}
              <div ref={arrowProps.ref} style={arrowProps.style} />
            </div>
          )}
        </Popper>
      </PopperWrapper>
    )

    return (
      <Manager>
        <Reference>
          {() => target(this.openPopover, this.closePopover, opened)}
        </Reference>
        {opened &&
          (usePortal === false
            ? content
            : ReactDOM.createPortal(content, portalContainer || document.body))}
      </Manager>
    )
  }
}
