// Modified AdaptiveTest.jsx file

import React, { useState, useEffect } from 'react';
import {
    gameConfig,
    organizeTestData,
    getInitialQuestions,
    getAdditionalQuestions
} from './GameConfig';

/**
 * This component manages the adaptive testing logic.
 * It works with both grouped and ungrouped test data.
 */
const useAdaptiveTest = ({
    testData,
    onQuestionChange,
    onDifficultyChange,
    onTestCompletion,
    onPerformanceUpdate,
    onPointsEarned,
    onSkippedQuestionsChange,
    onIncorrectQuestionsChange, // New callback to update parent incorrect questions
    onReviewQuestionRemoval, // New callback for review mode
    resumeState,
    isReviewMode = false,
    reviewType = null,
    onCorrectAnswer // Added this parameter
}) => {
    // Use resumeState if provided, otherwise use defaults
    const [currentDifficulty, setCurrentDifficulty] = useState(resumeState?.currentDifficulty || 'Easy');
    const [allAvailableQuestions, setAllAvailableQuestions] = useState(null);
    const [availableQuestions, setAvailableQuestions] = useState(resumeState?.availableQuestions || {
        Easy: [],
        Medium: [],
        Hard: []
    });
    const [currentQuestion, setCurrentQuestion] = useState(resumeState?.currentQuestion || null);
    const [skippedQuestions, setSkippedQuestions] = useState(resumeState?.skippedQuestions || []);
    // Add state for tracking incorrect questions
    const [incorrectQuestions, setIncorrectQuestions] = useState(resumeState?.incorrectQuestions || []);
    const [viewingSkippedQuestions, setViewingSkippedQuestions] = useState(resumeState?.viewingSkippedQuestions || false);
    const [testCompleted, setTestCompleted] = useState(resumeState?.testCompleted || false);
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(resumeState?.consecutiveCorrect || 0);
    const [questionsLoaded, setQuestionsLoaded] = useState(false);
    const [feedbackedQuestions, setFeedbackedQuestions] = useState(resumeState?.feedbackedQuestions || []);
    const [performanceByDifficulty, setPerformanceByDifficulty] = useState(resumeState?.performanceByDifficulty || {
        Easy: { attempted: 0, correct: 0 },
        Medium: { attempted: 0, correct: 0 },
        Hard: { attempted: 0, correct: 0 }
    });
    const [shownQuestions, setShownQuestions] = useState(() => {
        if (resumeState?.shownQuestions) {
            // If resuming, convert arrays to Sets if needed
            return {
                Easy: new Set(resumeState.shownQuestions.Easy || []),
                Medium: new Set(resumeState.shownQuestions.Medium || []),
                Hard: new Set(resumeState.shownQuestions.Hard || [])
            };
        }
        // Default for new test
        return {
            Easy: new Set(),
            Medium: new Set(),
            Hard: new Set()
        };
    });

    // Organize all questions by difficulty when test data changes
    useEffect(() => {
        if (testData && testData.length > 0 && !resumeState) {
            // Handle review mode
            if (isReviewMode) {
                const organized = organizeTestData(testData);
                setAllAvailableQuestions(organized);
                
                // Put review questions directly into available questions
                const availableByDifficulty = {
                    Easy: [],
                    Medium: [],
                    Hard: []
                };
                
                testData.forEach(q => {
                    const diff = q.difficulty || 'Medium';
                    availableByDifficulty[diff].push(q);
                });
                
                setAvailableQuestions(availableByDifficulty);
                setQuestionsLoaded(true);
            } else {
                // Normal mode
                const organized = organizeTestData(testData);
                setAllAvailableQuestions(organized);
                const initialQuestions = getInitialQuestions(
                    organized,
                    gameConfig.adaptiveTesting.initialQuestionsPerDifficulty
                );
                setAvailableQuestions(initialQuestions);
                setQuestionsLoaded(true);
            }
        } else if (resumeState) {
            const organized = organizeTestData(testData);
            setAllAvailableQuestions(organized);

            // If availableQuestions is missing or empty, re-initialize
            const hasAvailableQuestions =
                resumeState.availableQuestions &&
                Object.values(resumeState.availableQuestions).some(arr => arr && arr.length > 0);

            if (hasAvailableQuestions) {
                setAvailableQuestions(resumeState.availableQuestions);
            } else {
                // Re-initialize if missing
                const initialQuestions = getInitialQuestions(
                    organized,
                    gameConfig.adaptiveTesting.initialQuestionsPerDifficulty
                );
                setAvailableQuestions(initialQuestions);
            }
            setQuestionsLoaded(true);
        }
    }, [testData, resumeState, isReviewMode, reviewType]);

    useEffect(() => {
        // If resuming and no currentQuestion, select the next question
        if (questionsLoaded && currentQuestion === null) {
            selectNextQuestion(availableQuestions);
        }
    }, [questionsLoaded, availableQuestions, resumeState, currentQuestion]);

    // Report current question to parent component
    useEffect(() => {
        if (onQuestionChange && currentQuestion) {
            onQuestionChange(currentQuestion);
        }
    }, [currentQuestion, onQuestionChange]);

    // Report current difficulty to parent component
    useEffect(() => {
        if (onDifficultyChange) {
            onDifficultyChange(currentDifficulty);
        }
    }, [currentDifficulty, onDifficultyChange]);

    // Report test completion to parent component
    useEffect(() => {
        if (testCompleted && onTestCompletion) {
            onTestCompletion();
        }
    }, [testCompleted, onTestCompletion]);

    // Report performance updates to parent component
    useEffect(() => {
        if (onPerformanceUpdate) {
            onPerformanceUpdate(performanceByDifficulty);
        }
    }, [performanceByDifficulty, onPerformanceUpdate]);

    // Report skipped questions to parent component
    useEffect(() => {
        if (onSkippedQuestionsChange) {
            onSkippedQuestionsChange(skippedQuestions);
        }
    }, [skippedQuestions, onSkippedQuestionsChange]);

    // Report incorrect questions to parent component
    useEffect(() => {
        if (onIncorrectQuestionsChange) {
            onIncorrectQuestionsChange(incorrectQuestions);
        }
    }, [incorrectQuestions, onIncorrectQuestionsChange]);

    // Load more questions if running low on the current difficulty
    useEffect(() => {
        if (!isReviewMode && allAvailableQuestions && availableQuestions[currentDifficulty]?.length < 3) {
            // Load more questions for this difficulty level
            const additionalQuestions = getAdditionalQuestions(
                allAvailableQuestions,
                availableQuestions,
                currentDifficulty,
                5 // Get 5 more questions
            );

            if (additionalQuestions.length > 0) {
                setAvailableQuestions(prev => ({
                    ...prev,
                    [currentDifficulty]: [...prev[currentDifficulty], ...additionalQuestions]
                }));
            }
        }
    }, [allAvailableQuestions, availableQuestions, currentDifficulty, currentQuestion, isReviewMode]);

    useEffect(() => {
        if (testCompleted && onQuestionChange) {
            onQuestionChange(null); // Signal end of test
        }
    }, [testCompleted, onQuestionChange]);

    // Get the next question based on current difficulty
    const selectNextQuestion = (questions = availableQuestions) => {
        // If we're viewing skipped questions, get the next one
        if (viewingSkippedQuestions) {
            if (skippedQuestions.length === 0) {
                setCurrentQuestion(null);
                setViewingSkippedQuestions(false);
                setTestCompleted(true);
                return;
            }
            const nextSkipped = skippedQuestions[0];
            setCurrentQuestion(nextSkipped.question);
            // Do NOT remove from skippedQuestions here; remove only after answer/skip/feedback
            return;
        }

        // Filter out skipped and already shown questions for all difficulties
        const skippedIds = new Set(skippedQuestions.map(item => item.question?.id || item.id));
        const availableByDifficulty = {};
        let totalAvailable = 0;
        for (const diff of ['Easy', 'Medium', 'Hard']) {
            const shownIds = shownQuestions[diff];
            availableByDifficulty[diff] = (questions[diff] || []).filter(
                q => !skippedIds.has(q.id) && !shownIds.has(q.id)
            );
            totalAvailable += availableByDifficulty[diff].length;
        }

        // If no available questions left in any pool, end the test or show skipped
        if (totalAvailable === 0) {
            setCurrentQuestion(null);
            setTestCompleted(true);
            return;
        }

        // Try to get a question from the current difficulty
        if (availableByDifficulty[currentDifficulty]?.length > 0) {
            const available = availableByDifficulty[currentDifficulty];
            const randomIndex = Math.floor(Math.random() * available.length);
            const nextQuestion = available[randomIndex];

            setAvailableQuestions(prev => ({
                ...prev,
                [currentDifficulty]: prev[currentDifficulty].filter(q => q.id !== nextQuestion.id)
            }));

            setShownQuestions(prev => ({
                ...prev,
                [currentDifficulty]: new Set([...prev[currentDifficulty], nextQuestion.id])
            }));

            setCurrentQuestion(nextQuestion);
            return;
        }

        // Try other difficulties
        const difficulties = ['Easy', 'Medium', 'Hard'];
        for (const diff of difficulties) {
            if (diff !== currentDifficulty && availableByDifficulty[diff]?.length > 0) {
                setCurrentDifficulty(diff);
                const available = availableByDifficulty[diff];
                const randomIndex = Math.floor(Math.random() * available.length);
                const nextQuestion = available[randomIndex];

                setAvailableQuestions(prev => ({
                    ...prev,
                    [diff]: prev[diff].filter(q => q.id !== nextQuestion.id)
                }));

                setShownQuestions(prev => ({
                    ...prev,
                    [diff]: new Set([...prev[diff], nextQuestion.id])
                }));

                setCurrentQuestion(nextQuestion);
                return;
            }
        }

        // If we get here, there are no available questions left
        setCurrentQuestion(null);
        setTestCompleted(true);
    };

    // Handle answer submission
    const handleAnswer = (selectedOption) => {
        if (!currentQuestion) return;

        const isCorrect = selectedOption === currentQuestion.answer;

        // Update performance tracking for adaptive testing
        setPerformanceByDifficulty(prev => ({
            ...prev,
            [currentQuestion.difficulty]: {
                attempted: prev[currentQuestion.difficulty].attempted + 1,
                correct: prev[currentQuestion.difficulty].correct + (isCorrect ? 1 : 0)
            }
        }));

        // For incorrect answers, add to the incorrectQuestions array if not in review mode
        if (!isCorrect && !isReviewMode) {
            // Only add to incorrect questions if not already there
            const alreadyIncorrect = incorrectQuestions.some(item => 
                item.question && item.question.id === currentQuestion.id
            );
        
            if (!alreadyIncorrect) {
                setIncorrectQuestions(prev => [
                    ...prev, 
                    { 
                        question: currentQuestion,
                        selectedAnswer: selectedOption
                    }
                ]);
            }
        } else if (isCorrect && isReviewMode) {
            // If in review mode and answer is correct, notify parent to remove from global list
            if (onCorrectAnswer) {
                onCorrectAnswer(currentQuestion.id);
            }
        }

        // Update streak counter
        if (isCorrect) {
            setConsecutiveCorrect(prev => prev + 1);

            // Calculate points and multiplier
            let pointsEarned = gameConfig.pointValues[currentQuestion.difficulty] || gameConfig.pointValues.Medium;
            let multiplier = 1;

            // Apply streak multiplier if applicable
            Object.entries(gameConfig.streakMultipliers).forEach(([streak, streakMultiplier]) => {
                if ((consecutiveCorrect + 1) >= parseInt(streak) && streakMultiplier > multiplier) {
                    multiplier = streakMultiplier;
                }
            });

            // Calculate final points with multiplier
            const finalPoints = Math.round(pointsEarned * multiplier);

            // Report points earned to parent component
            if (onPointsEarned) {
                onPointsEarned(finalPoints, currentQuestion.difficulty, multiplier);
            }
        } else {
            // Reset streak on incorrect answer
            setConsecutiveCorrect(0);
        }

        // If reviewing skipped questions, remove from skipped array
        if (viewingSkippedQuestions && skippedQuestions.length > 0 && skippedQuestions[0].question.id === currentQuestion.id) {
            setSkippedQuestions(prev => prev.slice(1));
        }

        // Move to next question
        selectNextQuestion();
    };

    // Handle skipping a question
    const handleSkip = () => {
        if (!currentQuestion) return;

        // If viewing skipped questions, remove the current skipped question
        if (viewingSkippedQuestions && skippedQuestions.length > 0 && skippedQuestions[0].question.id === currentQuestion.id) {
            setSkippedQuestions(prev => prev.slice(1));
        } else {
            // Only add to skipped questions if not already there
            const alreadySkipped = skippedQuestions.some(item =>
                item.question && item.question.id === currentQuestion.id
            );
            if (!alreadySkipped) {
                setSkippedQuestions(prev => [...prev, { question: currentQuestion }]);
            }
        }

        setShownQuestions(prev => ({
            ...prev,
            [currentQuestion.difficulty]: new Set([...prev[currentQuestion.difficulty], currentQuestion.id])
        }));

        selectNextQuestion();
    };

    // Handle feedback
    const handleFeedback = (feedbackType) => {
        if (!currentQuestion) return;

        setFeedbackedQuestions(prev => [
            ...prev,
            { question: currentQuestion, feedback: feedbackType }
        ]);

        setPerformanceByDifficulty(prev => ({
            ...prev,
            [currentQuestion.difficulty]: {
                ...prev[currentQuestion.difficulty],
                attempted: prev[currentQuestion.difficulty].attempted + 1
            }
        }));

        // If in review mode, notify parent component to remove question from global list
        if (isReviewMode && onCorrectAnswer) {
            onCorrectAnswer(currentQuestion.id);
        }

        // If viewing skipped questions, remove the current skipped question
        if (viewingSkippedQuestions && skippedQuestions.length > 0 && skippedQuestions[0].question.id === currentQuestion.id) {
            setSkippedQuestions(prev => prev.slice(1));
        }

        selectNextQuestion();
    };

    // Return to a skipped question
    const returnToSkippedQuestion = (skippedItem) => {
        // ADDED: Mark this question as being shown again
        if (skippedItem.question && skippedItem.question.id && skippedItem.question.difficulty) {
            setShownQuestions(prev => ({
                ...prev,
                [skippedItem.question.difficulty]: new Set([
                    ...prev[skippedItem.question.difficulty],
                    skippedItem.question.id
                ])
            }));
        }

        setCurrentQuestion(skippedItem.question);
        setViewingSkippedQuestions(false);
    };
 
    return {
        currentQuestion,
        currentDifficulty,
        testCompleted,
        skippedQuestions,
        incorrectQuestions,
        consecutiveCorrect,
        performanceByDifficulty,
        handleAnswer,
        handleSkip,
        handleFeedback,
        returnToSkippedQuestion,
        shownQuestions
    };
};

export default useAdaptiveTest;