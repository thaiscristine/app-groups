import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonColorProps = 'PRIMARY' | 'SECUNDARY';

type ButtonComponentStyleProps = {
    colorType: ButtonColorProps;
}

export const Container = styled(TouchableOpacity)<ButtonComponentStyleProps>`
  flex: 1;
  
  min-height: 56px;
  max-height: 56px;
  
  background-color: ${({ theme, colorType }) => colorType === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;
