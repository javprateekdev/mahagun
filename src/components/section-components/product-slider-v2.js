import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductSliderV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__search-by-place-area before-bg-top bg-image-top--- pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"} id="features">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Area Properties</h6>
			          <h1 className="section-title">Mahagun Medalleo Key Features 
			           </h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/eisFEWr.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            
			            <h4><Link to="/product-details">TERRACE BARBEQUE AREA</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/KwYjI7x.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              
			            </div>
			          </div>
			          <div className="search-by-place-info">
			           
			            <h4><Link to="/product-details">RECREATIONAL LOUNGE </Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/Oh94Vgs.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			             
			            </div>
			          </div>
			          <div className="search-by-place-info">
			           
			            <h4><Link to="/product-details">KIDS POOL & PLAY AREA</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/stdt1rs.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			            
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            
			            <h4><Link to="/product-details">KIDS PLAY AREA – STILT</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
			     
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/05U8Kag.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            
			            <h4><Link to="/product-details">RELAXING CABANA</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
				 
				<div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/Rpij4jT.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            
			            <h4><Link to="/product-details">Mini Theatre</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/xsV0Xp5.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            
			            <h4><Link to="/product-details">Gym</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/2m3Cd7x.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              
			            </div>
			          </div>
			          <div className="search-by-place-info">
			          
						<h4><Link to="/product-details">CELEBRATION LAWN</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/NucXDv1.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            
			            <h4><Link to="/product-details">SWIMMING POOL WITH DECK</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img src={"https://i.imgur.com/6l2tVqE.jpg"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            
			            <h4><Link to="/product-details">RELAXATION PAVILLION</Link></h4>
			            <div className="search-by-place-btn">
			              
			            </div>
			          </div>
			        </div>
			      </div>
				 
				 
			      </div>
				  
			      </div>
				  
			  </div>
			
        }
}

export default ProductSliderV2