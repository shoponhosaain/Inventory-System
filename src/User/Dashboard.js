import React from "react";
import DashboardLayout from "./../Components/dashboard/DashboardLayout";
import Header from "./../Components/header/Header";
import DashboradCard from "./../Components/dashboard/DashboradCard";
import Profile from "./../Components/dashboard/Profile";
import TableMain from "./../Components/dashboard/TableMain";
import Footer from "./../Components/footer/footer";
import data from "../mockDatabase/order.json"

const Dashboard = () => {
  return (
    <>
      <Header active={"active"}/>
      <DashboardLayout>
        <DashboradCard />
        <Profile />
        <TableMain value={data} />
      </DashboardLayout>
      <Footer />
    </>
  );
};

export default Dashboard;
