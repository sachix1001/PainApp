import * as React from "react";
import { StyleSheet, Button, TextInput, ImageURISource, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { Text, View } from "../components/Themed";
import Slider from "@react-native-community/slider";
import image from '../parula_part_2_01.png'
import thumb from '../thumb.png'

export default function PainDiary() {
  const [date, onChangeDate] = React.useState("Wed 21 \nJul 2020");
  const [time, onChangeTime] = React.useState("21:20");
  const [duration, onChangeDuration] = React.useState("0 Hrs : 15 Min");
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <AntDesign name="calendar" size={24} color="black" />
        {"   "}When was the pain?
      </Text>
      <View style={styles.rowContainer}>
        <TextInput
          style={styles.textForm}
          onChangeText={(text) => onChangeDate(text)}
          value={date}
        />
        <TextInput
          style={styles.textForm}
          onChangeText={(text) => onChangeTime(text)}
          value={time}
        />
      </View>

      <Text style={styles.title}>
        <Fontisto name="stopwatch" size={24} color="black" />
        {"   "}How long did it last?
      </Text>
      <View style={styles.rowContainer}>
        <Entypo name="time-slot" size={45} color="black" />
        <TextInput
          style={styles.textForm}
          onChangeText={(text) => onChangeDuration(text)}
          value={duration}
        />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        maximumTrackTintColor="#000000"
        maximumTrackImage={image}
        minimumTrackImage={image}
        trackImage={image}
        thumbImage={thumb}
        step={1}
      />
      <Feather.Button style={styles.button} name="mic" size={24} color="black" backgroundColor='white'/>
      <Button  title="Submit" onPress={() => console.log("pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  rowContainer: {
    flexDirection: "row",
  },
  textForm: {
    borderRadius: 5,
    margin: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    paddingHorizontal: 7,
  },
  slider: {
    width:'80%',
    height: 30,
  },
  button:{
    borderRadius: 5,
    margin: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    paddingHorizontal: 7,
    backgroundColor:'white'
  }
});
