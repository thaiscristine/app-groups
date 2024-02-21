import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { useState } from 'react';

export function Groups() {

  const [groups, setGroups] = useState(['School', 'Work']);
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
      />
    </Container>
  );
}
