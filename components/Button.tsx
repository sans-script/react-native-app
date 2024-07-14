import React from "react";
import { Pressable, StyleSheet } from "react-native";

export interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.button]} // example styling
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3A7EFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
