import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';


export function Players() {

    const [team, setTeam] = useState('time a');
    const [players, setPlayers] = useState(['Thais', 'Jonna', 'Bruna', 'Nath']);

  return (
    <Container>
        <Header showBackButton />
        <Highlight title='Jogadores' subtitle={'Adicione as pessoas do time'} />
        <Form>
            <Input placeholder='Nome' autoCorrect={false}/>
            <ButtonIcon iconName='add'></ButtonIcon>
        </Form>

        <HeaderList>
            <FlatList 
                data={['time a', 'time b']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter 
                        title={item} 
                        isActive={team === item}
                        onPress={() => setTeam(item)}
                    >
                    </Filter>
                )}
                horizontal
            >
            </FlatList>
            <NumberOfPlayers>{players.length}</NumberOfPlayers>
        </HeaderList>
        <FlatList
            data={players}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <PlayerCard 
                    name={item}
                    onRemove={() => {}}
                ></PlayerCard>
            )}
            ListEmptyComponent={() => (
                <ListEmpty
                    message='Nenhum jogador adicionado'>
                </ListEmpty>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                { paddingBottom: 100 },
                players.length === 0 && { flex: 1 }
            ]}
        />
        <Button title='Remove team' colorType='SECONDARY' />
    </Container>
  );
}