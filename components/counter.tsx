import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Button from "./Button";
import { Text, View } from "react-native";

export interface CounterProps {
  initialValue?: number;
}

export default function Counter(props: CounterProps) {
  const [number, setNumber] = useState(props.initialValue ?? 0);

  return (
    <View style={styles.center}>
      <Text style={{ fontSize: 50 }}>{number}</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Button onPress={() => setNumber(n => n +1)}>
          <Ionicons name="add" size={24} color="white" />
        </Button>
        <Button onPress={() => setNumber(n => n - 1)}>
          <Ionicons name="remove" size={24} color="white" />
        </Button>
      </View>
    </View>
  );
}
