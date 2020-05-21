import FeedbackPage from '../../page-objects/pages/FeedbackPage';

describe('FeedbackPage Test', () => {
	before(function () {
		FeedbackPage.load();
	});
	it('should submit FeedbackPage form', () => {
		FeedbackPage.submitFeedback();
	});
});
