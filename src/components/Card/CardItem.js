import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ContextOS } from 'store/OSContext';
import TouchableOpacity from './TouchableOpacity';

const propsTypes = {
  /**
   * Sets border
   * @type {(true|false)}
   */
  bordered: PropTypes.bool,
  /**
   * Sets set Header
   * @type {(true|false)}
   */
  header: PropTypes.bool,
  /**
   * Sets set Footer
   * @type {(true|false)}
   */
  footer: PropTypes.bool,
  /**
   * Sets class name
   * @type {string}
   */
  className: PropTypes.string,
};

const CardItem = ({
  header,
  footer,
  bordered,
  className,
  children,
  button,
  ...props
}) => {
  const { type } = useContext(ContextOS);

  const class_name = classNames(
    className,
    type,
    bordered && `card-border`,
    header && `card-header`,
    footer && `card-footer`,
    button && `card-button`,
    !(header || footer) && `card-body`,
  );

  return (
    <>
      {button ? (
        <TouchableOpacity className={class_name} {...props}>
          {children}
        </TouchableOpacity>
      ) : (
        <div className={class_name} {...props}>
          {children}
        </div>
      )}
    </>
  );
};

CardItem.displayName = 'CardItem';
CardItem.propTypes = propsTypes;

export default CardItem;
