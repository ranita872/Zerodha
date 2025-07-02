import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your tranding and investment experience even further with our partner platforms
                </p>
                
                <div className='col-4 p-3 mt-5'>
                    <img src="media\images\smallcaseLogo.png" className="partner-logo"/>
                    <p className='text-small text-muted text-center'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" className="partner-logo"/>
                    <p className='text-small text-muted text-center'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" className="partner-logo"/>
                    <p className='text-small text-muted text-center'>Options trading Platform</p>
                </div>
                <div className='col-4 p-3 mt-1'>
                    <img src="media\images\zerodhaFundhouse.png" className="partner-logo"/>
                    <p className='text-small text-muted text-center'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-1'>
                    <img src="media\images\goldenpiLogo.png" className="partner-logo"/>
                    <p className='text-small text-muted text-center'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-1'>
                    <img src="media\images\dittoLogo.png" className="partner-logo"/>
                    <p className='text-small text-muted text-center'>Insurance</p>
                </div>
                <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
            </div>
        </div>
     );
}

export default Universe;