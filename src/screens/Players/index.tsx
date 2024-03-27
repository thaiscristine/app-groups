import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { playersGetBryGroupAndTeam } from '@storage/player/playersGetBryGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';

type PlayersRouteParams = {
    group: string;
}

export function Players() {
    const route = useRoute();
    const { group } = route.params as PlayersRouteParams;
    const [team, setTeam] = useState('team a', 'team b');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const [newPlayerName, setNewplayerName] = useState('');

    async function handleAddPlayer() {
        if(newPlayerName.trim() === '') {
            return Alert.alert('Type a name');
        }

        const newPlayer = {
            name: newPlayerName,
            team
        }

        try {
            await playerAddByGroup(newPlayer, group);
            fetchPlayersByTeam();
            console.log(players)

        } catch(error){
            if (error instanceof AppError) {
                return Alert.alert('New person', error.message);
            } else {
                console.log(error)
                Alert.alert('New person', 'An error occurred when adding a new person');
            }
        }
    }

    async function fetchPlayersByTeam(){
        try {
            const playersByTeam = await playersGetBryGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch(error){
            console.log(error)
            Alert.alert('Players', 'An error occurred when fetching players');
        }
    }

    useEffect(() => {
        fetchPlayersByTeam();
    }, [team])

    return (
    <Container>
        <Header showBackButton />
        <Highlight title={group} subtitle={'Adicione as pessoas do time'} />
        <Form>
            <Input placeholder='Nome' autoCorrect={false} onChangeText={setNewplayerName} />
            <ButtonIcon iconName='add' onPress={handleAddPlayer}></ButtonIcon>
        </Form>

        <HeaderList>
            <FlatList 
                data={['time a', 'time b']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter 
                        title={item} 
                        isActive={item === team}
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
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
                <PlayerCard 
                    name={item.name}
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