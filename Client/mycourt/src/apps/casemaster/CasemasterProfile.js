import { React, useState, useEffect } from 'react'
import Casemasternav from '../public/Casemaster/Casemasternav';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col

} from "reactstrap";
import { profile } from "../../Service/profileService"

function GetCasemasterProfile() {

    const [lawyer, setLawyers] = useState([]);

    useEffect(() => {
        profile().then((data)=>{
            setLawyers(data);
           
        })
        
    }, []);
    return (
        <>
            <Casemasternav />
            <div className="content">
                <Row>
                    <Col md="8">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">Profile</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <FormGroup>
                                                <label>Name :</label>
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
export default GetCasemasterProfile;