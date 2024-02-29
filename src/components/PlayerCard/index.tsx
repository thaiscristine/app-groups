import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Icon, Name } from './styles';

type PlayerCardProps = {
    name: string;
    onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
    return (
        <Container>
            <Icon name='person'></Icon>
            <Name>{name}</Name>
            <ButtonIcon 
                iconName='close' 
                type='SECONDARY' 
                onPress={onRemove}
            ></ButtonIcon>
        </Container>
    );
}
