import {Agreement, Button, Container, Form, Input, Title, Wrapper} from "./Register.styled";

function Register(): JSX.Element {
    return (
        <Container>
            <Wrapper>
                <Title>Register</Title>
                <Form>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Agreement>
                        By creating an account, i consent to the processing of my personal data
                        in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>

			
        </Container>
    );
}

export default Register;
