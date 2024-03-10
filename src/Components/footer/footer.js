import React from 'react';

const Footer = () => {
    return (
        <>

       <div class="container mt-5">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg class="bi" width="30" height="24">/</svg>
            </a>
            <span class="text-muted">&copy; 2021 Company, Inc</span>
          </div>
      
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><svg class="bi" width="24" height="24"></svg></li>
            <li class="ms-3"><svg class="bi" width="24" height="24"></svg></li>
            <li class="ms-3"><svg class="bi" width="24" height="24"></svg></li>
          </ul>
        </footer>
      </div>
      
      <div class="b-example-divider"></div>
      
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">Home</li>
            <li class="nav-item">Features</li>
            <li class="nav-item">Pricing</li>
            <li class="nav-item">FAQs</li>
            <li class="nav-item">About</li>
          </ul>
          <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
      </div>
        
        </>
    );
};

export default Footer;