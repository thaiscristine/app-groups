import { ContainerInput } from "./styles";
import { TextInputProps } from "react-native";


export function Input({...rest}: TextInputProps) {
    return (
        <ContainerInput {...rest} />
    );
}