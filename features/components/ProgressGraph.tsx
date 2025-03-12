import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface ProgressGraphProps {
    exercise?: string;
    timeRange?: 'week' | 'month' | 'year';
}

export const ProgressGraph = ({
                                  exercise = "Bench Press",
                                  timeRange = 'month'
                              }: ProgressGraphProps) => {
    // Mock data - this would normally come from your workout logs
    const data = {
        labels: ["1", "5", "10", "15", "20", "25", "30"],
        datasets: [
            {
                data: [185, 185, 190, 190, 195, 195, 200],
                color: (opacity = 1) => `rgba(180, 19, 236, ${opacity})`,
                strokeWidth: 2
            }
        ]
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{exercise} Progress</Text>
                <Text style={styles.subtitle}>Last {timeRange}</Text>
            </View>

            <LineChart
                data={data}
                width={Dimensions.get('window').width - 40}
                height={220}
                chartConfig={{
                    backgroundColor: '#1E1E1E',
                    backgroundGradientFrom: '#1E1E1E',
                    backgroundGradientTo: '#1E1E1E',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#B413EC'
                    }
                }}
                bezier
                style={styles.chart}
            />

            <View style={styles.stats}>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>Max Weight</Text>
                    <Text style={styles.statValue}>200 lbs</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>Progress</Text>
                    <Text style={[styles.statValue, styles.positive]}>+15 lbs</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
    },
    header: {
        marginBottom: 15,
    },
    title: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#666',
        fontSize: 14,
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        color: '#666',
        fontSize: 14,
        marginBottom: 5,
    },
    statValue: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    positive: {
        color: '#4CAF50',
    },
});