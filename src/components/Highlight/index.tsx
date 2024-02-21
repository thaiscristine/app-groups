import { useState } from 'react';
import { FlatList, Text } from 'react-native';

import {Container, Title, Subtitle} from './styles';
import { GroupCard } from '@components/GroupCard';

type HighlightProps = {
    title: string;
    subtitle: string;
}

export function Highlight({title, subtitle}: HighlightProps) {   

    const [groups, setGroups] = useState(['School', 'Work']);
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({item})  => (
                    <GroupCard title={item} />
                )}
            />
        </Container>
);
    }