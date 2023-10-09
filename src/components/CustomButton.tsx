'use client';

import React, { MouseEventHandler } from 'react';

interface Props {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType?: HTMLButtonElement['type'];
}

const CustomButton: React.FC<Props> = ({
  title,
  containerStyles,
  handleClick,
  buttonType,
}) => {
  return (
    <button
      disabled={false}
      type={buttonType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
