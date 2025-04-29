import { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { ReviewContext } from '../../Func/context/ReviewContextProvider';
import { useParams } from 'react-router-dom';

const ReviewContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const StarContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Star = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: ${props => props.filled ? '#FFD700' : '#ddd'};
  padding: 0;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #4a90e2;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ReviewsList = styled.div`
  margin-top: 2rem;
`;

const ReviewCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #666;
  text-align: center;
  font-style: italic;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  margin: 0.5rem 0;
  font-size: 0.9rem;
`;

const LoadingSpinner = styled(motion.div)`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4a90e2;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 1rem auto;
`;

export default function AddReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();
  const { getReviews, addReview } = useContext(ReviewContext);

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const response = await getReviews(id);
      if (response?.success && Array.isArray(response.data)) {
        setReviews(response.data);
      } else {
        setReviews([]);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Failed to load reviews. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarClick = (selectedRating, e) => {
    e.preventDefault(); // Prevent form submission
    setRating(Number(selectedRating));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!review.trim()) {
      setError('Please write a review comment');
      return;
    }

    if (!rating || rating < 1 || rating > 5) {
      setError('Please select a rating between 1 and 5 stars');
      return;
    }

    try {
      setIsLoading(true);
      setError('');

      await addReview(id, review.trim(), rating);

      // Reset form
      setRating(0);
      setReview('');
      
      // Refresh reviews
      await fetchReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
      // Error is already handled by toast in the context
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReviewContainer>
      <Title>Reviews</Title>
      <ReviewForm onSubmit={handleSubmit}>
        <p>Click to review:</p>
        <StarContainer>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              type="button" // Add type="button" to prevent form submission
              filled={star <= (hoveredStar || rating)}
              onClick={(e) => handleStarClick(star, e)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              disabled={isLoading}
            >
              ★
            </Star>
          ))}
        </StarContainer>

        <TextArea
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
            setError('');
          }}
          placeholder="Share your thoughts about this product..."
          disabled={isLoading}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton
          type="submit"
          disabled={isLoading || !rating || !review.trim()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? 'Submitting...' : 'Submit Review'}
        </SubmitButton>
      </ReviewForm>

      <ReviewsList>
        {isLoading && (
          <LoadingSpinner
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        
        <AnimatePresence>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard
                key={review._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                <p>{review.comment}</p>
                <small>Posted on {new Date(review.createdAt).toLocaleDateString()}</small>
              </ReviewCard>
            ))
          ) : (
            <Message>No reviews yet, lead the way and share your thoughts</Message>
          )}
        </AnimatePresence>
      </ReviewsList>
    </ReviewContainer>
  );
}
