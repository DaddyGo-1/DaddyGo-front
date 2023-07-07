import React, { Component } from 'react';

import StripePagination from '../app/paginationForStripe';

class SideBarBottom extends Component {
   
    render() { 

      
        return (
            <div className='side-bar-bottom'>
                 <section className="container" >
                    {this.props.persons.map(person => (
                        <li className='list_group'>
                        <article className="review">
                        <div className="img-container">
                          <img src={person.img} id={person.id} alt="" sizes={20} />
                        </div>
                        <h4 className="author">{person.name}</h4>
                        <p className="job">{person.job}</p>
                        <p className="info">
                          {person.text}
                        </p>  
                      </article>
                      </li>
        ))}
      </section>

      <div className='pagn'>
      <StripePagination onSwitch={ this.props.switchPage }
              itemCount={this.props.reviews.length} pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}/>
      </div>
                 </div>
        );
    }
}
 
export default SideBarBottom;
{/* <div className="button-container">
              <button className="prev-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="next-btn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div> */}
           
            {/* <button class="random-btn">surprise me</button> */}