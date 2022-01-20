import React, { Component } from 'react'

export class Kitchen extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid Kit1' >
                    <br/> 
                    <p style={{fontFamily:" 'Playfair Display', serif", fontSize:"70px" }} >kitchen</p>                    
                    <img className="col-md-5 col-xs-12 Kit1img1 " src="assets/kitchen/K1.jpg" alt="img"/>
                    <br />
                    <br />
                    <p>Part home studio, part design consultancy, and full of hidden wonders, our <br /> small boutique atelier, located in the middle of Downtown Greenville,<br /> houses a variety of exquisite furniture and charming, just-offbeat-enough <br /> tchotchkes, including statement pieces, wall coverings, curated art.</p>
                </div>

                <div className='container-fluid Kit2' >
                    <div className='col-md-4 col-xs-12 Kit2text1' >
                         <p style={{fontFamily:" 'Playfair Display', serif", fontSize:"50px" }} >Bathroom Trends <br />
                            Modern Design <br />
                            Luxury Interiors<br />
                            Our Awards
                        </p>
                    </div>
                    <img className="col-md-4 col-xs-12 Kit2img2 " src="assets/kitchen/K2.jpg" alt="img"/>
                    <img className="col-md-4 col-xs-12 Kit2img2 " src="assets/kitchen/K3.jpg" alt="img"/>
                </div>

                <div className='container-fluid Kit3' >
                    <div className='col-md-6 col-xs-12 Kit3text1' >
                        <p id="kit3texthead" style={{fontFamily:" 'Playfair Display', serif", fontSize:"50px",color:"rgb(54, 158, 161)" }} >People thriving through <br/> music and relationships.</p>
                        <br/>
                        <p>From its origin as the Everett Symphony, the Music  <br/> Project has since transformed into a healthcare  <br/> nonprofit, and one of the leading music therapy  <br/> providers in the Pacific Northwest. Through the power  <br/> of music and relationships, music therapy promotes  <br/> healing and well-being for individuals, families, and  <br/> communities in a variety of circumstances.</p>
                    </div>
                    <div className='col-md-6 col-xs-12 Kit3text1' >
                         <img className="col-md-5 col-xs-12 Kit3img3 " src="assets/kitchen/K4.jpg" alt="img" /><p>
                         I was recently giving some workshops in Asia on   <br/> Forgiveness. The lady I was staying with said to me,  <br/> “My neighbour Jane would really like to meet you. She   <br/> is a Psychiatrist and she has heard about your   <br/> method, The Four Steps to Forgiveness, and wants to   <br/> learn how to use it. </p>
                    </div>
                </div>

                <div className='container-fluid Kit4' >
                    <img className="col-md-6 col-xs-12 Kit4img4 " src="assets/kitchen/K5.jpg" alt="img"/>
                    <div className='col-md-6 col-xs-12 Kit4text3' >
                        <p id='Kit4texthead' style={{fontFamily:" 'Playfair Display', serif", fontSize:"45px" }} >High quality cookware</p>
                        <p>Planning is an integral part of interior design. Space  <br/> planning begins at the architectural level. If you want a  <br/> room to be of a specific size it has to be built with  <br/> those dimensions. To change the room size of  <br/> an existing structure it would require structural  <br/> modifications to the interiors.</p>
                    </div>                     
                </div>

                <div className='container-fluid Kit5' >
                    <div className='col-md-6 col-xs-12 Kit5text1' >
                        <h4 id="kit5texthead" >Bathroom Trends</h4>
                        <p>Sample text. Click to select the text box. Click again <br/> or double click to start editing the text.</p>
                        <br/>
                        <hr className='hline' />
                        <br/>
                        <h4>Luxury Interiors</h4>
                        <p>Sample text. Click to select the text box. Click again <br/> or double click to start editing the text.</p>
                        <br/>                    
                        <hr className='hline' />
                        <br/>
                        <h4>Modern Design</h4>
                        <p>Sample text. Click to select the text box. Click again <br/> or double click to start editing the text.</p>
                        
                        
                      
                    </div>
                    
                    <img className="col-md-6 col-xs-12 Kit5img5 " src="assets/kitchen/K6.jpg" alt="img"/>
                       
                    
                </div>




            </div>
        )
    }
}

export default Kitchen
