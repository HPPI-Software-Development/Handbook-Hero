// CSS Styles as a string
const styles = `
  /* Core variables */
  :root {
    /* Primary color palette */
    --primary: #0065A3;        /* medium-blue - primary brand color */
    --primary-light: #008FD4;  /* light-blue - lighter shade for hover, etc */
    --primary-dark: #002F64;   /* dark-blue - darker shade for active, etc */
    --secondary: #6CA24C;      /* light-green - accent/highlight color */
    --secondary-light: #8DB876; /* lighter green */
    --secondary-dark: #4D8130; /* darker green */
    
    /* Functional colors */
    --success: #6CA24C;        /* Same as secondary - for success messages */
    --warning: #F7941D;        /* Orange - for warnings */
    --danger: #D64A3B;         /* Red - for errors */
    
    /* Neutral colors */
    --light: #f8f9fa;
    --dark: #343a40;
    --gray: #6c757d;
    --white: #ffffff;
    
    /* UI elements */
    --shadow: 0 4px 6px rgba(0,0,0,0.1);
    --radius: 8px;
    --transition: all 0.3s ease;
    --font: 'Roboto', 'Segoe UI', 'Arial', sans-serif;
  }
  
  /* Global styles */
  body {
    font-family: var(--font);
    color: #333;
    line-height: 1.5;
    background-color: #f5f7fa;
  }

  /* Game container */
  .game-container {
    font-family: var(--font);
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
    background-color: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
  }

  /* Header Section */
  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }

  .game-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
  }

  /* Points Display */
  .points-display {
    text-align: center;
    background-color: #f8f9fa;
    border-radius: var(--radius);
    padding: 16px;
    margin-bottom: 24px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
    position: relative;
  }
  
  .points-display h3 {
    margin: 0 0 12px 0;
    font-weight: 500;
    color: var(--dark);
    font-size: 1.2rem;
  }
  
  .points-value {
    font-weight: 700;
    font-size: 2rem;
    color: var(--primary);
  }
  
  .points-animation {
    animation: badgeUnlock 1s ease;
    display: inline-block;
    color: var(--primary-dark);
  }
  
  .progress-info {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    font-size: 0.9rem;
    color: var(--gray);
  }
  
  .progress-bar-container {
    height: 6px;
    background-color: #e9ecef;
    border-radius: 8px;
    overflow: hidden;
    margin: 8px 0;
  }
  
  .progress-bar {
    height: 100%;
    background-color: var(--primary);
    border-radius: 8px;
    transition: width 0.4s ease;
  }
  
  /* Difficulty and streak indicators */
  .indicators-row {
    display: flex;
    justify-content: center;
    margin-top: 12px;
    gap: 12px;
  }
  
  .difficulty-indicator {
    display: inline-block;
    padding: 4px 12px;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background-color: #f0f0f0;
  }
  
  .difficulty-easy {
    background-color: #e8f5e9;
    color: var(--secondary-dark);
  }
  
  .difficulty-medium {
    background-color: #e3f2fd;
    color: var(--primary);
  }
  
  .difficulty-hard {
    background-color: #e8eaf6;
    color: var(--primary-dark);
  }

  /* Badge section */
  .badge-section {
    margin-bottom: 24px;
    background-color: #f8f9fa;
    border-radius: var(--radius);
    padding: 16px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
  }
  
  .badge-section h3 {
    text-align: center;
    margin: 0 0 16px 0;
    font-weight: 500;
    color: var(--dark);
    font-size: 1.2rem;
  }
  
  .badge-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .badge {
    width: 80px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    padding: 12px;
    transition: var(--transition);
    cursor: pointer;
    position: relative;
  }
  
  .badge:hover {
    transform: translateY(-3px);
  }
  
  .badge-locked {
    background-color: #e9ecef;
    opacity: 0.7;
  }
  
  .badge-locked::after {
    content: "🔒";
    position: absolute;
    top: 40px;
    font-size: 1.5rem;
    opacity: 0.5;
  }
  
  .badge-unlocked {
    background-color: #e8f5e9;
    box-shadow: var(--shadow);
    animation: badgeUnlock 0.8s ease;
  }
  
  .badge-icon {
    font-size: 2.2rem;
    margin-bottom: 8px;
  }
  
  .badge-name {
    font-size: 0.8rem;
    text-align: center;
    font-weight: bold;
  }
  
  /* Streak indicator */
  .streak-indicator {
    font-size: 0.85rem;
    color: var(--primary-light);
    font-weight: 600;
    padding: 4px 12px;
    animation: pulse 2s infinite;
    border-radius: 50px;
    background-color: #e3f2fd;
    display: inline-flex;
    align-items: center;
  }
  
  .streak-icon {
    margin-right: 4px;
    font-size: 1rem;
  }
  
  @keyframes pulse {
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
  }
  
  /* Message area */
  .message-area {
    background-color: var(--white);
    border-radius: var(--radius);
    padding: 16px;
    text-align: center;
    min-height: 60px;
    margin-top: 20px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
    border-left: 4px solid var(--primary);
  }
  
  .message-highlight {
    background-color: #f7f9e8;
    border-left: 4px solid var(--secondary);
    animation: highlightMessage 1s ease;
  }
  
  @keyframes badgeUnlock {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }
  
  @keyframes highlightMessage {
    0% { background-color: var(--white); }
    50% { background-color: #f7f9e8; }
    100% { background-color: var(--white); }
  }
  
  /* Test component */
  .gameified-test {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    font-family: var(--font);
    max-width: 900px;
    margin: 0 auto;
  }
  
  /* Question container */
  .question-container {
    background-color: var(--white);
    border-radius: var(--radius);
    padding: 24px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
  }
  
  .question-container h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: var(--dark);
    font-weight: 500;
    line-height: 1.4;
  }
  
  .question-section {
    font-size: 0.8rem;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Options */
  .options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }
  
  .option-btn {
    padding: 12px 16px;
    background-color: #f5f7fa;
    border: 1px solid #dee2e6;
    border-radius: var(--radius);
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    text-align: left;
    color: var(--dark);
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    overflow: hidden;
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  .option-btn:hover {
    background-color: #e9ecef;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .option-btn:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  .primary-btn {
    background-color: var(--primary);
    color: var(--white);
    border: none;
    padding: 12px 20px;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
  
  .primary-btn:hover {
    background-color: var(--primary-dark);
    color: var(--white);
  }
  
  .skip-btn {
    background-color: #f1f3f5;
    border: 1px solid #ced4da;
  }
  
  .skip-btn:hover {
    background-color: #e9ecef;
  }
  
  /* Question actions */
  .question-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
  }
  
  /* Test completion */
  .question-completed {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--success);
    margin-bottom: 20px;
  }
  
  /* Test stats */
  .test-stats {
    margin-top: 20px;
    background-color: #f8f9fa;
    border-radius: var(--radius);
    padding: 24px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 16px;
  }
  
  .stat-item {
    text-align: center;
    font-size: 0.9rem;
    color: var(--gray);
  }
  
  .stat-value {
    display: block;
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--dark);
    margin-top: 4px;
  }
  
  .skipped-questions-section {
    margin-top: 30px;
    border-top: 1px solid #dee2e6;
    padding-top: 24px;
  }
  
  .skipped-questions-section h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    color: var(--dark);
    font-weight: 500;
  }
  
  .skipped-question-item {
    background-color: #f8f9fa;
    border-radius: var(--radius);
    padding: 16px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    border-left: 3px solid var(--gray);
  }
  
  .skipped-question-item:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    border-left-color: var(--primary);
  }
  
  .skipped-question-section {
    font-size: 0.8rem;
    color: var(--gray);
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: 600;
  }
  
  /* Adaptive info */
  .adaptive-info {
    background-color: #e9ecef;
    color: var(--dark);
    padding: 20px;
    border-radius: var(--radius);
    margin-top: 32px;
    font-size: 0.95rem;
    box-shadow: var(--shadow);
  }
  
  .adaptive-info h4 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 1.1rem;
    color: var(--dark);
    font-weight: 500;
  }
  
  .adaptive-info-item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .adaptive-info-icon {
    margin-right: 8px;
    font-size: 1.1rem;
    color: var(--primary);
  }
  
  /* Performance breakdown */
  .performance-breakdown {
    margin-top: 32px;
  }
  
  .performance-breakdown h4 {
    font-size: 1.1rem;
    margin-bottom: 16px;
    color: var(--dark);
    font-weight: 500;
  }
  
  .difficulty-performance {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #dee2e6;
  }
  
  .difficulty-performance:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  
  .difficulty-name {
    font-weight: bold;
    min-width: 120px;
    display: flex;
    align-items: center;
  }

  .difficulty-icon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .difficulty-icon-easy {
    background-color: var(--secondary);
  }

  .difficulty-icon-medium {
    background-color: var(--primary-light);
  }

  .difficulty-icon-hard {
    background-color: var(--primary-dark);
  }
  
  .difficulty-stats {
    flex-grow: 1;
    padding: 0 16px;
  }
  
  .performance-bar-container {
    width: 100%;
    height: 8px;
    background-color: #e9ecef;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 8px;
  }
  
  .performance-bar {
    height: 100%;
    border-radius: 4px;
    transition: width 0.6s ease;
  }

  .performance-bar-easy {
    background-color: var(--secondary);
  }

  .performance-bar-medium {
    background-color: var(--primary-light);
  }

  .performance-bar-hard {
    background-color: var(--primary-dark);
  }
  
  .performance-percentage {
    min-width: 60px;
    text-align: right;
    font-weight: bold;
  }
  
  .streak-bonus {
    color: var(--primary-light);
    font-weight: 600;
    font-style: italic;
  }

  /* Feedback buttons */
  .feedback-btn {
    padding: 10px 16px;
    margin: 0 6px 6px 0;
    background-color: #f1f3f5;
    border: 1px solid #ced4da;
    border-radius: var(--radius);
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition);
    color: var(--dark);
  }

  .feedback-btn:hover {
    background-color: #e9ecef;
    color: var(--primary-dark);
    border-color: #adb5bd;
  }

  .feedback-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Question feedback row */
  .question-feedback-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 10px;
    padding-top: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  /* Section button styling */
  .section-btn-completed {
    background-color: #e8f5e9 !important;
    color: var(--secondary-dark) !important;
    text-decoration: line-through;
    position: relative;
  }

  .section-btn-completed::after {
    content: "✓";
    position: absolute;
    right: 16px;
  }

  .section-completed-label {
    color: var(--secondary);
    font-weight: bold;
    margin-left: 8px;
    display: flex;
    align-items: center;
  }

  .section-completed-label::before {
    content: "✓";
    margin-right: 4px;
    font-size: 0.9rem;
  }

  /* Navigation */
  .nav-back-button {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    background-color: transparent;
    border: none;
    color: var(--primary);
    font-weight: 500;
    font-size: 0.95rem;
    cursor: pointer;
    border-radius: var(--radius);
    margin-bottom: 16px;
    transition: var(--transition);
  }
  
  .nav-back-button:hover {
    background-color: rgba(0, 101, 163, 0.1);
  }
  
  .nav-back-icon {
    margin-right: 6px;
  }

  /* Section selection */
  .section-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    margin-top: 16px;
  }
  
  .section-card {
    background-color: var(--white);
    border-radius: var(--radius);
    padding: 16px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-left: 4px solid var(--primary);
  }
  
  .section-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  }
  
  .section-title {
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--dark);
    margin-bottom: 8px;
  }
  
  .section-info {
    font-size: 0.9rem;
    color: var(--gray);
    margin-bottom: 12px;
    flex-grow: 1;
  }
  
  .section-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .section-progress {
    width: 100%;
    height: 6px;
    background-color: #e9ecef;
    border-radius: 3px;
    margin-top: 8px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background-color: var(--primary);
    border-radius: 3px;
    transition: width 0.3s ease;
  }
  
  .progress-text {
    font-size: 0.8rem;
    color: var(--gray);
    text-align: right;
    margin-top: 4px;
  }
  
  /* Review cards */
  .review-card {
    border-left: 4px solid var(--secondary);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .game-container {
      padding: 16px;
      margin: 0 12px;
    }
    
    .question-container {
      padding: 16px;
    }
    
    .question-container h2 {
      font-size: 1.2rem;
    }
    
    .test-stats {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .difficulty-performance {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .difficulty-name {
      margin-bottom: 8px;
    }
    
    .performance-percentage {
      margin-top: 8px;
      text-align: left;
    }
    
    .badge-container {
      gap: 10px;
    }
    
    .badge {
      width: 70px;
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    .options {
      gap: 8px;
    }
    
    .option-btn {
      padding: 10px 12px;
      font-size: 0.95rem;
    }
    
    .badge {
      width: 60px;
      height: 90px;
    }
    
    .badge-icon {
      font-size: 1.8rem;
    }
    
    .feedback-btn {
      padding: 8px 12px;
      font-size: 0.85rem;
    }
  }
`;

export { styles };