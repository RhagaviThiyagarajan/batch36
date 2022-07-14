
import './App.css';
import React from 'react';

import  {Card,CardGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export function App()
{
  return(
    <CardGroup>
    <Card className="card" style={{width : '100rem'}}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title className="card-title">
        <p>FREE</p>
        <p><b>$0/month</b></p>
        </Card.Title>
        <Card.Text>
        <p>Single User</p>
        <p>5GB Storage</p>
        <p>Unlimited Public Projects</p>
        <p>Community Access</p>
        <p>Unlimited Private Projects</p>
       <p>Dedicated Phone Support</p>
       <p>Free Subdomain</p>
        <p>Monthly Status Reports</p>
       <Button>BUTTON</Button>
        </Card.Text>
      </Card.Body>

      <Card>
        <Card.img variant="top"></Card.img>
        <Card.Body>
          <Card.Title>
            <p>PLUS</p>
             <p>$9/month</p>
          </Card.Title>
          <Card.Text>
          <p>5 Users</p>
<p>50GB Storage</p>
<p>Unlimited Public Projects</p>
<p>Community Access</p>
<p>Unlimited Private Projects</p>
<p>Dedicated Phone Support</p>
<p>Free Subdomain</p>
<p>Monthly Status Reports</p>
<Button>BUTTON</Button>
          </Card.Text>
        </Card.Body>
      </Card>
<Card>
  <Card.Img variant="top"></Card.Img>
    <Card.Body>
      <Card.Title>
        <p>PRO</p>
<       p>$49/month</p>
      </Card.Title>
      <Card.Text>
        <p>Unlimited Users</p>
<p>150GB Storage</p>
<p>Unlimited Public Projects</p>
<p>Community Access</p>
<p>Unlimited Private Projects</p>
<p>Dedicated Phone Support</p>
<p>Unlimited Free Subdomains</p>
<p>Monthly Status Reports</p>
<Button>BUTTON</Button>       
</Card.Text>
</Card.Body>
</Card>






    </Card>
    </CardGroup>

  )
}
export default App;

