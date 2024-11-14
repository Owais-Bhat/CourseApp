import { View, TouchableWithoutFeedback, Dimensions, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Icon } from "react-native-elements";

const { width: screenWidth } = Dimensions.get("window");

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState("home");
  const iconSize = screenWidth > 400 ? 30 : 30;

  const renderTabIcon = (name, type, label, tabKey) => (
    <View style={styles.iconContainer}>
      <View
        style={[
          styles.iconBackground,
          activeTab === tabKey ? styles.activeCircle : styles.inactiveSquare,
        ]}
      >
        <Icon
          name={name}
          type={type}
          size={iconSize}
          color={activeTab === tabKey ? "#2A7086" : "#fff"}
        />
        <Text style={[styles.label, activeTab === tabKey && styles.activeLabel]}>
          {label}
        </Text>
      </View>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 80,
          backgroundColor: "#2A7086",
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: " ",
          tabBarIcon: () => renderTabIcon("home", "Ionicons", "Home", "home"),
          tabBarButton: (props) => (
            <TouchableWithoutFeedback
              onPress={() => {
                setActiveTab("home");
                props.onPress();
              }}
            >
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          headerShown: false,
          title: " ",
          tabBarIcon: () => renderTabIcon("groups", "materialicons", "Feed", "feed"),
          tabBarButton: (props) => (
            <TouchableWithoutFeedback
              onPress={() => {
                setActiveTab("feed");
                props.onPress();
              }}
            >
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          title: " ",
          tabBarIcon: () => renderTabIcon("chat", "entypo", "Chat", "chat"),
          tabBarButton: (props) => (
            <TouchableWithoutFeedback
              onPress={() => {
                setActiveTab("chat");
                props.onPress();
              }}
            >
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: " ",
          tabBarIcon: () => renderTabIcon("settings", "Ionicons", "Settings", "settings"),
          tabBarButton: (props) => (
            <TouchableWithoutFeedback
              onPress={() => {
                setActiveTab("settings");
                props.onPress();
              }}
            >
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBackground: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    backgroundColor: "#fff",
    borderRadius: 30, 
    elevation: 10, 
    borderWidth: 0.2, // Circle
  },
  inactiveSquare: {
    backgroundColor: "transparent",
    borderRadius: 10, // Square with rounded edges
  },
  label: {
    color: "#fff",
    fontSize: 11,
    marginTop: -1, // 1px gap
    textAlign: "center",
  },
  activeLabel: {
    color: "#2A7086",
  },
});

export default TabLayout;
