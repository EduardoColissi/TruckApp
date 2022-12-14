import { useMemo } from "react";
import * as SecureStore from "expo-secure-store";
import api from "./services/api";

export async function getToken(data) {
  try {
    const response = await api.post("/users/login", data);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function insertUser(data) {
  try {
    const response = await api.post("/users/signup", data);
    return response;
  } catch (err) {
    return err.response;
  }
}
