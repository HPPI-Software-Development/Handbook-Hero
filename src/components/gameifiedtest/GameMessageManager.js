import React, { useState } from 'react';
import { gameConfig } from './GameConfig';

/**
 * Utility to manage game messages and notifications
 */
const useGameMessageManager = () => {
  const [message, setMessage] = useState({ 
    text: 'Complete questions to earn points and badges!', 
    highlight: false 
  });

  const clearMessage = () => setMessage({ text: '', highlight: false });
  
  /**
   * Show a message with point information
   */
  const showPointsMessage = (points, streakBonus, multiplier) => {
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
    setTimeout(() => {
      setMessage(prev => ({ ...prev, highlight: false }));
    }, 1500);
  };
  
  /**
   * Show a badge achievement message
   */
  const showBadgeMessage = (badge) => {
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
    setTimeout(() => {
      setMessage(prev => ({ ...prev, highlight: false }));
    }, 1500);
  };
  
  /**
   * Show a difficulty change message
   */
  const showDifficultyChangeMessage = (newDifficulty, isAdvancing) => {
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
    setTimeout(() => {
      setMessage(prev => ({ ...prev, highlight: false }));
    }, 1500);
  };
  
  /**
   * Show a message when a question is skipped
   */
  const showSkippedMessage = () => {
    setMessage({
      text: <p>Question skipped. You can come back to it later.</p>,
      highlight: true
    });
    
    // Reset highlight after animation
    setTimeout(() => {
      setMessage(prev => ({ ...prev, highlight: false }));
    }, 1000);
  };

  /**
   * Show a message when feedback is submitted
   */  
    const showFeedbackMessage = (inReviewMode = false) => {
        setMessage({
            text: inReviewMode ? 
                <p>Thank you for your feedback! Question removed from your review list.</p> :
                <p>Thank you for your feedback!</p>,
            highlight: true
        });

        // Reset highlight after animation
        setTimeout(() => {
            setMessage(prev => ({ ...prev, highlight: false }));
        }, 1000);
    };
  
  /**
   * Show a message for early test termination
   */
  const showEarlyTerminationMessage = (isHighPerformer, bonusPoints = 0) => {
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
  };
  
  /**
   * Show a message for test completion
   */
  const showCompletionMessage = (currentPoints, earnedBadges, reviewTitle = null) => {
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
  };
  
  /**
   * Show a message for returning to skipped questions
   */
  const showReturnToSkippedMessage = () => {
    setMessage({
      text: <p>Let's go back to the questions you skipped.</p>,
      highlight: true
    });
    
    // Reset highlight after animation
    setTimeout(() => {
      setMessage(prev => ({ ...prev, highlight: false }));
    }, 1000);
  };
  
  /**
   * Set a custom message
   */
  const setCustomMessage = (text, highlight = true) => {
    setMessage({
      text,
      highlight
    });
    
    // Reset highlight after animation if needed
    if (highlight) {
      setTimeout(() => {
        setMessage(prev => ({ ...prev, highlight: false }));
      }, 1500);
    }
  };
  
  /**
   * Show a message when starting a review session
   */
  const showReviewSessionMessage = (reviewType) => {
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
    setTimeout(() => {
      setMessage(prev => ({ ...prev, highlight: false }));
    }, 1500);
  };

  return {
    message,
    showPointsMessage,
    showBadgeMessage,
    showDifficultyChangeMessage,
    showSkippedMessage,
    showEarlyTerminationMessage,
    showCompletionMessage,
    showReturnToSkippedMessage,
    showFeedbackMessage,
    showReviewSessionMessage,
    setCustomMessage,
    clearMessage
  };
};

export default useGameMessageManager;