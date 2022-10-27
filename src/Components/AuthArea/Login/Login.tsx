import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../Redux/Store";
import authService from "../../../Services/AuthService";
import { Button, Container, Form, Input, Link, Title, Wrapper,Error } from "./Login.styled";

function Login(): JSX.Element {
    const [username, setUsername] = useState<any>("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    let {isFetching,error} = useAppSelector(state => state.user);

    async function handleClick(e:SyntheticEvent):Promise<void> {
        e.preventDefault();
        await authService.login({username, password});
        if(isFetching){
            navigate("/home");
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e:SyntheticEvent)=> setUsername((e.target as HTMLInputElement).value)}/>
                    <Input placeholder="Password" type="password" onChange={(e:SyntheticEvent)=> setPassword((e.target as HTMLInputElement).value)}/>
                    <Button onClick={handleClick} disabled={isFetching} >LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW  ACCOUNT?</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;
