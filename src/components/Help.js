import React, { Component } from 'react'

export class Help extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid">
                    <div className="container-fluid helpheaddiv">
                        <div className=" col-md-3 col-xs-12 titleleft" ><p>Nordic Style</p></div>
                        <div className="  col-md-4 col-xs-12 titleright"  ><p>home decor</p>
                            <img className=" H1" src="assets/decor/H1.jpg" alt="img"/></div>
                        <div className=" col-md-6 col-xs-12 titlecontent"  >
                            <p id="Homedf">Home design ideas & products</p>
                            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim. Ut porttitor leo a diam sollicitudin. </p>
                        </div>
                    </div>

                </div>
                <div className="container-fluid">

                    <div className="container-fluid Hdiv2">
                        <div className=" col-md-3 col-xs-12 Hdiv2text"><p>Green Decor</p></div>
                        <div className=" col-md-3 col-xs-12 imgH">
                            <img className="H2" src="assets/decor/H2.jpg" alt="img"/>
                            <br/>
                            <p>Sample text. Click to select the text box. <br /> Click again or double click to start editing the text.</p>
                        </div>
                        <div className=" col-md-3 col-xs-12 imgH "   >
                            <img className="H3" src="assets/decor/H3.jpg" alt="img"/>
                            <br/>
                            <p>Sample text. Click to select the text box. <br /> Click again or double click to start editing the text.</p>
                        </div>
                    </div>

                </div>

                <div class="container-fluid col-md-12 col-xs-12">

                    <div className="container-fluid col-md-12 col-xs-12 Hdiv3" >
                        <p className="col-md-4 col-xs-12 T1">Business Strategy</p>
                        <p className=" col-md-8 col-xs-12 T2">Leverage agile frameworks to <br /> provide a robust synopsis for <br /> high level overviews.</p>
                        <p className=" col-md-8 col-xs-12 T3">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the <br /> day, going forward, a new normal that has evolved from generation X is on the runway heading <br /> towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    </div>

                </div>


                <div className="container-fluid">
                    <div className=" container-fluid Hdiv4" >
                        <div className="sale" ><p><b />For Sale</p></div>
                        <p id="address">4013 Jarvis Street <br />
                            Buffalo, New York <br />
                            14202</p>

                        <div className="container-fluid col-md-7 col-xs-12 fulltext">
                            <p id="h"> Minimalist Living</p>
                            <p>Being a minimalist means doing away with the unnecessary clutter that you don’t need in your life. Imagine if I told you that I would give you a one-way ticket to any destination of your choosing, with $10,000 in cash to spend.</p>
                            <p>Would you take the opportunity? Of course, you would, that’s not surprising, but what does peak curiosity is – where would you go, what would you do with the money, and how long would you stay at your destination?</p>
                        </div>
                        <div className=" I1"><img src="assets/decor/H4.jpg" alt="img"/></div>
                        <div className="  I2" ><img src="assets/decor/H5.jpg" alt="img"/></div>

                    </div>

                </div>

                <div className="container-fluid Hdiv5" >
                <img className=" H6" src="assets/decor/H6.jpg" alt="img"/>
                <img className=" H7" src="assets/decor/H7.jpg" alt="img"/>
                </div>

                <div className="container-fluid Hdiv6">
                    <h1 style={{fontFamily:" 'Playfair Display', serif" ,color:"#478778"}} >Create A New <br/> Concepts</h1>
                    <p>Our aim is to make people who work in open-plan offices to be <br/> happier and more effective accordingly.</p>
                    <span style={{backgroundColor:"#478778" ,border:"none", color:"white"}} >view collection</span>
                    <span>shop now</span>
                </div>

                <div className="container-fluid Hdiv7" >

                    <div className="imgdiv" >
                    <img className=" H9" src="assets/Home design product/H9.jpg" alt="img"/>
                    <img className=" H10" src="assets/Home design product/H10.jpg" alt="img"/>
                         </div>

                    <div  className=" textdiv" >
                        <h3  style={{fontFamily:" 'Playfair Display', serif" ,color:"#478778"}} >Why we should be greening our homes with plants</h3>
                        <p  >Wellness can be fostered through the ‘living’ decor plants provide – they absorb harmful chemicals and regulate humidity...</p>
                        </div> 
                </div>
                    

            </div>

        )
    }
}

export default Help
