import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import Product from "../components/Product";
import axios from "axios";
// import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useLocation, useSearchParams } from "react-router-dom";
// import Paginate from "../components/Paginate";

const HomeScreen = () => {
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

export default HomeScreen;
