import React from 'react';
import ButtonStyle from './Button.style';
import { FormattedMessage } from 'react-intl';

type ButtonProps = {
  title: any;
  intlButtonId?: any;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: any) => void;
  loader?: Object;
  loaderColor?: string;
  isLoading?: boolean;
  className?: string;
  fullwidth?: boolean;
  style?: any;
  type?: 'button' | 'submit' | 'reset';
  iconPosition?: 'left' | 'right';
  iconStyle?: any;
  size?: 'small' | 'medium';
  colors?: 'primary' | 'secondary';
  variant?:
    | 'textButton'
    | 'outlined'
    | 'outlinedDash'
    | 'outlinedFab'
    | 'extendedOutlinedFab'
    | 'fab'
    | 'extendedFab';
};

const Button: React.FC<ButtonProps> = ({
  type,
  size,
  title,
  intlButtonId,
  colors,
  variant,
  icon,
  disabled,
  iconPosition,
  iconStyle,
  onClick,
  loader,
  loaderColor,
  isLoading,
  className,
  fullwidth,
  style,
  ...props
}) => {
  // Checking button loading state
  const buttonIcon =
    isLoading !== false ? (
      <>{loader ? loader : 'loading....'}</>
    ) : (
      icon && (
        <span className='btn-icon' style={iconStyle}>
          {icon}
        </span>
      )
    );

  // set icon position
  const position: string = iconPosition || 'right';

  return (
    <ButtonStyle
      type={type}
      className={`reusecore__button ${disabled ? 'disabled' : ''} ${
        isLoading ? 'isLoading' : ''
      } ${className ? className : ''}`.trim()}
      icon={icon}
      disabled={disabled}
      icon-position={position}
      onClick={onClick}
      colors={colors}
      variant={variant}
      fullwidth={fullwidth}
      style={style}
      size={size}
      {...props}
    >
      {position === 'left' && buttonIcon}
      {title && !isLoading && (
        <span className='btn-text'>
          <FormattedMessage
            id={intlButtonId ? intlButtonId : 'intlButtonId'}
            defaultMessage={title}
          />
        </span>
      )}
      {position === 'right' && buttonIcon}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'button',
};

export default Button;
