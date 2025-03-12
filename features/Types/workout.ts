export interface Exercise {
    id: string;
    name: string;
    targetMuscle: MuscleGroup;
    secondaryMuscles: MuscleGroup[];
}

export interface WorkoutRoutine {
    id: string;
    name: string;
    description?: string;
    exercises: Exercise[];
    type: RoutineType;
    createdAt: Date;
    updatedAt: Date;
}

export interface WorkoutLog {
    id: string;
    routineId: string;
    date: Date;
    exercises: ExerciseLog[];
    comment?: string;
}

export interface ExerciseLog {
    exerciseId: string;
    sets: Set[];
    comment?: string;
}

export interface Set {
    weight: number;
    reps: number;
    rpe?: number; // Rate of Perceived Exertion (1-10)
}

export enum MuscleGroup {
    CHEST = 'Chest',
    BACK = 'Back',
    SHOULDERS = 'Shoulders',
    BICEPS = 'Biceps',
    TRICEPS = 'Triceps',
    LEGS = 'Legs',
    CORE = 'Core'
}

export enum RoutineType {
    PUSH = 'Push',
    PULL = 'Pull',
    LEGS = 'Legs',
    UPPER = 'Upper',
    LOWER = 'Lower',
    FULL_BODY = 'Full Body',
    CUSTOM = 'Custom'
}

export interface MuscleWorkload {
    muscleGroup: MuscleGroup;
    weeklyVolume: number;
    lastWorked: Date;
    isOverworked: boolean;
    needsAttention: boolean;
}