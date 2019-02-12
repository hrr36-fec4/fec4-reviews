import React, {Component} from 'react';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    let visibility = this.props.show ? 'modal display-block' : 'modal: display: none';
    return (
      <div className={visibility}>
        <div className='modal-main'>
          <div className='modal-container'>
            {this.props.children}
            <h1>My Review for COMPANY PRODUCT-NAME</h1>
            <p>Required fields are marked with *</p>
            <p>Product Rating* ***** Click to rate</p>
            <h3>Review title*</h3>
            <input type='text' placeholder='Example: Makes hiking even easier'/>
            <h3>Review*</h3>
            <textarea />
            <p>Add photo Add vidoe</p>
            <h3>Would you recommend this product to a friend?</h3>
            <p>Yes No</p>
            <h3>Nickname*</h3>
            <input type='text' placeholder='Example: jackie27' />
            <h3>Location</h3>
            <input type='text' placeholder='Example: Seattle, WA' />
            <h3>Email*</h3>
            <input type='text' placeholder='Example: youremail@example.com' />
            <h3>Fit</h3>
            <p>Runs Small  Runs Large</p>
            <h3>Did you read product reviews online before first purchasing this item?</h3>
            <select>
              <option value='select'>Select</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <h3>Where did you purchase the product</h3>
            <select>
              <option value='select'>Select</option>
              <option value='online'>Online</option>
              <option value='in-store'>In-Store</option>
            </select>
            <h3>What feedback do you have for the people who designed and manufactred this product?</h3>
            <textarea />
            <input type='checkbox' />
            <p>I agree to the Bazaarvoice Terms of Use & Privacy Policy *</p>
            <p>You may recieve emails regarding this submission.  Any emails will include the ability to opt out of future communications.</p>
            <button>Post review</button>
            <button onClick={this.props.handleClose}> close</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Modal;
