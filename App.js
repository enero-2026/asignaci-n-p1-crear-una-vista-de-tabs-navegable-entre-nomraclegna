import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PantallaGenerica from './PantallaGenerica';

const Tab = createBottomTabNavigator();

const configuracionWeb = {
  config: {
    screens: {
      Home: 'Home',
      Search: 'Search',
      Ado: 'Ado',
      NotFound: '*'
    }
  }
};

export default function App() {
  return (
    <NavigationContainer linking={configuracionWeb}>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: '#09090B' }}
        screenOptions={{
          tabBarItemStyle: { flex: 1 },
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            backgroundColor: '#18181B',
            borderTopWidth: 0,
            height: 60,
          },
          tabBarActiveTintColor: '#6366F1',
          tabBarInactiveTintColor: '#A1A1AA',
          headerStyle: {
            backgroundColor: '#18181B',
            borderBottomWidth: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold', letterSpacing: 1 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={PantallaGenerica}
          initialParams={{
            titulo: 'Home',
            urlGif: 'https://i.pinimg.com/1200x/39/91/f4/3991f4eda50253cf9816385491d3dd25.jpg'
          }}
        />
        <Tab.Screen
          name="Search"
          component={PantallaGenerica}
          initialParams={{ titulo: 'Search', urlGif: null }}
        />
        <Tab.Screen
          name="Ado"
          component={PantallaGenerica}
          initialParams={{
            titulo: 'Colección de Ado',
            urlGif: 'https://media1.tenor.com/m/DYnyXzPJmycAAAAC/ado-adodance.gif'
          }}
        />
        <Tab.Screen
          name="NotFound"
          component={PantallaGenerica}
          initialParams={{ titulo: 'Error 404: Ruta no encontrada', urlGif: 'https://media1.tenor.com/m/qGhQpBVaqJ8AAAAC/ado-ado-cute.gif' }}
          options={{
            tabBarButton: () => null,
            tabBarItemStyle: { display: 'none' }
          }} //En dado caso que se escriba en el buscador 'localhost:8081/RutaFalsa' los mandara a esta pestaña
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}