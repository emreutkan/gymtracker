import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface WorkoutSummaryProps {
    date: Date;
    onPress?: () => void;
}

export const WorkoutSummary = ({ date, onPress }: WorkoutSummaryProps) => {
    // This would normally come from your workout data
    const mockWorkout = {
        routine: "Push Day",
        exercises: [
            {
                name: "Bench Press",
                sets: [
                    { weight: 185, reps: 8, rpe: 8 },
                    { weight: 185, reps: 8, rpe: 8 },
                    { weight: 185, reps: 7, rpe: 9 },
                ],
            },
            {
                name: "Shoulder Press",
                sets: [
                    { weight: 135, reps: 10, rpe: 7 },
                    { weight: 135, reps: 9, rpe: 8 },
                    { weight: 135, reps: 8, rpe: 8 },
                ],
            },
        ],
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.header}>
                <Text style={styles.routineName}>{mockWorkout.routine}</Text>
                <Text style={styles.date}>
                    {date.toLocaleDateString()}
                </Text>
            </View>

            <View style={styles.exercises}>
                {mockWorkout.exercises.map((exercise, index) => (
                    <View key={index} style={styles.exercise}>
                        <Text style={styles.exerciseName}>{exercise.name}</Text>
                        <View style={styles.sets}>
                            {exercise.sets.map((set, setIndex) => (
                                <Text key={setIndex} style={styles.setInfo}>
                                    {set.weight}lbs × {set.reps} @{set.rpe}
                                </Text>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        padding: 15,
        marginVertical: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    routineName: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    date: {
        color: '#666',
        fontSize: 14,
    },
    exercises: {
        borderTopWidth: 1,
        borderTopColor: '#333',
        paddingTop: 10,
    },
    exercise: {
        marginBottom: 10,
    },
    exerciseName: {
        color: '#B413EC',
        fontSize: 16,
        marginBottom: 5,
    },
    sets: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    setInfo: {
        color: '#B8B8B8',
        fontSize: 14,
        marginRight: 10,
        marginBottom: 5,
    },
});