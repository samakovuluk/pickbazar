import React from "react";
import {
  CouponBoxWrapper,
  Input,
  Button,
  Display,
  CouponCode,
  DiscountPrice,
  CancelBtn
} from "./CouponBox.style";
import { CloseIcon } from "../AllSvgIcon";

type CouponBoxProps = {
  onUpdate?: Function;
  onClick?: any;
  value?: any;
  disabled?: any;
  buttonTitle: string;
  className?: string;
  couponPlaceholder?: string;
  intlCouponBoxPlaceholder?: string;
  intlCouponApplyButton?: string;
  style?: any;
};

const CouponBox: React.FC<CouponBoxProps> = ({
  onUpdate,
  value,
  onClick,
  disabled,
  buttonTitle,
  intlCouponBoxPlaceholder,
  intlCouponApplyButton,
  className,
  style,
  couponPlaceholder
}) => {
  return (
    <CouponBoxWrapper className={className} style={style}>
      <Input
        onUpdate={onUpdate}
        value={value}
        placeholder={couponPlaceholder}
        intlPlaceholderId={
          intlCouponBoxPlaceholder
            ? intlCouponBoxPlaceholder
            : "intlCouponBoxPlaceholder"
        }
      />
      <Button
        onClick={onClick}
        disabled={disabled}
        title={buttonTitle}
        intlButtonId={intlCouponApplyButton}
      />
    </CouponBoxWrapper>
  );
};

type CouponDisplayProps = {
  onClick?: any;
  code?: string;
  sign?: string;
  currency?: string;
  price?: number;
  style?: any;
  btnStyle?: any;
};

export const CouponDisplay: React.FC<CouponDisplayProps> = ({
  code,
  currency,
  price,
  sign,
  onClick,
  style,
  btnStyle
}) => {
  return (
    <Display style={style} className="couponDisplayBox">
      <CouponCode className="couponCodeText">{code}</CouponCode>
      <DiscountPrice className="discountedPrice">
        {sign}
        {currency}
        {price}
      </DiscountPrice>
      <CancelBtn onClick={onClick} btnStyle={btnStyle}>
        <CloseIcon />
      </CancelBtn>
    </Display>
  );
};

export default CouponBox;
