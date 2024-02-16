import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native';

export default function App() {

  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <Groups /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}