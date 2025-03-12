import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';

export const RegistrationScreen = () => {
    const navigation = useNavigation();
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: 'YOUR_GOOGLE_EXPO_CLIENT_ID',
        iosClientId: 'YOUR_GOOGLE_IOS_CLIENT_ID',
        androidClientId: 'YOUR_GOOGLE_ANDROID_CLIENT_ID',
        webClientId: 'YOUR_GOOGLE_WEB_CLIENT_ID',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            // Handle authentication with your backend
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#666"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry
            />
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity
                style={styles.googleButton}
                disabled={!request}
                onPress={() => {
                    promptAsync();
                }}
            >
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </TouchableOpacity>
            {Platform.OS === 'ios' && (
                <AppleAuthentication.AppleAuthenticationButton
                    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP}
                    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                    cornerRadius={5}
                    style={styles.appleButton}
                    onPress={async () => {
                        try {
                            const credential = await AppleAuthentication.signInAsync({
                                requestedScopes: [
                                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                                ],
                            });
                            // Handle credential with your backend
                        } catch (e) {
                            if (e.code === 'ERR_CANCELED') {
                                // Handle that the user canceled the sign-in flow
                            } else {
                                // Handle other errors
                            }
                        }
                    }}
                />
            )}
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.navigationText}>Already have an account? Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.navigationText}>Skip</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
    },
    input: {
        width: width - 40,
        height: 50,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#1e1e1e',
        color: '#fff',
    },
    registerButton: {
        width: width - 40,
        height: 50,
        backgroundColor: '#B413EC',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        color: '#666',
        marginVertical: 20,
    },
    googleButton: {
        width: width - 40,
        height: 50,
        backgroundColor: '#DE5246',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    googleButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    appleButton: {
        width: width - 40,
        height: 50,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: width - 40,
    },
    navigationText: {
        color: '#B413EC',
        fontSize: 14,
        fontWeight: 'bold',
    },
});