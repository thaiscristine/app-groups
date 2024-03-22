import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { groupCreate } from '@storage/group/groupCreate';

import { Container, Content, Icon } from './styles';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNewGroup() {
    try {

      if(group.trim().length === 0){
        return Alert.alert('New group', 'The group name is required')
      } 

      await groupCreate(group.trim());
      navigation.navigate('players', { group });
    }
    catch (error) {

      if(error instanceof AppError){
        Alert.alert('New group', error.message)
      } else {
        Alert.alert('New group', 'It was not possible to create the group')
        console.log(error)
      }
      
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
