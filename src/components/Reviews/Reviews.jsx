import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReview } from 'service/fetchApi';
import { ReviewContent, ReviewList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  console.log(review);
  useEffect(() => {
    fetchFilmReview(movieId).then(data => setReview(data.results));
  }, [movieId]);
  return (
    <>
      {review ? null : <p>We don't find review for this film!</p>}
      <ReviewList>
        {review.map(({ author, content, id }) => (
          <li key={id}>
            <h5>Author: {author}</h5>
            <ReviewContent>{content}</ReviewContent>
          </li>
        ))}
      </ReviewList>
    </>
  );
};

export default Reviews;
