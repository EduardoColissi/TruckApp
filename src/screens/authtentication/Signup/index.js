import React, { Fragment, useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AuthContext } from '../../../components/Context';

import styles from './styles';

import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import ErrorMessage from '../../../components/ErrorMessage';
import CorelogLogo from '../../../components/CorelogLogo';

//O yup é usado para validar o formulário no frontend, com base nas regras definidas no backend
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Por favor, digite seu nome completo.'),
    cpf: Yup.string()
        .required('Por favor, digite seu CPF.')
        .min(11, 'Por favor, digite um CPF válido.')
        .max(14, 'Por favor, digite um CPF válido.'),
    password: Yup.string()
        .label('Password')
        .required('Por favor, digite sua senha.')
        .min(6, 'A sua senha deve ter 6 ou mais caracteres.'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Senhas não conferem.')
})

const Signup = ({ navigation }) => {
    const { signUp } = useContext(AuthContext);

    const [SignupError, setSignupError] = useState(false);

    return (
        <LinearGradient
        colors={["#357309", "#3c8509"]}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.container}
        >
            <KeyboardAwareScrollView>
                <View style={styles.formContainer}>
                <CorelogLogo />
                    <Formik
                        initialValues={{ name: '', cpf: '', password: '', passwordConfirmation: '' }}
                        validationSchema={validationSchema}
                        onSubmit={async (data) => {
                            var statusCode;
                            statusCode = await signUp(data.name, data.cpf, data.password);
                            if (statusCode === 401) setSignupError(true);
                            else if (statusCode === 200) setSignupError(false);
                        }}
                    >
                        {formikProps => (
                            <Fragment>
                                <FormInput
                                    name='name'
                                    value={formikProps.name}
                                    onChangeText={formikProps.handleChange('name')}
                                    label='Nome'
                                    placeholder='Nome completo'
                                    autoCapitalize='none'
                                    onBlur={formikProps.handleBlur('name')}
                                    leftIcon={{ type: 'font-awesome', name: 'user-o' , color: 'white', size: 21}}
                                />
                                <ErrorMessage errorValue={formikProps.touched.name && formikProps.errors.name} />
                                
                                <FormInput
                                    name='cpf'
                                    value={formikProps.cpf}
                                    onChangeText={formikProps.handleChange('cpf')}
                                    placeholder='Seu CPF'
                                    label='CPF'
                                    autoCapitalize='none'
                                    onBlur={formikProps.handleBlur('cpf')}
                                    leftIcon={{ type: 'font-awesome', name: 'user-circle-o' , color: 'white', size: 21}}
                                />                                
                                <ErrorMessage errorValue={formikProps.touched.cpf && formikProps.errors.cpf} />

                                <FormInput
                                    name='password'
                                    value={formikProps.password}
                                    onChangeText={formikProps.handleChange('password')}
                                    placeholder='Sua senha'
                                    label='Senha'
                                    secureTextEntry
                                    onBlur={formikProps.handleBlur('password')}
                                    leftIcon={{ type: 'font-awesome', name: 'lock' , color: 'white', size: 21}}
                                />
                                <ErrorMessage errorValue={formikProps.touched.password && formikProps.errors.password} />

                                <FormInput
                                    name='passwordConfirmation'
                                    value={formikProps.passwordConfirmation}
                                    onChangeText={formikProps.handleChange('passwordConfirmation')}
                                    placeholder='Repita sua senha'
                                    label='Confirmação de senha'
                                    secureTextEntry
                                    onBlur={formikProps.handleBlur('passwordConfirmation')}
                                    leftIcon={{ type: 'font-awesome', name: 'lock' , color: 'white', size: 21}}
                                />
                                <ErrorMessage errorValue={formikProps.touched.passwordConfirmation && formikProps.errors.passwordConfirmation} />

                                {SignupError === true ? (
                                    <ErrorMessage errorValue="CPF ou Senha inválidos." />) : (
                                        <View />)
                                }

                                <View style={styles.buttonContainer}>
                                    <FormButton
                                        title='Registrar Conta'
                                        onPress={formikProps.submitForm}
                                        disabled={!formikProps.isValid}
                                    />
                                </View>
                            </Fragment>
                        )}
                    </Formik>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.signupButtonContainer}>
                    <Text style={styles.signupButton}>
                        Já tem uma conta? <Text style={{ fontWeight: "bold" }}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}

export default Signup;