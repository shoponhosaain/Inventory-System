import React from "react";

const DashboardLayout = ({children},props) => {
  return (
    <>
      <section id="dashboad">
        <div class="container p-0">
          <div class="row mx-auto">
            {children}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;
