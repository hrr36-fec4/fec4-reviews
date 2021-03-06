import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Stars from '../util/Stars';
import FitBarContainer from '../util/FitBarContainer';
import ReviewListItemFooter from './ReviewListItemFooter';

const ReviewListItem = ({
  patch, helpfulClicked, flagged, review: {
    rating, name, createdAt, title, text, recommend, helpful, notHelpful, flag, fit, _id,
  },
}) => (
  <div>
    <hr />
    <div className="review-body">
      <div>
        <Stars average={rating} />
        <span className="bold">{name}</span>
        <span> - </span>
        <span>
          {moment(createdAt).fromNow()}
        </span>
        <div className="title-review">{title}</div>
        <div className="text-review">{text}</div>
        <i className={recommend ? 'fas fa-check-circle pad-right' : 'fas fa-times-circle pad-right'} />
        <span className="bold">{recommend ? 'Yes, ' : 'No, '}</span>
        <span>I </span>
        <span>{recommend ? '' : 'don\'t '}</span>
        <span>recommend this product.</span>
        <ReviewListItemFooter
          helpful={helpful}
          not={notHelpful}
          flag={flagged || flag}
          id={_id}
          patch={patch}
          helpfulClicked={helpfulClicked}
        />
      </div>
      <div className="review-fit-bar">
        <div className={fit === 0 ? 'hidden' : 'bold'}>Fit</div>
        <FitBarContainer className={fit === 0 ? 'hidden' : ''} average={fit} />
      </div>
    </div>
  </div>
);

ReviewListItem.propTypes = {
  review: PropTypes.instanceOf(Object),
  patch: PropTypes.func,
  helpfulClicked: PropTypes.string,
  flagged: PropTypes.bool,
};

ReviewListItem.defaultProps = {
  review: {},
  patch: () => {},
  helpfulClicked: '',
  flagged: false,
};

export default ReviewListItem;
