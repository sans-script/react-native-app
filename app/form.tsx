import Button from "@/components/Button";
import styles from "@/constants/styles";
import Cpf from "@/utils/Cpf";
import useFormUser from "@/hooks/useFormUser";
import { Text, View, TextInput } from "react-native";

export default function FormScreen() {
  const { user, error, setUser, save } = useFormUser();

  return (
    <View style={styles.center}>
      <Text>Form</Text>
      <TextInput
        style={[styles.input, error.name && styles.inputError]}
        placeholder="Nome"
        value={user.name ?? ""}
        onChangeText={(name) => setUser({ ...user, name })}
      />

      {error.name && <Text style={{ color: "red" }}>{error.name}</Text>}

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={user.cpf ?? ""}
        keyboardType="phone-pad"
        onChangeText={(cpf) => setUser({ ...user, cpf: Cpf.format(cpf) })}
      />

      <Button onPress={save}>
        <Text style={{ color: "white" }}>Submit</Text>
      </Button>
    </View>
  );
}
