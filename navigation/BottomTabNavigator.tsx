import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import PainDiary from "../screens/PainDiary";
import MedsDiary from "../screens/MedsDiary";
import {
  BottomTabParamList,
  PainDiaryParamList,
  MedsDiaryParamList,
  ProfileParamList,
} from "../types";
import Profile from "../screens/Profile";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  //PainDiary Meds Diary Profile

  return (
    <BottomTab.Navigator
      initialRouteName="PainDiary"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="PainDiary"
        component={PainDiaryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MedsDiary"
        component={MedsDiaryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const PainDiaryStack = createStackNavigator<PainDiaryParamList>();

function PainDiaryNavigator() {
  return (
    <PainDiaryStack.Navigator>
      <PainDiaryStack.Screen name="PainDiary" component={PainDiary} />
    </PainDiaryStack.Navigator>
  );
}

const MedsDiaryStack = createStackNavigator<MedsDiaryParamList>();

function MedsDiaryNavigator() {
  return (
    <MedsDiaryStack.Navigator>
      <MedsDiaryStack.Screen name="MedsDiary" component={MedsDiary} />
    </MedsDiaryStack.Navigator>
  );
}
const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}
