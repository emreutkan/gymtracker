import React, { useState } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom Empty Next Button (to remove the default next button)
const NextButton = () => null;

// Custom Done Button
const DoneButton = ({ isLight, ...props }) => (
    <View style={styles.doneButtonContainer}>
        <TouchableOpacity
            style={styles.doneButton}
            {...props}
        >
            <Text style={styles.doneButtonText}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
);

const CustomDot = ({ selected }) => {
    return (
        <View
            style={{
                width: selected ? 25 : 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 3,
                backgroundColor: selected ? '#B413EC' : '#333',
            }}
        />
    );
};

export const IntroductionScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* Skip button placed outside of Onboarding component */}
            <TouchableOpacity
                style={styles.skipButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.skipButtonText}>SKIP</Text>
            </TouchableOpacity>

            <Onboarding
                onDone={() => navigation.navigate('Login')}
                NextButtonComponent={NextButton}
                DoneButtonComponent={DoneButton}
                SkipButtonComponent={() => null} // Remove default skip button
                DotComponent={CustomDot}
                titleStyles={styles.title}
                subTitleStyles={styles.subtitle}
                bottomBarHighlight={false}
                containerStyles={styles.container}
                imageContainerStyles={styles.imageContainerWrapper}
                pages={[
                    {
                        backgroundColor: '#121212',
                        image: (
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../../assets/icon.png')}
                                    style={styles.image}
                                />
                                <View style={styles.glowEffect} />
                            </View>
                        ),
                        title: 'WELCOME TO\nFITTRACKER',
                        subtitle: 'Your Journey Begins Here',
                    },
                    {
                        backgroundColor: '#121212',
                        image: (
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../../assets/icon.png')}
                                    style={styles.image}
                                />
                                <View style={styles.glowEffect} />
                            </View>
                        ),
                        title: 'TRACK YOUR\nPROGRESS',
                        subtitle: 'Watch Your Success Unfold in Real-Time',
                    },
                    {
                        backgroundColor: '#121212',
                        image: (
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../../assets/icon.png')}
                                    style={styles.image}
                                />
                                <View style={styles.glowEffect} />
                            </View>
                        ),
                        title: 'SET YOUR\nGOALS',
                        subtitle: 'Push Your Limits, Break Boundaries',
                    },
                    {
                        backgroundColor: '#121212',
                        image: (
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../../assets/icon.png')}
                                    style={styles.image}
                                />
                                <View style={styles.glowEffect} />
                            </View>
                        ),
                        title: 'JOIN THE\nELITE',
                        subtitle: 'Connect. Compete. Conquer.',
                    },
                ]}
            />

            {/* Swipe Indicator */}
            <View style={styles.swipeIndicatorContainer}>
                <Text style={styles.swipeIndicatorText}>Swipe to explore</Text>
                <View style={styles.swipeIndicatorLine} />
            </View>
        </SafeAreaView>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#121212',
    },
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    // Skip Button Styles - Now outside Onboarding
    skipButton: {
        position: 'absolute',
        right: 20,
        top: 40,
        padding: 10,
        zIndex: 999,
    },
    skipButtonText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '600',
    },
    // Done Button Styles
    doneButtonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 50,
    },
    doneButton: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: '#B413EC',
        borderRadius: 25,
        shadowColor: '#B413EC',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    doneButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1,
    },
    // Swipe Indicator Styles
    swipeIndicatorContainer: {
        position: 'absolute',
        top: 100,
        left: 20,
        zIndex: 998,
        flexDirection: 'row',
        alignItems: 'center',
    },
    swipeIndicatorText: {
        color: '#666',
        fontSize: 12,
        marginRight: 10,
    },
    swipeIndicatorLine: {
        width: 50,
        height: 2,
        backgroundColor: '#333',
    },
    // Image Container Styles
    imageContainerWrapper: {
        paddingTop: 60,
    },
    imageContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 280,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#B413EC',
    },
    glowEffect: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 20,
        backgroundColor: 'rgba(180, 19, 236, 0.15)',
        shadowColor: '#B413EC',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#ffffff',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 10,
        textShadowColor: '#B413EC',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#B8B8B8',
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 24,
    },
});