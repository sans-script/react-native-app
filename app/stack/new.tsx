import Button from "@/components/Button";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function newScreen() {
  return (
    <View style={[styles.center, {gap: 10}]}>
      <Text>New Screen</Text>
      <Button>
        <Link href="/stack" style={{ color: "white" }}>
          Back
        </Link>
      </Button>
    </View>
  );
}
