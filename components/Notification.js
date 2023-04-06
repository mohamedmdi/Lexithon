import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNotifications } from "expo-notifications";

const Notification = () => {
  const { notifications } = useNotifications();

  if (!notifications || notifications.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{notifications[0].request.content.title}</Text>
      <Text style={styles.body}>{notifications[0].request.content.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
  },
});

export default Notification;
