import { ContainerInput } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

export function Input({...rest}: TextInputProps) {

    const { COLORS } = useTheme();

    return (
        <ContainerInput
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}  
        />
    );
}