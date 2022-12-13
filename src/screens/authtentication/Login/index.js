import React, { Fragment, useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthContext } from "../../../components/Context";

import styles from "./styles";

import FormInput from "../../../components/FormInput";
import FormButton from "../../../components/FormButton";
import ErrorMessage from "../../../components/ErrorMessage";
import CorelogLogo from "../../../components/CorelogLogo";

//Funções para validar formulario e mostrar mensagens de erro
const validationSchema = Yup.object().shape({
  cpf: Yup.string()
    .label("CPF")
    .min(11, "Digite um CPF válido.")
    .max(14, "Digite um CPF válido.")
    .required("Por favor, digite um CPF cadastrado."),
  password: Yup.string()
    .label("Senha")
    .required("Por favor, digite sua senha.")
    .min(6, "A sua senha deve ter mais de 6 caracteres."),
});

const Login = ({ navigation }) => {
  //atribui a constante singnin ao contexto de autenticacao
  const { signIn } = useContext(AuthContext);

  //state para mostrar erros
  const [loginError, setLoginError] = useState(false);

  return (
    <LinearGradient
      colors={["#357309", "#3c8509"]}
      start={[0, 0]}
      end={[1, 0]}
      style={styles.container}
    >
      <KeyboardAwareScrollView>
        <CorelogLogo />
        <View style={styles.formContainer}>
          <Formik
            initialValues={{ cpf: "", password: "" }}
            validationSchema={validationSchema}
            //'data' da acesso ao 'initialValues'
            onSubmit={async (data) => {
              var statusCode;
              //chamando sigIn do nosso contexto, passando os inputs do formulario como parametro
              statusCode = await signIn(data.cpf, data.password);
              if (statusCode === 401) setLoginError(true);
              else if (statusCode === 200) setLoginError(false);
            }}
          >
            {(formikProps) => (
              <Fragment>
                <FormInput
                  name="cpf"
                  value={formikProps.cpf}
                  onChangeText={formikProps.handleChange("cpf")}
                  placeholder="CPF"
                  autoCapitalize="none"
                  onBlur={formikProps.handleBlur("cpf")}
                />

                {/* .touched é usado para definir que o erro só aparecerá se o input ja ter sido visitado */}
                <ErrorMessage
                  errorValue={
                    formikProps.touched.cpf && formikProps.errors.cpf
                  }
                />

                <FormInput
                  name="password"
                  value={formikProps.password}
                  onChangeText={formikProps.handleChange("password")}
                  placeholder="Senha"
                  secureTextEntry
                  leftIcon={<Icon name="lock" size={24} color="black" />}
                  onBlur={formikProps.handleBlur("password")}
                />
                <ErrorMessage
                  errorValue={
                    formikProps.touched.password && formikProps.errors.password
                  }
                />

                {loginError === true ? (
                  <ErrorMessage errorValue="CPF ou senha incorretos. Tente novamente" />
                ) : (
                  <View />
                )}

                <View style={styles.buttonContainer}>
                  <FormButton
                    title="LOGIN"
                    onPress={formikProps.submitForm}
                    //valida se os inputs estão com informações dentro das regras, se não estiverem, deixa o input disable
                    disabled={!formikProps.isValid}
                  />
                </View>
              </Fragment>
            )}
          </Formik>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupButton}>
            Não possui conta?{" "}
            <Text style={{ fontWeight: "bold" }}>Registre-se</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Login;