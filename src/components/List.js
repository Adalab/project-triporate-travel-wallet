import React from 'react';
import {Link} from 'react-router-dom';
import './List.scss';


class List extends React.Component {
  constructor(props) {
    super(props);

    this.myFileField = React.createRef();
    this.handleFilePicker = this.handleFilePicker.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  render() {
    const {getInputFile} = this.props;
    const Array = [1, 2, 3];
    return (
      <div className="list">
        <h1 className="list__title">MY TRAVEL WALLET.</h1>
        <ul className="list__cards">
          {Array.map((item, index) =>{
            return(
              <li key={index} className="list__card">
                <Link className="card__link" to={`/detail/${index}`}>
                  <div className="card__info-wrapper">
                    <div className="card__logo-wrapper">
                      <img src="http://marcaporhombro.com/wp-content/uploads/2012/09/renfe.jpg" alt="Organization logo" className="card__logo-img"/>
                      <p className="card__date">02/07/20</p>
                    </div>
                    <div className="card__travel-wrapper">
                      <div className="travel__data-wrapper">
                        <p className="travel__city">MAD</p>
                        <p className="travel__time">21:30</p>
                      </div>
                      <div className="travel__icon">️
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Airplane_silhouette.svg/400px-Airplane_silhouette.svg.png" alt="Transport icon" className="travel__icon-img"/>
                      </div>
                      <div className="travel__data-wrapper">
                        <p className="travel__city">BCN</p>
                        <p className="travel__time">21:30</p>
                      </div>
                    </div>
                  </div> 
                </Link>
              </li>
            )})}
        </ul>
        <div className="list__btn-wrapper">
          <p className="list__btn-label">Add ticket</p>
          <button
            className="list__btn"
            type="button"
            name="add_img"
            onClick={this.handleFilePicker}
          >+
          </button>
        </div>
          <input
            type="file"
            ref={this.myFileField}
            name="image"
            id="img-selector"
            className="list__input"
            onChange={getInputFile}
          />
       
      </div>
    );
  }
}

export default List;
