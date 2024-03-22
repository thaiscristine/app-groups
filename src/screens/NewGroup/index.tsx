import { Button } from '@components/Button';
import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { groupCreate } from '@storage/group/groupCreate';

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNewGroup() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group });
    }
    catch (error) {
      console.log(error);
    }
    
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="New group" subtitle='Add a group to add the participants'/>
        <Input placeholder="Group's name" onChangeText={setGroup} />
        <Button title="Create group" style={{ marginTop: 20 }} onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
