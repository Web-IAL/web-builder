import React, { useState } from 'react';
import classNames from 'classnames';

const TouchableOpacity = ({ children, className, ...props }) => {
  const [touched, setTouched] = useState(false);

  const toggleTouched = () => setTouched(!touched);
  const handleMouseUp = () => {
    setTimeout(() => {
      setTouched(false);
    }, 150);
  };
  const class_name = classNames(className, 'btn', touched && 'touched');

  return (
    <div
      {...props}
      className={class_name}
      onMouseDown={toggleTouched}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default TouchableOpacity;
