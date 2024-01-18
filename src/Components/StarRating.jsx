// StarRating.js
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';

const Wrapper = styled.div`
  .icon-style {
    display: flex;
    align-items: center;

    .icon {
      color: #ffd700; // Set the color as per your design
      font-size: 1.2rem; // Set the font size as per your design
      margin-right: 2px; // Adjust margin as needed
    }
  }
`;

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating % 1;
  const halfStar = decimalPart >= 0.5;

  return (
    <Wrapper>
      <div className="icon-style">
        {Array.from({ length: 5 }, (elem, index) => (
          <span key={index}>
            {index < fullStars ? (
              <FaStar className="icon" />
            ) : index === fullStars && halfStar ? (
              <FaStarHalfAlt className="icon" />
            ) : (
              <AiOutlineStar className="icon" />
            )}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default StarRating;
