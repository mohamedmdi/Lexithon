import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpPage from "./pages/SignUpPage";
import Home from "./components/home/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Loading from "./components/layout/Loading";
import Quiz from "./components/quiz/Quiz";
import GameOverPage from "./pages/GameOverPage";
import SettingPage from "./pages/SettingPage";
import Setting from "./components/setting/Setting";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="loading" component={Loading} />
          <Stack.Screen name="signup" component={SignUpPage} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="setting" component={SettingPage} />
          <Stack.Screen name="profile" component={Setting} />
          <Stack.Screen name="quiz" component={Quiz} />
          <Stack.Screen name="gameover" component={GameOverPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
