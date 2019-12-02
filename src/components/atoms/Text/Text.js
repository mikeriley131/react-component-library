import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Text.css'

const Text = props => {
  const { children, className, element: Element = 'p', size } = props

  const styles = classNames(
    className,
    size === 1 && 'h1',
    size === 2 && 'h2',
    size === 3 && 'h3',
    size === 4 && 'h4',
  )

  return <Element className={styles} size={size}>{children}</Element>
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  size: PropTypes.oneOf([1, 2, 3, 4]),
}

export default Text
