'use client';

import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

interface Props {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType?: HTMLButtonElement['type'];
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

const CustomButton: React.FC<Props> = ({
  title,
  containerStyles,
  handleClick,
  buttonType,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={false}
      type={buttonType ?? 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
