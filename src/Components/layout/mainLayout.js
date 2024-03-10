import React from 'react';

const MainLayout = ({children}) => {
    return (
   
       <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap demo</title>
  <link rel="stylesheet" href="assets/css/global.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style dangerouslySetInnerHTML={{ __html: "\n  \n " }} />
  <header>
    <nav>
      <div className="buttons container my-4">
        <button className="button-nav me-2">Dashbaod</button>
        <button className="button-nav me-2">Workspace</button>
        <button className="button-nav me-2">Due List</button>
      </div>
    </nav>
  </header>
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

export default MainLayout;