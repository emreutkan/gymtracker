import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const IntroductionScreen = () => {
    const navigation = useNavigation();

    return (
        <Onboarding
            onDone={() => navigation.navigate('Login')}
            onSkip={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#fff',
                    // image: <Image
                    //     source={require('../assets/icon.png')}
                    //     style={{ width: 200, height: 200 }}
                    // />,
                    title: 'Welcome to FitTracker',
                    subtitle: 'Your personal fitness companion',
                },
                {
                    backgroundColor: '#fff',
                    // image: <Image
                    //     source={require('../assets/icon.png')}
                    //     style={{ width: 200, height: 200 }}
                    // />,
                    title: 'Track Your Progress',
                    subtitle: 'Monitor your workouts and see your improvements',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image
                        source={require('../../assets/icon.png')}
                        style={{ width: 200, height: 200 }}
                    />,
                    title: 'Set Your Goals',
                    subtitle: 'Create personalized fitness goals and achieve them',
                },
                {
                    backgroundColor: '#fff',
                    // image: <Image
                    //     source={require('../../assets/icon.png')}
                    //     style={{ width: 200, height: 200 }}
                    // />,
                    title: 'Join the Community',
                    subtitle: 'Connect with other fitness enthusiasts',
                },
            ]}
        />
    );
};