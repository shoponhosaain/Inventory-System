import React from 'react';
const Boiler = ({card,children }) => {
    return (
   
       <>
  

  <main>{children}</main>
  <footer>
    {/* footer */}
    <div className="container mt-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width={30} height={24}>
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#twitter" />
              </svg>
           
          </li>
          <li className="ms-3">
        
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#instagram" />
              </svg>
        
          </li>
          <li className="ms-3">
        
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#facebook" />
              </svg>
        
          </li>
        </ul>
      </footer>
    </div>
    <div className="b-example-divider" />
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            
              Home
            
          </li>
          <li className="nav-item">
            
              Features
            
          </li>
          <li className="nav-item">
            
              Pricing
            
          </li>
          <li className="nav-item">
            
              FAQs
            
          </li>
          <li className="nav-item">
            
              About
            
          </li>
        </ul>
        <p className="text-center text-muted">© 2021 Company, Inc</p>
      </footer>
    </div>
    {/* footer */}
  </footer>
</>


    );
};

export default Boiler;