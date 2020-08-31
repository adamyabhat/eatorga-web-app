import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/product-actions/fetchProductsAction";
import Slider from "./Slider";
import Tabs from 'react-bootstrap/Tabs';
import Categories from "../Categories";
import { Link } from "react-router-dom";
import AllProducts from "../AllProducts";
import Tab from 'react-bootstrap/Tab';
import ProductsCarousel from "./ProductsCarousel";


function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Tabs defaultActiveKey="products" id="homepage-tabs">
      <Tab eventKey="products" title="PRODUCTS">
      <ProductsCarousel title='Our Products' productsNumber='1' />
      </Tab>
    <Tab eventKey="profile" title="CATEGORIES">
      <div style = {{
        paddingTop: '30px'
      }}>
        <Categories />
      </div>
    </Tab>
      <Tab eventKey="packages" title="PACKAGES" >
      <Container fluid>
        <Slider />
      </Container>
    </Tab>
    </Tabs>
    // <Container fluid>
    //   <ProductsCarousel title='Popular Products' productsNumber='4' />
    // </Container>
    // {
    //   <Container fluid>
    //     <Slider />
    //   </Container>
    // }
  );
}

export default HomePage;
