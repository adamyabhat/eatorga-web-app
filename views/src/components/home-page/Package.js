import React, { useState } from "react";
import { useSelector } from "react-redux";
import img1 from "./../../assets/pictures/eatorga-gold-package.jpg";
import img2 from "./../../assets/pictures/eatorga-silver-package.jpg";
import img3 from "./../../assets/pictures/eatorga-prime-package.jpg";
import img4 from "./../../assets/pictures/eatorga-custom-package.jpg";
import { Button, Col, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function Package() {
  const { user, auth, loading } = useSelector(state => state.userrr);
  const [modalShow, setModalShow] = useState(false);
  const [packageSelected, setPackageSelected] = useState('');
  console.log(user,auth,loading)

  const packages= [
    {
      "image":img1,
      "title":"gold"
    },
    {
      "image":img2,
      "title":"silver"
    },
    {
      "image":img3,
      "title":"prime"
    },{
      "image":img4,
      "title":"custom"
    }
  ]
  let nonuser;
  if (!auth.isCustomer && !loading) {
    nonuser= (
      <div >
        <h1 style={{color:'#02700a', margin:'36px'}}>Hello User,</h1>
        <h5 style={{color:'#02700a', margin:'36px'}}>Register with us for our package service</h5>
        {packages.map(packageSelected => {
          return(
          <Col className='product-card'>
          <Card>
            {/* <Link to={`/product/${product._id}`}> */}
              <Card.Img
                className='product-card-image'
                variant='top'
                src={packageSelected.image}
               />
            {/* </Link> */}
              <Card.Body className='product-details'>
                <Card.Title className='product-name'>
                  {packageSelected.title} Package
                  {/* <Link to={`/product/${product._id}`}>{product.name}</Link> */}
                </Card.Title>
                {/* <Card.Text></Card.Text> */}
                <Button 
                  onClick={() => {
                    setModalShow(true)
                    setPackageSelected(packageSelected.title)
                  }}
                  style={{backgroundColor: '#02700a'}}>Click to know more!!</Button>
              </Card.Body>
          </Card>
          </ Col>
          )  
        })
        } 
        <MyVerticallyCenteredModal
        show={modalShow}
        packageSelected={packageSelected}
        onHide={() => setModalShow(false)}
      />
      </div>
    )
  }

  return (
    <div>{nonuser}</div>        
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Package Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h4>{props.packageSelected} Package</h4>
        <p>
          You have to be a registered customer to choose a package.
          The package is coustomised to families!!!
          click on register to signup with eatorga
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to={'/signup'}>
          <Button onClick={props.onHide}>Register</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default Package;
