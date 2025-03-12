import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>WELCOME BACK</Text>
                <Text style={styles.subHeaderText}>Ready to crush your goals?</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#666"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>SIGN IN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    headerContainer: {
        marginTop: 100,
        marginBottom: 50,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 32,
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: 2,
        textShadowColor: '#B413EC',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    subHeaderText: {
        fontSize: 16,
        color: '#B8B8B8',
        marginTop: 10,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        width: width - 40,
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: '#1E1E1E',
        borderWidth: 1,
        borderColor: '#333',
    },
    input: {
        height: 55,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#fff',
    },
    loginButton: {
        width: width - 40,
        height: 55,
        backgroundColor: '#B413EC',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#B413EC',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    forgotPasswordContainer: {
        marginTop: 20,
    },
    forgotPasswordText: {
        color: '#B413EC',
        fontSize: 14,
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    signupText: {
        color: '#B8B8B8',
        fontSize: 14,
    },
    signupLink: {
        color: '#B413EC',
        fontSize: 14,
        fontWeight: 'bold',
    },
    skipButton: {
        marginTop: 30,
    },
    skipButtonText: {
        color: '#B413EC',
        fontSize: 14,
        fontWeight: 'bold',
    },
});