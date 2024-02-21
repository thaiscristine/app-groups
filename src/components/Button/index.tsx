import { TouchableOpacityProps } from "react-native";
import { Container, Title, ButtonColorProps } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  colorType?: ButtonColorProps;
};

export function Button({ title, colorType = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container
        colorType={colorType}
        {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
