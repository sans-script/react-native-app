import Button from "@/components/Button";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function homeScreen() {
  return (
    <View style={[styles.center, {gap: 10}]}>
      <Text>Initial Tab</Text>
      <Button>
        <Link href="/stack/new" style={{color: 'white'}}>Go to new screen</Link>
      </Button>
      <Button>
        <Link href="/" style={{color: 'white'}}>Home</Link>
      </Button>
    </View>
  );
}
