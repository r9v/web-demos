import * as React from "react";
import Modal from "../components/Modal";
import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
  return (
    <>
      <ToastContainer newestOnTop />
      <Layout>
        <title>Simple Modal</title>
        <Modal />
      </Layout>
    </>
  );
};

export default IndexPage;
