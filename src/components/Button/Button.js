import React from 'react';
const Button = ({ text, className }) => {
  return (
    <div className={styles.button}>
      <button className={className}>{text}</button>
    </div>
  );
};

export default Button;
