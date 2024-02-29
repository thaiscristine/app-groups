import { Container, Title, FilterStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{ title }</Title>
    </Container>
  );
}
