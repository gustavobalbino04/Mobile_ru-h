import React, { useState } from 'react';
import * as Yup from 'yup'
import { Formik, useFormik } from 'formik';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    const salvar = async (value) => {
        await AsyncStorage.setItem('@jwt', value);
    }

    const signinValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email inválido')
            .required('Campo Email Obrigatório'),
        senha: Yup.string()
            .required('Campo Senha Obrigatório'),
    })

    return (
        // <KeyboardAvoidingView
        //     behavior={Platform.OS == "ios" ? "padding" : "height"}
        //     style={styles.container}
        // >
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Montserrat', fontWeight: "1000", fontSize: 72, color: 'yellow' }}>Ru$h</Text>
            <Formik
                validationSchema={signinValidationSchema}
                initialValues={{
                    email: '',
                    senha: ''
                }}
                onSubmit={values => {
                    ContaServico
                        .logar(values)
                        .then(resultado => {
                            if (resultado.data.sucesso) {
                                salvar(resultado.data.data.token);
                                navigation.push('Autenticado');
                            } else {
                                alert(resultado.data.mensagem);
                            }
                        })
                        .catch(erro => {

                        })
                }}
            >
                {({ handleSubmit, handleChange, isValid, values, isSubmitting, errors, touched }) => (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            name="email"
                            keyboardType={"email-address"}
                            autoCorrect={false}
                        />
                        {errors.email && touched.email ? (<Text style={styles.error}>{errors.email}</Text>) : null}

                        <TextInput
                            style={styles.input}
                            name="senha"
                            placeholder="Senha"
                            onChange={handleChange('senha')}
                            defaultValue={values.senha}
                            secureTextEntry={true}
                        />
                        {errors.senha && touched.senha ? (<Text style={styles.error}>{errors.senha}</Text>) : null}

                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.button}
                            disabled={isSubmitting}
                        >
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
        /* </TouchableWithoutFeedback> */
        // </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoHeader: {
        color: 'white',
        margin: 10,
        fontWeight: "700",
        marginBottom: 15,
        fontSize: 24,
        fontFamily: 'Montserrat'
    },
    input: {
        width: 250,
        height: 40,
        color: '#3a3a3a',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        fontWeight: "700",
        fontFamily: 'Montserrat'
    },
    button: {
        backgroundColor: 'white',
        width: 250,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontWeight: "700",
        color: '#3a3a3a',
        fontFamily: 'Montserrat'
    }

});