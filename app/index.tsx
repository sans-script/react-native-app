import Button from "@/components/Button";
import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function MainWindow() {
  const nav = useNavigation();
  return (
    <View style={[styles.center, { gap: 10 }]}>
      <Ionicons name="logo-react" size={100} color="cyan" />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Expo Router</Text>
        <Text style={{ fontSize: 16 }}>React Native</Text>
      </View>
      <Button onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
        <Text style={{ color: "white" }}>Start</Text>
      </Button>
    </View>
  );
}
