import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Loading from "./components/layout/Loading";
import Quiz from "./components/quiz/Quiz";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="loading" component={Loading} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
