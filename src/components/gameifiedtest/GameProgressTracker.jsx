import React from 'react';
import { gameConfig } from './GameConfig';

const GameProgressTracker = ({
    totalQuestions,
    answeredQuestions,
    currentPoints,
    pointsAnimation,
    earnedBadges,
    message,
    currentDifficulty,
    consecutiveCorrect,
    skippedQuestions
}) => {
    const progressPercentage = Math.min(
        Math.round((answeredQuestions / totalQuestions) * 100),
        100
    );

    return (
        <div className="game-container">
            {/* Points Display */}
            <div className="points-display">
                <h3>Total Score</h3>
                <div className={pointsAnimation ? 'points-value points-animation' : 'points-value'}>
                    {currentPoints}
                </div>

                <div className="progress-bar-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>

                <div className="progress-info">
                    <span>Question {answeredQuestions + skippedQuestions.length + 1} of {totalQuestions}</span>
                    <span>
                        {skippedQuestions.length > 0 && `${skippedQuestions.length} skipped`}
                    </span>
                </div>

                {/* Difficulty and streak indicators */}
                <div className="indicators-row">
                    <span className={`difficulty-indicator difficulty-${currentDifficulty.toLowerCase()}`}>
                        {currentDifficulty}
                    </span>

                    {consecutiveCorrect >= 3 && (
                        <div className="streak-indicator">
                            <span className="streak-icon">🔥</span>
                            {consecutiveCorrect} in a row
                            {consecutiveCorrect >= 10 ? ' (3x)' :
                                consecutiveCorrect >= 5 ? ' (2x)' : ' (1.5x)'}
                        </div>
                    )}
                </div>
            </div>

            {/* Badge Section */}
            <div className="badge-section">
                <h3>Achievements</h3>
                <div className="badge-container">
                    {gameConfig.badges.map((badge, index) => {
                        const isUnlocked = earnedBadges.some(earned => earned.name === badge.name);
                        return (
                            <div
                                key={index}
                                className={`badge ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}`}
                                title={isUnlocked ? badge.message : `Earn ${badge.pointsRequired} points to unlock`}
                            >
                                <div className="badge-icon">{badge.icon}</div>
                                <div className="badge-name">{badge.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Message Area */}
            <div className={`message-area ${message.highlight === true ? 'message-highlight' :
                message.highlight === 'incorrect' ? 'message-highlight-incorrect' : ''
                }`}>
                {message.text || "Complete questions to earn points and badges!"}
            </div>
        </div>
    );
};

export default GameProgressTracker;