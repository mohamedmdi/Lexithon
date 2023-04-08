import { Image, TouchableOpacity, View } from "react-native";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import { useNavigation } from "@react-navigation/native";

const Avatar = ({ gender, clickable = true, imgSize }) => {
  const navigation = useNavigation();

  if (!clickable)
    return (
      <View
        style={{
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
          backgroundColor: "rgba(124, 58, 237, 0.8)",
        }}
      >
        <Image
          source={gender === "male" ? boy : girl}
          style={{
            width: 45,
            height: 45,
          }}
        ></Image>
      </View>
    );

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("profile")}
      style={{
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        backgroundColor: "rgba(124, 58, 237, 0.8)",
        aspectRatio: 1 / 1,
      }}
    >
      <Image
        source={gender === "male" ? boy : girl}
        style={{
          width: imgSize,
          height: imgSize,
        }}
      ></Image>
    </TouchableOpacity>
  );
};

export default Avatar;
