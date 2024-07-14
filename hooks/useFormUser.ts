import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useFormUser() {
    const [user, setUser] = useState<any>({});
    const [error, setError] = useState<any>({});

    useEffect(() => {
        AsyncStorage.getItem("user").then((user) => {
            if (user) {
                setUser(JSON.parse(user));
            }
        });
    }, []);

    function validateForm() {
        let error = {};

        if (!user.name) {
            error = { ...error, name: "Name is required" };
        } else if (user.name.length < 3) {
            error = { ...error, name: "Name must be at least 3 characters long" };
        }

        setError(error);

        return Object.keys(error).length === 0;
    }

    function save() {
        if (validateForm()) {
            AsyncStorage.setItem("user", JSON.stringify(user));
        }
    }

    return { user, error, save, setUser };
}