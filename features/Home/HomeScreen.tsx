import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { MuscleWorkloadCard } from '../components/MuscleWorkloadCard';
import { WorkoutSummary } from '../components/WorkoutSummary';
import { ProgressGraph } from '../components/ProgressGraph';

export const HomeScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDateString, setSelectedDateString] = useState(new Date().toISOString().split('T')[0]);

    const muscleGroups = [
        { muscleGroup: 'Chest', status: 'Optimal', lastWorked: '2 days ago' },
        { muscleGroup: 'Back', status: 'Underworked', lastWorked: '5 days ago' },
        { muscleGroup: 'Legs', status: 'Overworked', lastWorked: 'Today' },
        { muscleGroup: 'Shoulders', status: 'Optimal', lastWorked: '3 days ago' },
        { muscleGroup: 'Arms', status: 'Optimal', lastWorked: '2 days ago' },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Workout Tracker</Text>
            </View>

            {/* Calendar Section */}
            <RNCalendar
                enableSwipeMonths
                current={selectedDateString}
                onDayPress={(day) => {
                    setSelectedDate(new Date(day.timestamp));
                    setSelectedDateString(day.dateString);
                }}
                markedDates={{
                    [selectedDateString]: {
                        selected: true,
                        selectedColor: '#B413EC',
                    },
                    '2025-03-10': { marked: true, dotColor: '#B413EC' },
                    '2025-03-15': { marked: true, dotColor: '#B413EC' },
                }}
                theme={{
                    backgroundColor: '#121212',
                    calendarBackground: '#1E1E1E',
                    textSectionTitleColor: '#B413EC',
                    selectedDayBackgroundColor: '#B413EC',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#B413EC',
                    dayTextColor: '#ffffff',
                    textDisabledColor: '#444444',
                    dotColor: '#B413EC',
                    monthTextColor: '#ffffff',
                    indicatorColor: '#B413EC',
                    arrowColor: '#B413EC',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 14
                }}
                style={{
                    borderRadius: 10,
                    elevation: 4,
                    margin: 10,
                }}
            />

            {/* Quick Actions */}
            <View style={styles.quickActions}>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => {/* Navigate to log workout */}}
                >
                    <Text style={styles.actionButtonText}>Log Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => {/* Navigate to create routine */}}
                >
                    <Text style={styles.actionButtonText}>Create Routine</Text>
                </TouchableOpacity>
            </View>

            {/* Weekly Muscle Group Analysis */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Weekly Analysis</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {muscleGroups.map((item, index) => (
                        <MuscleWorkloadCard
                            key={index}
                            muscleGroup={item.muscleGroup}
                            status={item.status}
                            lastWorked={item.lastWorked}
                        />
                    ))}
                </ScrollView>
            </View>

            {/* Progress Graph */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Progress</Text>
                <ProgressGraph />
            </View>

            {/* Today's or Selected Day's Workout */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                    {selectedDate.toDateString() === new Date().toDateString()
                        ? "Today's Workout"
                        : `Workout on ${selectedDate.toLocaleDateString()}`}
                </Text>
                <WorkoutSummary date={selectedDate} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        padding: 20,
        backgroundColor: '#1E1E1E',
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    quickActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        marginTop: 10,
    },
    actionButton: {
        backgroundColor: '#B413EC',
        padding: 15,
        borderRadius: 10,
        width: '45%',
        shadowColor: '#B413EC',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    actionButtonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    section: {
        padding: 15,
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        textShadowColor: '#B413EC',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
});