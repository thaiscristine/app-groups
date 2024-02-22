import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {

  const [groups, setGroups] = useState(['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii']);
  return (
    <Container>
      <Header />
      <Highlight title="Groups" subtitle="Play with your team" />
      <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item })  => (
              <GroupCard title={item} />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => (
            <ListEmpty 
              message="Time to get a new group? Create one!" 
            />
          )} 
      />
      <Button
        title='Create Group'
      ></Button>
    </Container>
  );
}
