import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearUser } from "../../store/userSlice";
import { useNavigation } from "@react-navigation/core";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "@rneui/base";

const DangerZone = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <>
      <View style={{ gap: 15 }}>
        <Text
          style={{
            ...styles.subHeader,
            ...{ color: "#c92a2a" },
          }}
        >
          Zone Dangereuse
        </Text>
        <Button
          title="Supprimer le Profil"
          loading={false}
          loadingProps={{ size: "large", color: "white" }}
          buttonStyle={{
            backgroundColor: "#c92a2a",
            alignSelf: "center",
            borderBottomWidth: 3,
            borderBottomColor: "#a12222",
            borderRadius: 50,
            width: wp("88%"),
            marginBottom: 20,
          }}
          titleStyle={{ fontSize: hp("2.5%") }}
          onPress={async () => {
            await AsyncStorage.clear();
            dispatch(clearUser());
            navigation.navigate("signup");
          }}
        />
      </View>
    </>
  );
};

export default DangerZone;

const styles = StyleSheet.create({
  subHeader: {
    fontSize: 17,
    color: "#495057",
    fontWeight: "500",
    letterSpacing: 0.8,
  },
});
