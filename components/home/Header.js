import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
 
  import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";
  
  const Header = ({ user }) => {
    const navigation = useNavigation();
  
    return (
      <>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Avatar gender={user.gender}></Avatar>
          <Text style={styles.h1}>{user.username}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("setting")}>
            <Ionicons name="settings-outline" size={32} color="#7c3aed" />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  
  export default Header;
  
  const styles = StyleSheet.create({
    subjects: {
      padding: 5,
      gap: 20,
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
    },
  
    h1: {
      fontWeight: "bold",
      fontSize: 24,
      color: "#7c3aed",
      marginRight: "auto",
    },
  });
  