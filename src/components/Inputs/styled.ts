import styled from "styled-components";

export const RadioGroupContainer = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const RadioGroupLabel = styled.h3`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.magenta};
`;

export const RadioGroupOptions = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const RadioInputGroup = styled.div`
  position: relative;
`;

export const InputRadioBullet = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.magentaOpacity};

  &:before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: ${({ theme }) => theme.colors.magentaOpacity};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;

  &:checked + ${InputRadioBullet}:before {
    opacity: 1;
  }

  &:focus + ${InputRadioBullet} {
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.magenta};
  }
`;

export const InputRadioLabel = styled.label`
  margin-left: 4px;
`;
