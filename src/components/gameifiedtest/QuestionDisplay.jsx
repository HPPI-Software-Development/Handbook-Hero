import React, { useState, useEffect } from 'react';
import { useMemo } from 'react';
import { getQuoteForSection } from './QuoteDatabase';


function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const QuestionDisplay = ({
    currentQuestion,
    testCompleted,
    consecutiveCorrect,
    handleAnswer,
    handleSkip,
    renderTestCompletion,
    handleFeedback
}) => {
    const [feedbackSent, setFeedbackSent] = useState(false);

    // Shuffle options only when the question changes
    const shuffledOptions = useMemo(() => {
        return currentQuestion && currentQuestion.options
            ? shuffleArray(currentQuestion.options)
            : [];
    }, [currentQuestion]);

    // If test is completed, render the summary
    if (testCompleted) {
        return renderTestCompletion();
    }

    // If no current question, show loading state
    if (!currentQuestion) {
        return (
            <div className="question-container">
                <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
                    <div className="loading-spinner"></div>
                    <p>Loading next question...</p>
                </div>
            </div>
        );
    }

    // Feedback handler with confirmation
    const onFeedback = (type) => {
        if (handleFeedback) {
            handleFeedback(type);
            setFeedbackSent(true);
            setTimeout(() => setFeedbackSent(false), 1200); // Reset for next question
        }
    };

    return (
        <div className="question-container">
            <div className="question-section">
                <span>{currentQuestion.section}</span>
                <span className={`difficulty-indicator difficulty-${currentQuestion.difficulty.toLowerCase()}`}>
                    {currentQuestion.difficulty}
                </span>
            </div>

            <h2>{currentQuestion.question}</h2>

            <div className="options">
                {shuffledOptions.map((option, index) => (
                    <button
                        key={currentQuestion.id + '_' + index}
                        className="option-btn"
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className="question-feedback-row">
                <button className="feedback-btn" onClick={() => onFeedback("Not enough information provided")}>
                    Not enough information provided
                </button>
                <button className="skip-btn feedback-btn" onClick={handleSkip} style={{ marginLeft: 'auto' }}>
                    Skip for now
                </button>
            </div>
        </div>
    );
};

// Component to display test completion summary
export const TestCompletionSummary = ({
    correctAnswers,
    incorrectAnswers,
    currentPoints,
    earnedBadges,
    skippedQuestions,
    incorrectQuestions,
    returnToSkippedQuestion,
    performanceByDifficulty,
    onReturnToSectionSelect,
    selectedSection
}) => {
    // Get a quote for this section when the component mounts
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        // Get a quote related to the current section
        const sectionQuote = getQuoteForSection(selectedSection);
        setQuote(sectionQuote);
    }, [selectedSection]);

    return (
        <div className="question-container">
            <div className="question-completed">
                <span style={{ marginRight: '10px' }}>✅</span>
                Section Completed!
            </div>

            <div className="test-stats">
                <div className="stat-item">
                    Correct <span className="stat-value">{correctAnswers}</span>
                </div>
                <div className="stat-item">
                    Incorrect <span className="stat-value">{incorrectAnswers}</span>
                </div>
                <div className="stat-item">
                    Points <span className="stat-value">{currentPoints}</span>
                </div>
                <div className="stat-item">
                    Badges <span className="stat-value">{earnedBadges.length}</span>
                </div>
            </div>

            {/* Display the quote */}
            {quote && (
                <div className="quote-container">
                    <blockquote className="quote-text">
                        {quote.quote}
                    </blockquote>
                    <div className="quote-author">— {quote.author}</div>
                </div>
            )}

            {skippedQuestions && skippedQuestions.length > 0 && (
                <div className="skipped-questions-section">
                    <h3>Skipped Questions ({skippedQuestions.length})</h3>
                    {skippedQuestions.map((item, index) => (
                        <div
                            key={item.question.id || index}
                            className="skipped-question-item"
                            onClick={() => returnToSkippedQuestion(item)}
                        >
                            <div className="skipped-question-section">
                                {item.question.section} - {item.question.difficulty}
                            </div>
                            <div>{item.question.question}</div>
                        </div>
                    ))}
                </div>
            )}

            <div className="adaptive-info">
                <h4>
                    <span className="adaptive-info-icon">📊</span>
                    Performance Breakdown
                </h4>
                {Object.entries(performanceByDifficulty).map(([difficulty, data]) => {
                    if (!data || !data.attempted) return null;
                    const percentage = data.attempted ? Math.round((data.correct / data.attempted) * 100) : 0;

                    // Determine mastery level based on percentage of correct answers
                    // Using the exact levels requested: 0% N/A, 0-60% Developing, 60-85% Good, 85-100% Excellent
                    const getMasteryLevel = () => {
                        if (percentage === 0) return "N/A";
                        if (percentage < 60) return "Developing";
                        if (percentage < 85) return "Good";
                        return "Excellent";
                    };

                    return (
                        <div className="difficulty-performance" key={difficulty}>
                            <div className="difficulty-name">
                                <span className={`difficulty-icon difficulty-icon-${difficulty.toLowerCase()}`}></span>
                                {difficulty}
                            </div>
                            <div className="difficulty-stats">
                                <div>Your mastery level: {getMasteryLevel()}</div>
                                <div className="performance-bar-container">
                                    <div
                                        className={`performance-bar performance-bar-${difficulty.toLowerCase()}`}
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="performance-percentage">
                                {percentage}%
                            </div>
                        </div>
                    );
                })}
            </div>

            {onReturnToSectionSelect && (
                <div style={{ marginTop: 24, textAlign: 'center' }}>
                    <button className="option-btn primary-btn" onClick={onReturnToSectionSelect}>
                        Return to Topic Selection
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuestionDisplay;