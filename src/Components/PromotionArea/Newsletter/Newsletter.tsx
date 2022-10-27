import { Button, Container, Description, Input, InputContainer, Title } from "./Newsletter.styled";
import SendIcon from '@mui/icons-material/Send';

function Newsletter(): JSX.Element {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products</Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button><SendIcon/></Button>
            </InputContainer>
        </Container>
			
    );
}

export default Newsletter;
