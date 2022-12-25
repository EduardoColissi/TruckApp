import React, { useEffect, useMemo, useReducer } from "react";
import { View, ActivityIndicator } from "react-native";
import * as SecureStore from "expo-secure-store";

import AuthNavigation from "./navigation/AuthNavigation";
import UserNavigation from "./navigation/UserNavigation";

import Loading from "./components/Loading";

import { AuthContext } from "./components/Context";
import { getToken, insertUser } from "./auth";

const Routes = () => {
  const initialAuthState = {
    userToken: null,
    isLoading: true,
  };

  const authReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case "SIGNUP":
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
    }
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const authContext = useMemo(
    () => ({
      signIn: async (cpf, password) => {
        let token;
        token = null;

        let data = {
          cpf: cpf,
          password: password,
        };
        const response = await getToken(data);

        //se tudo estiver certo, salva o token no local storage
        if (response.status === 200) {
          token = response.data.token;
          await SecureStore.setItemAsync("authorization", token);
        }
        //se nao, retorna o erro
        else if (response.status === 401) {
          console.log("Wrong email or password");
        }

        dispatch({ type: "LOGIN", userToken: token });

        return response.status;
      },
      signOut: async () => {
        //remove o token do local storage
        try {
          await SecureStore.deleteItemAsync("authorization");
        } catch (error) {
          console.log(error);
        }

        dispatch({ type: "LOGOUT" });
      },
      signUp: async (name, cpf, password) => {
        let token;
        token = null;

        let data = {
          name: name,
          cpf: cpf,
          password: password,
        };

        //pegando o token de acesso
        const response = await insertUser(data);
        console.log(response);
        if (response.status === 200) {
          token = response.data.token;
          await SecureStore.setItemAsync("authorization", token);
        } else {
          console.log("CPF já em uso. Tente outro.");
        }

        dispatch({ type: "SIGNUP", userToken: token });

        return response.status;
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let token;
      token = null;

      try {
        token = await SecureStore.getItemAsync("authorization");
      } catch (error) {
        console.log(error);
      }

      dispatch({ type: "RETRIEVE_TOKEN", userToken: token });
    }, 500);
  }, []);

  if (authState.isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      {authState.userToken !== null ? <UserNavigation /> : <AuthNavigation />}
    </AuthContext.Provider>
  );
};

export default Routes;
