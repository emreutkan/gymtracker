import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom Next Button (Arrow)
const NextButton = ({ isLight, ...props }) => (
    <TouchableOpacity
        style={styles.nextButton}
        {...props}
    >
        <Text style={styles.nextButtonText}>›</Text>
    </TouchableOpacity>
);

// Custom Skip Button (Top Right)
const SkipButton = ({ skipLabel, ...props }) => (
    <TouchableOpacity
        style={styles.skipButton}
        {...props}
    >
        <Text style={styles.skipButtonText}>SKIP</Text>
    </TouchableOpacity>
);

// Custom Done Button (similar to Next but navigates to login)
const DoneButton = ({ isLight, ...props }) => (
    <TouchableOpacity
        style={[styles.nextButton, { backgroundColor: '#B413EC' }]}
        {...props}
    >
        <Text style={styles.nextButtonText}>›</Text>
    </TouchableOpacity>
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
        <View style={styles.mainContainer}>
            {/* Swipe Indicator */}
            <View style={styles.swipeIndicatorContainer}>
                <Text style={styles.swipeIndicatorText}>Swipe to explore</Text>
                <View style={styles.swipeIndicatorLine} />
            </View>

            <Onboarding
                onDone={() => navigation.navigate('Login')}
                onSkip={() => navigation.navigate('Login')}
                DotComponent={CustomDot}
                NextButtonComponent={NextButton}
                SkipButtonComponent={SkipButton}
                DoneButtonComponent={DoneButton}
                titleStyles={styles.title}
                subTitleStyles={styles.subtitle}
                bottomBarHighlight={false}
                containerStyles={styles.container}
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
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#121212',
    },
    container: {
        backgroundColor: '#121212',
    },
    // Next Button Styles
    nextButton: {
        position: 'absolute',
        right: 20,
        top: '50%',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translateY: -25 }],
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '300',
    },
    // Skip Button Styles
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        padding: 10,
        zIndex: 1,
    },
    skipButtonText: {
        color: '#666',
        fontSize: 14,
        fontWeight: '600',
    },
    // Swipe Indicator Styles
    swipeIndicatorContainer: {
        position: 'absolute',
        top: 100,
        left: 20,
        zIndex: 1,
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
    // Image and Content Styles
    imageContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 280,
        marginTop: -50, // Move content up to accommodate the swipe indicator
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