import React, { useState, useRef, useEffect } from 'react';
import { gameConfig } from './GameConfig';

/**
 * Utility to manage game messages and notifications
 */
const useGameMessageManager = () => {
    const [message, setMessage] = useState({
        text: 'Complete questions to earn points and badges!',
        highlight: false
    });

    // Create a ref to store the timeout ID
    const timeoutRef = useRef(null);

    // Ref to track the last skipped questions count
    const lastSkippedCountRef = useRef(0);

    const clearMessage = () => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setMessage({ text: '', highlight: false });
    };

    /**
     * Show a message with point information
     */
    const showPointsMessage = (points, streakBonus, multiplier) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        // Get random encouraging message
        const randomIndex = Math.floor(Math.random() * gameConfig.encouragingMessages.length);
        const randomMessage = gameConfig.encouragingMessages[randomIndex];

        setMessage({
            text: (
                <>
                    <p>{randomMessage}</p>
                    <p>+{points} points!</p>
                    {streakBonus > 0 && (
                        <p className="streak-bonus">
                            {multiplier}x multiplier! (+{streakBonus} bonus points)
                        </p>
                    )}
                </>
            ),
            highlight: true
        });

        // Reset highlight after animation
        timeoutRef.current = setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
            timeoutRef.current = null;
        }, 1500);
    };

    /**
     * Show a badge achievement message
     */
    const showBadgeMessage = (badge) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setMessage({
            text: (
                <>
                    <p><strong>Badge Unlocked: {badge.name} {badge.icon}</strong></p>
                    <p>{badge.message}</p>
                </>
            ),
            highlight: true
        });

        // Reset highlight after animation
        timeoutRef.current = setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
            timeoutRef.current = null;
        }, 1500);
    };

    /**
     * Show a message when an answer is incorrect
     */
    const showIncorrectAnswerMessage = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        // Get random incorrect answer message
        const randomIndex = Math.floor(Math.random() * gameConfig.incorrectAnswerMessages.length);
        const randomMessage = gameConfig.incorrectAnswerMessages[randomIndex];

        setMessage({
            text: <p>{randomMessage}</p>,
            highlight: 'incorrect' // Use a string to distinguish highlight type
        });

        timeoutRef.current = setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
            timeoutRef.current = null;
        }, 1500);
    };


    /**
     * Show a difficulty change message
     */
    const showDifficultyChangeMessage = (newDifficulty, isAdvancing) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setMessage({
            text: (
                <p>
                    {isAdvancing
                        ? `Great work! You're now answering ${newDifficulty} difficulty questions for more points!`
                        : `You're now answering ${newDifficulty} difficulty questions to build your skills.`}
                </p>
            ),
            highlight: true
        });

        // Reset highlight after animation
        timeoutRef.current = setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
            timeoutRef.current = null;
        }, 1500);
    };

    /**
     * Show a message when a question is skipped
     * @param {Array} skippedQuestions - The current array of skipped questions
     */
    const showSkippedMessage = (skippedQuestions = []) => {
        // Only show the message if there's a new skipped question
        if (skippedQuestions.length > lastSkippedCountRef.current) {
            // Update the last skipped count reference
            lastSkippedCountRef.current = skippedQuestions.length;

            // Clear any existing timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }

            setMessage({
                text: <p>Question skipped. You can come back to it later.</p>,
                highlight: true
            });

            // Reset highlight after animation
            timeoutRef.current = setTimeout(() => {
                setMessage(prev => ({ ...prev, highlight: false }));
                timeoutRef.current = null;
            }, 1000);
        }
    };

    /**
     * Show a message when feedback is submitted
     */
    const showFeedbackMessage = (inReviewMode = false) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setMessage({
            text: inReviewMode ?
                <p>Thank you for your feedback! Question removed from your review list.</p> :
                <p>Thank you for your feedback!</p>,
            highlight: true
        });

        // Reset highlight after animation
        timeoutRef.current = setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
            timeoutRef.current = null;
        }, 1000);
    };

    /**
     * Show a message for early test termination
     */
    const showEarlyTerminationMessage = (isHighPerformer, bonusPoints = 0) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setMessage({
            text: isHighPerformer ? (
                <>
                    <h3>Excellent Work! 🎉</h3>
                    <p>You've demonstrated mastery of this material!</p>
                    <p>Bonus +{bonusPoints} points awarded!</p>
                </>
            ) : (
                <>
                    <h3>Test Completed</h3>
                    <p>You've completed enough questions to assess your knowledge.</p>
                    <p>Review the material and try again to improve your score!</p>
                </>
            ),
            highlight: true
        });

        // Reset highlight after animation
        timeoutRef.current = setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
            timeoutRef.current = null;
        }, 1500);
    };

    /**
     * Show a message for test completion
     */
    const showCompletionMessage = (currentPoints, earnedBadges, reviewTitle = null) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (reviewTitle) {
            setMessage({
                text: (
                    <>
                        <h3>{reviewTitle} Complete! 🎉</h3>
                        <p>You earned a total of {currentPoints} points and unlocked {earnedBadges.length} badges!</p>
                        <p>Great job on completing the review.</p>
                    </>
                ),
                highlight: true
            });
        } else {
            setMessage({
                text: (
                    <>
                        <h3>Test Complete! 🎉</h3>
                        <p>You earned a total of {currentPoints} points and unlocked {earnedBadges.length} badges!</p>
                        <p>Great job on completing the test.</p>
                    </>
                ),
                highlight: true
            });
        }

        // No timeout for completion message - it should stay visible
    };

    /**
     * Show a message for returning to skipped questions
     */
    const showReturnToSkippedMessage = () => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setMessage({
            text: <p>Let's go back to the questions you skipped.</p>,
            highlight: true
        });

        // Reset highlight after animation
        timeoutRef.current = setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
            timeoutRef.current = null;
        }, 1000);
    };

    /**
     * Set a custom message
     */
    const setCustomMessage = (text, highlight = true) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setMessage({
            text,
            highlight
        });

        // Reset highlight after animation if needed
        if (highlight) {
            timeoutRef.current = setTimeout(() => {
                setMessage(prev => ({ ...prev, highlight: false }));
                timeoutRef.current = null;
            }, 1500);
        }
    };

    /**
     * Show a message when starting a review session
     */
    const showReviewSessionMessage = (reviewType) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setMessage({
            text: (
                <>
                    <h3>{reviewType === 'incorrect' ? 'Review Incorrect Questions' : 'Review Skipped Questions'}</h3>
                    <p>{reviewType === 'incorrect'
                        ? 'Practice the questions you answered incorrectly to improve your skills!'
                        : 'Answer the questions you previously skipped!'}
                    </p>
                </>
            ),
            highlight: true
        });

        // Reset highlight after animation
        timeoutRef.current = setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
            timeoutRef.current = null;
        }, 1500);
    };

    /**
     * Manually update the skipped questions count reference
     * Use this when skipped questions are answered in review mode
     * @param {number} count - The new count of skipped questions
     */
    const updateSkippedQuestionCount = (count) => {
        lastSkippedCountRef.current = count;
    };

    // Reset skipped count when component mounts/remounts
    useEffect(() => {
        lastSkippedCountRef.current = 0;
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return {
        message,
        showPointsMessage,
        showBadgeMessage,
        showIncorrectAnswerMessage,
        showDifficultyChangeMessage,
        showSkippedMessage,
        showEarlyTerminationMessage,
        showCompletionMessage,
        showReturnToSkippedMessage,
        showFeedbackMessage,
        showReviewSessionMessage,
        setCustomMessage,
        clearMessage,
        updateSkippedQuestionCount
    };
};

export default useGameMessageManager;