import { View, StyleSheet, Image, Text, Pressable } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPless={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View />
      <Text>{place.title}</Text>
      <Text>{place.address}</Text>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({});
