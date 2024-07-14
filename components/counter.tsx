import styles from "@/constants/styles"
import { useState } from "react"
import { Text, View } from "react-native"

export interface CounterProps{
    initialValue?: number
}

export default function Counter(props: CounterProps){

    const [number, setNumber] = useState(props.initialValue ?? 0)

    return (
        <View style={styles.center}>
            <Text style={{fontSize: 50}}>{number}</Text>
        </View>
    )
}