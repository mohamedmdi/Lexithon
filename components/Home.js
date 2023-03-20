import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};

const Home = () => {
  const [user, setUser] = useState(null)
  // const GG = JSON.parse(user)
  // console.log("GG: ", {...user})
  const  dispatch = useDispatch()

  useEffect(() => {
    if (user?.username) return;
    
    (async () => {
      const data = await getData();
      setUser(data)
      dispatch(addUser({...data}))
    })();
  }, [user?.username]);
  

  return (
    <View>
      <Text>Welcome Back, {user?.username}</Text>
    </View>
  );
};

export default Home;
