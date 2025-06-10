import emailjs from '@emailjs/browser';

// Replace with your actual EmailJS credentials
const SERVICE_ID = 'service_2031mx8';
const TEMPLATE_ID = 'template_w0f6wxr';
const PUBLIC_KEY = '2y_KCIa9E0a6k0TmP';

emailjs.init(PUBLIC_KEY);

export const sendFeedbackEmail = async ({ questionId, questionText, feedbackType, section, difficulty }) => {
    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                //question_id: questionId,
                question_text: questionText
                //feedback_type: feedbackType,
                //section,
                //difficulty,
                //timestamp: new Date().toISOString(),
            }
        );
        return response;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};