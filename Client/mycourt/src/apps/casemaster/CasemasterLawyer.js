import {viewLawyer} from '../../Service/profileService';
import { React, useState, useEffect } from 'react'
import {Button, Card, CardHeader, CardBody, CardTitle, FormGroup, Form, Input, Row, Col} from "reactstrap";
import Casemasternav from '../public/Casemaster/Casemasternav';

function CasemasterLawyer(){
    const [lawyer, setLawyers] = useState([]);
    useEffect(()=>{
        viewLawyer().then((data)=>{
            setLawyers(data.data);
        })
    },[])
    return(
        <>
         <Casemasternav />
        <div className="content">
<Row>
    <Col md="8">
        <Card className="card-user">
            <CardHeader>
                <CardTitle tag="h5">Lawyer</CardTitle>
            </CardHeader>
            <CardBody>
                <Form>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label>Lawyer Name :</label>
                                <Input
                                    placeholder="Name"
                                    type="text" readOnly
                                    value={lawyer.name}
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label>Contact Number</label>
                                <Input
                                    placeholder="Contact"
                                    type="text" readOnly
                                    value={lawyer.phone}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pl-2" md="6">
                            <FormGroup>
                                <label htmlFor="exampleInputEmail1">
                                    Email address
                                </label>
                                <Input placeholder="Email" type="email" readOnly value={lawyer.email} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pl-2" md="6">
                            <FormGroup>
                                <label htmlFor="exampleInputEmail1">
                                    barCouncilNo
                                </label>
                                <Input placeholder="text" type="barCouncilNo" readOnly value={lawyer.barCouncilNo} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label>Address</label>
                                <Input
                                    placeholder="Home Address"
                                    type="text" readOnly
                                    value={lawyer.address}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    </Col>
</Row>

</div>
        </>
    )
}
export default CasemasterLawyer;