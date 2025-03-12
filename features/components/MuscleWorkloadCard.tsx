import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MuscleWorkloadCardProps {
    muscleGroup: string;
    status: 'Underworked' | 'Optimal' | 'Overworked';
    lastWorked: string;
    weeklyVolume?: number;
}

export const MuscleWorkloadCard = ({
                                       muscleGroup,
                                       status,
                                       lastWorked,
                                       weeklyVolume
                                   }: MuscleWorkloadCardProps) => {
    const getStatusColor = () => {
        switch (status) {
            case 'Underworked':
                return '#FFA500';
            case 'Optimal':
                return '#4CAF50';
            case 'Overworked':
                return '#FF4444';
            default:
                return '#B413EC';
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.muscleGroup}>{muscleGroup}</Text>
            <View style={[styles.statusIndicator, { backgroundColor: getStatusColor() }]} />
            <Text style={styles.status}>{status}</Text>
            <Text style={styles.lastWorked}>Last: {lastWorked}</Text>
            {weeklyVolume && (
                <Text style={styles.volume}>Sets this week: {weeklyVolume}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        padding: 15,
        marginRight: 15,
        width: 150,
        shadowColor: '#B413EC',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    muscleGroup: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    statusIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    status: {
        color: '#B8B8B8',
        fontSize: 14,
        marginBottom: 5,
    },
    lastWorked: {
        color: '#666',
        fontSize: 12,
    },
    volume: {
        color: '#B413EC',
        fontSize: 12,
        marginTop: 5,
    },
});