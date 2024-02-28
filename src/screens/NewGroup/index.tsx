import { Button } from '@components/Button';
import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="New group" subtitle='Add a group to add the participants'/>
        <Input placeholder="Group's name"/>
        <Button title="Create group" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
