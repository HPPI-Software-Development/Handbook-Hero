// Updated GameifiedTest.jsx

import React, { useState, useEffect } from 'react';
import { gameConfig, sampleTestData } from './GameConfig';
import { styles } from './GameStyles';
import GameProgressTracker from './GameProgressTracker';
import QuestionDisplay, { TestCompletionSummary } from './QuestionDisplay';
import useAdaptiveTest from './AdaptiveTest';
import useGameMessageManager from './GameMessageManager';

const getUniqueSections = (testData) => {
    const sections = new Set();
    testData.forEach(q => sections.add(q.section));
    return Array.from(sections);
};

// Utility: localStorage helpers
//const STORAGE_KEY = 'gameifiedTestProgress';

/*
function loadProgress() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}*/

const SectionTest = ({
    section,
    testData,
    gameConfig,
    messageManager,
    onReturnToSectionSelect,
    onSectionCompleted,
    resumeState,
    onProgressUpdate,
    isReviewMode = false,
    reviewType = null,
    reviewQuestions = [],
    onReviewQuestionCorrect // New prop to handle correct questions in review mode
}) => {
    // Use filtered data based on mode
    const filteredTestData = isReviewMode 
        ? reviewQuestions 
        : testData.filter(q => q.section === section);

    // Store initial count of review questions
    const [initialReviewQuestionsCount, setInitialReviewQuestionsCount] = useState(reviewQuestions.length);
    
    // Restore state if resuming
    const [currentPoints, setCurrentPoints] = useState(resumeState?.currentPoints || 0);
    const [earnedBadges, setEarnedBadges] = useState(resumeState?.earnedBadges || []);
    const [answeredQuestions, setAnsweredQuestions] = useState(resumeState?.answeredQuestions || 0);
    const [correctAnswers, setCorrectAnswers] = useState(resumeState?.correctAnswers || 0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(resumeState?.incorrectAnswers || 0);
    const [pointsAnimation, setPointsAnimation] = useState(false);
    const [currentReviewQuestions, setCurrentReviewQuestions] = useState(reviewQuestions);

    // Save initial review questions count when starting review mode
    useEffect(() => {
        if (isReviewMode && reviewQuestions.length > 0) {
            setInitialReviewQuestionsCount(reviewQuestions.length);
        }
    }, [isReviewMode, reviewType]); // Only update when review mode or type changes, not when questions are removed

    // When a question is answered correctly in review mode, update the list of questions
    const handleReviewQuestionCorrect = (questionId) => {
        if (isReviewMode && onReviewQuestionCorrect) {
            onReviewQuestionCorrect(reviewType, questionId);
            // Also update the local state
            setCurrentReviewQuestions(prev => prev.filter(q => q.id !== questionId));
            
            // Show a message
            messageManager.setCustomMessage(`Question removed from your ${reviewType} questions!`, true);
        }
    };

    // Set appropriate message for review mode
    useEffect(() => {
        if (isReviewMode) {
            if (reviewType === 'incorrect') {
                messageManager.setCustomMessage('Review your previously incorrect answers to improve your score!', true);
            } else if (reviewType === 'skipped') {
                messageManager.setCustomMessage('Answer the questions you previously skipped!', true);
            }
        }
    }, [isReviewMode, reviewType, messageManager]);

    // Update review questions when they change
    useEffect(() => {
        setCurrentReviewQuestions(reviewQuestions);
    }, [reviewQuestions]);

    // Adaptive test state
    const adaptiveTest = useAdaptiveTest({
        testData: filteredTestData,
        onPointsEarned: (points, difficulty, multiplier) => {
            const basePoints = gameConfig.pointValues[difficulty] || gameConfig.pointValues.Medium;
            const streakBonus = points - basePoints;
            setCurrentPoints(prev => prev + points);
            setPointsAnimation(true);
            setTimeout(() => setPointsAnimation(false), 800);
            messageManager.showPointsMessage(points, streakBonus, multiplier);
            setCorrectAnswers(prev => prev + 1);
        },
        onTestCompletion: () => {
            if (isReviewMode) {
                if (reviewType === 'incorrect') {
                    messageManager.showCompletionMessage(currentPoints, earnedBadges, 'Incorrect Questions Review');
                } else if (reviewType === 'skipped') {
                    messageManager.showCompletionMessage(currentPoints, earnedBadges, 'Skipped Questions Review');
                }
            } else {
                messageManager.showCompletionMessage(currentPoints, earnedBadges);
            }
            onSectionCompleted && onSectionCompleted(section, isReviewMode);
        },
        onSkippedQuestionsChange: (skippedQuestions) => {
            if (skippedQuestions.length > 0) {
                messageManager.showSkippedMessage();
            }
        },
        resumeState: resumeState?.adaptiveTestState, // Pass only the adaptive part
        isReviewMode,
        reviewType,
        onCorrectAnswer: handleReviewQuestionCorrect // New callback
    });

    // Save progress on any change
    useEffect(() => {
        // Don't save review mode progress to the main progress
        if (!isReviewMode) {
            onProgressUpdate &&
                onProgressUpdate({
                    section,
                    currentPoints,
                    earnedBadges,
                    answeredQuestions,
                    correctAnswers,
                    incorrectAnswers,
                    adaptiveTestState: {
                        skippedQuestions: adaptiveTest.skippedQuestions,
                        incorrectQuestions: adaptiveTest.incorrectQuestions, // Add incorrect questions tracking
                        performanceByDifficulty: adaptiveTest.performanceByDifficulty,
                        testCompleted: adaptiveTest.testCompleted,
                        shownQuestions: {
                            Easy: Array.from(adaptiveTest.shownQuestions?.Easy || []),
                            Medium: Array.from(adaptiveTest.shownQuestions?.Medium || []),
                            Hard: Array.from(adaptiveTest.shownQuestions?.Hard || [])
                        },
                        availableQuestions: adaptiveTest.availableQuestions,
                        currentDifficulty: adaptiveTest.currentDifficulty,
                        consecutiveCorrect: adaptiveTest.consecutiveCorrect,
                        currentQuestion: adaptiveTest.currentQuestion,
                        viewingSkippedQuestions: adaptiveTest.viewingSkippedQuestions,
                        feedbackedQuestions: adaptiveTest.feedbackedQuestions
                    }
                });
        }
        // eslint-disable-next-line
    }, [
        currentPoints,
        earnedBadges,
        answeredQuestions,
        correctAnswers,
        incorrectAnswers,
        adaptiveTest.skippedQuestions,
        adaptiveTest.incorrectQuestions, // Add to dependency list
        adaptiveTest.performanceByDifficulty,
        adaptiveTest.testCompleted,
        isReviewMode
    ]);

    useEffect(() => {
        const totalAnswered = Object.values(adaptiveTest.performanceByDifficulty).reduce(
            (sum, performance) => sum + performance.attempted,
            0
        );
        if (!adaptiveTest.testCompleted) {
            setAnsweredQuestions(totalAnswered);
        }
    }, [adaptiveTest.performanceByDifficulty, adaptiveTest.testCompleted]);

    useEffect(() => {
        gameConfig.badges.forEach(badge => {
            const alreadyEarned = earnedBadges.some(earned => earned.name === badge.name);
            if (!alreadyEarned && currentPoints >= badge.pointsRequired) {
                setEarnedBadges(prev => [...prev, badge]);
                messageManager.showBadgeMessage(badge);
            }
        });
        // eslint-disable-next-line
    }, [currentPoints]);

    const handleIncorrectAnswer = () => {
        setIncorrectAnswers(prev => prev + 1);
    }

    const handleAnswer = (selectedOption) => {
        const isCorrect = selectedOption === adaptiveTest.currentQuestion?.answer;
        if (!isCorrect) {
            handleIncorrectAnswer();
        }
        adaptiveTest.handleAnswer(selectedOption);
    };

    const renderTestCompletion = () => (
        <TestCompletionSummary
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            currentPoints={currentPoints}
            earnedBadges={earnedBadges}
            skippedQuestions={adaptiveTest.skippedQuestions}
            returnToSkippedQuestion={adaptiveTest.returnToSkippedQuestion}
            performanceByDifficulty={adaptiveTest.performanceByDifficulty}
            onReturnToSectionSelect={onReturnToSectionSelect}
            selectedSection={section}
        />
    );

    // Updated getTotalQuestions to use the initial count for review mode
    const getTotalQuestions = () => {
        if (isReviewMode) {
            return initialReviewQuestionsCount;
        } else {
            return filteredTestData.length;
        }
    };

    const getTitle = () => {
        if (isReviewMode) {
            return reviewType === 'incorrect' ? 'Review Incorrect Questions' : 'Review Skipped Questions';
        }
        return section;
    };

    return (
        <>
            <button
                className="nav-back-button"
                onClick={onReturnToSectionSelect}
            >
                <span className="nav-back-icon">←</span> Back to Topic Selection
            </button>
            
            {isReviewMode && (
                <div style={{ marginBottom: 12 }}>
                    <h2>{getTitle()}</h2>
                </div>
            )}
            
            <GameProgressTracker
                totalQuestions={getTotalQuestions()}
                answeredQuestions={answeredQuestions}
                currentPoints={currentPoints}
                pointsAnimation={pointsAnimation}
                earnedBadges={earnedBadges}
                message={messageManager.message}
                currentDifficulty={adaptiveTest.currentDifficulty}
                consecutiveCorrect={adaptiveTest.consecutiveCorrect}
                skippedQuestions={adaptiveTest.skippedQuestions}
            />
            <QuestionDisplay
                currentQuestion={adaptiveTest.currentQuestion}
                testCompleted={adaptiveTest.testCompleted}
                consecutiveCorrect={adaptiveTest.consecutiveCorrect}
                handleAnswer={handleAnswer}
                handleSkip={adaptiveTest.handleSkip}
                renderTestCompletion={renderTestCompletion}
                handleFeedback={(type) => {
                    adaptiveTest.handleFeedback(type);
        
                    if (isReviewMode && adaptiveTest.currentQuestion) {
                        // If we're in review mode and feedback is provided, also remove from review list
                        messageManager.showFeedbackMessage(true); // Pass true to indicate review mode
                        handleReviewQuestionCorrect(adaptiveTest.currentQuestion.id);
                    } else {
                        messageManager.showFeedbackMessage();
                    }
                }}
            />
        </>
    );
};

const GameifiedTest = ({ testData = sampleTestData }) => {
    // Progress state
    const [currentPoints, setCurrentPoints] = useState(0);
    const [earnedBadges, setEarnedBadges] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [pointsAnimation, setPointsAnimation] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    
    // Review mode state
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [reviewType, setReviewType] = useState(null);
    const [reviewQuestions, setReviewQuestions] = useState([]);

    // Track completed sections and progress
    const [completedSections, setCompletedSections] = useState([]);
    const [sectionProgress, setSectionProgress] = useState({});
    const [resumeSection, setResumeSection] = useState(null);

    // Game message manager
    const messageManager = useGameMessageManager();

    // Get unique sections
    const sections = getUniqueSections(testData);

    // Load progress from localStorage on mount
    useEffect(() => {
        /*
        const progress = loadProgress();
        setCompletedSections(progress.completedSections || []);
        setSectionProgress(progress.sectionProgress || {});
        setResumeSection(progress.resumeSection || null);*/
        setCompletedSections([]);
        setSectionProgress({});
        setResumeSection(null);
    }, []);

    // Save progress to localStorage on change
    /*
    useEffect(() => {
        saveProgress({
            completedSections,
            sectionProgress,
            resumeSection
        });
    }, [completedSections, sectionProgress, resumeSection]);*/

    // Function to handle when a question is answered correctly in review mode
    const handleReviewQuestionCorrect = (type, questionId) => {
        if (type === 'skipped') {
            // Remove from all sections' skipped questions
            const updatedProgress = { ...sectionProgress };
            
            // Loop through each section and update its skipped questions
            Object.keys(updatedProgress).forEach(section => {
                const sectionData = updatedProgress[section];
                if (sectionData?.adaptiveTestState?.skippedQuestions?.length > 0) {
                    sectionData.adaptiveTestState.skippedQuestions = 
                        sectionData.adaptiveTestState.skippedQuestions.filter(
                            item => !(item.question?.id === questionId || item.id === questionId)
                        );
                }
            });
            
            // Update state
            setSectionProgress(updatedProgress);
            
            // Also update the current review questions
            setReviewQuestions(prev => prev.filter(q => q.id !== questionId));
            
        } else if (type === 'incorrect') {
            // Remove from all sections' incorrect questions
            const updatedProgress = { ...sectionProgress };
            
            // Loop through each section and update its incorrect questions
            Object.keys(updatedProgress).forEach(section => {
                const sectionData = updatedProgress[section];
                if (sectionData?.adaptiveTestState?.incorrectQuestions?.length > 0) {
                    sectionData.adaptiveTestState.incorrectQuestions = 
                        sectionData.adaptiveTestState.incorrectQuestions.filter(
                            item => !(item.question?.id === questionId || item.id === questionId)
                        );
                }
            });
            
            // Update state
            setSectionProgress(updatedProgress);
            
            // Also update the current review questions
            setReviewQuestions(prev => prev.filter(q => q.id !== questionId));
        }
    };

    /*
    function clearProgress() {
        localStorage.removeItem(STORAGE_KEY);
        setCompletedSections([]);
        setSectionProgress({});
        setResumeSection(null);
        setSelectedSection(null);
        messageManager.setCustomMessage('Progress cleared! You can start over.', true);
    }*/

    // In GameifiedTest.jsx, add this function where the commented localStorage functions were

    function clearProgress() {
        setCompletedSections([]);
        setSectionProgress({});
        setResumeSection(null);
        setSelectedSection(null);
        messageManager.setCustomMessage('Progress cleared! You can start over.', true);
    }
    
    // Helper function to handle incorrect review button click
    function handleReviewIncorrect() {
        // Collect all incorrect questions from all sections
        const allIncorrectQuestions = Object.values(sectionProgress)
            .flatMap(section => section.adaptiveTestState?.incorrectQuestions || [])
            .map(item => item.question || item);
        
        if (allIncorrectQuestions.length === 0) {
            messageManager.setCustomMessage("No incorrect answers found to review", true);
            return;
        }
        
        setReviewQuestions(allIncorrectQuestions);
        setReviewType('incorrect');
        setIsReviewMode(true);
        setSelectedSection('Review - Incorrect');
    }
    
    // Helper function to handle skipped review button click
    function handleReviewSkipped() {
        // Collect all skipped questions from all sections
        const allSkippedQuestions = Object.values(sectionProgress)
            .flatMap(section => section.adaptiveTestState?.skippedQuestions || [])
            .map(item => item.question || item);
        
        if (allSkippedQuestions.length === 0) {
            messageManager.setCustomMessage("No skipped questions found to review", true);
            return;
        }
        
        setReviewQuestions(allSkippedQuestions);
        setReviewType('skipped');
        setIsReviewMode(true);
        setSelectedSection('Review - Skipped');
    }

    // Section selection UI
    if (!selectedSection) {
        // Calculate statistics for review buttons
        const incorrectCount = Object.values(sectionProgress)
            .reduce((total, section) => total + (section.adaptiveTestState?.incorrectQuestions?.length || 0), 0);

        const skippedCount = Object.values(sectionProgress)
            .reduce((total, section) => total + (section.adaptiveTestState?.skippedQuestions?.length || 0), 0);

        return (
            <div>
                <style>{styles}</style>
                <div className="gameified-test">
                    <div className="game-header">
                        <div className="game-logo">Handbook Hero: A Machinery's Handbook Quiz Game</div>
                    </div>

                    <h2>Select a Topic to Study</h2>

                    <div className="section-grid">
                        {sections.map(section => {
                            const isCompleted = completedSections.includes(section);
                            const canResume = sectionProgress[section] && !isCompleted;

                            // Calculate progress percentage if available
                            let progressPercentage = 0;
                            if (sectionProgress[section]) {
                                const attempted = sectionProgress[section].answeredQuestions || 0;
                                const total = testData.filter(q => q.section === section).length;
                                progressPercentage = Math.min(Math.round((attempted / total) * 100), 100);
                            }

                            return (
                                <div
                                    key={section}
                                    className="section-card"
                                    onClick={() => {
                                        setSelectedSection(section);
                                        setResumeSection(canResume ? section : null);
                                        setIsReviewMode(false);
                                        setReviewType(null);
                                        messageManager.setCustomMessage('Complete questions to earn points and badges!', false);
                                    }}
                                    style={isCompleted ? { borderLeft: '4px solid #4caf50', opacity: 0.8 } : {}}
                                >
                                    <div className="section-title">{section}</div>
                                    <div className="section-info">
                                        {isCompleted ?
                                            "Completed section" :
                                            canResume ? "Continue where you left off" : "Start this section"}
                                    </div>

                                    <div className="section-status">
                                        {canResume && (
                                            <div className="section-progress">
                                                <div
                                                    className="progress-fill"
                                                    style={{ width: `${progressPercentage}%` }}
                                                />
                                            </div>
                                        )}

                                        {isCompleted && (
                                            <span className="section-completed-label">Completed</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Review buttons section */}
                    <div style={{ marginTop: 32 }}>
                        <h3>Review Your Progress</h3>
                        <div className="section-grid">
                            <div
                                className="section-card review-card"
                                onClick={handleReviewIncorrect}
                                style={incorrectCount === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                            >
                                <div className="section-title">
                                    Review Incorrect Questions
                                </div>
                                <div className="section-info">
                                    Practice questions you previously answered incorrectly
                                </div>
                                <div className="section-status">
                                    <span style={{ color: '#f44336', fontWeight: 'bold' }}>
                                        {incorrectCount} questions
                                    </span>
                                </div>
                            </div>

                            <div
                                className="section-card review-card"
                                onClick={handleReviewSkipped}
                                style={skippedCount === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                            >
                                <div className="section-title">
                                    Review Skipped Questions
                                </div>
                                <div className="section-info">
                                    Return to questions you skipped earlier
                                </div>
                                <div className="section-status">
                                    <span style={{ color: '#ff9800', fontWeight: 'bold' }}>
                                        {skippedCount} questions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className="option-btn center-text"
                        style={{ marginTop: 32, backgroundColor: '#f8d7da', color: '#721c24', textAlign: 'center' }}
                        onClick={clearProgress}
                    >
                        Clear Progress & Restart All Tests
                    </button>
                </div>
            </div>
        );
    }

    // Section completed handler
    const handleSectionCompleted = (section, wasReviewMode = false) => {
        if (!wasReviewMode) {
            setCompletedSections(prev => prev.includes(section) ? prev : [...prev, section]);
            setResumeSection(null);
        }
    };

    // Section progress update handler
    const handleSectionProgressUpdate = (progress) => {
        if (!isReviewMode) {
            setSectionProgress(prev => ({
                ...prev,
                [progress.section]: progress
            }));
            setResumeSection(progress.section);
        }
    };

    // Return to section selection
    const handleReturnToSectionSelect = () => {
        setSelectedSection(null);
        setResumeSection(null);
        setIsReviewMode(false);
        setReviewType(null);
        setReviewQuestions([]);
        messageManager.clearMessage && messageManager.clearMessage();
    };

    // Find resume state for this section
    const resumeState = (!isReviewMode && resumeSection && sectionProgress[resumeSection]) 
        ? sectionProgress[resumeSection] 
        : null;

    return (
        <div>
            <style>{styles}</style>
            <div className="gameified-test">
                <SectionTest
                    key={`${selectedSection}-${isReviewMode ? reviewType : ''}`}
                    section={selectedSection}
                    testData={testData}
                    gameConfig={gameConfig}
                    messageManager={messageManager}
                    onReturnToSectionSelect={handleReturnToSectionSelect}
                    onSectionCompleted={handleSectionCompleted}
                    resumeState={!isReviewMode && resumeSection === selectedSection ? resumeState : undefined}
                    onProgressUpdate={handleSectionProgressUpdate}
                    isReviewMode={isReviewMode}
                    reviewType={reviewType}
                    reviewQuestions={reviewQuestions}
                    onReviewQuestionCorrect={handleReviewQuestionCorrect}
                />
            </div>
        </div>
    );
};

export default GameifiedTest;