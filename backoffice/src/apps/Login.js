import { Component } from 'react';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Grid from '@cloudscape-design/components/grid';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import '../utils/css/utils.css';
import DIContainer from '../services/DIContainer';
import { Navigate } from 'react-router-dom';

const grid = [
    { colspan: { default: 12, xxs: 12 } },
    { colspan: { default: 12, xxs: 12 } },
    { colspan: { default: 12, xxs: 12 } },
];

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            authCheck: false,
            loginButton: {
                loading: false,
            },
        };
    }

    render() {
        return (
            <Container className="container-to-center" header={<Header variant="h1">Green Readings</Header>}>
                <Grid gridDefinition={grid}>
                    <Input
                        onChange={(event) => this.setState({ username: event.detail.value })}
                        value={this.state.username}
                        placeholder="Username"
                    />
                    <Input
                        onChange={(event) => this.setState({ password: event.detail.value })}
                        value={this.state.password}
                        placeholder="Password"
                        type="password"
                    />
                    <Button
                        iconAlign="right"
                        iconName="user-profile"
                        variant="normal"
                        onClick={this._login.bind(this)}
                        loading={this.state.loginButton.loading}
                    >
                        Enter
                    </Button>
                </Grid>
                {this.state.authCheck && <Navigate replace={true} to="/portal"></Navigate>}
            </Container>
        );
    }

    async _login() {
        this.setState({ loginButton: { loading: true } });
        await new Promise((resolve) => setTimeout(resolve, 500));

        const { username, password } = this.state;

        try {
            await DIContainer.getUserService().login(username, password);
        } catch (error) {
            console.log(error);
        }

        this.setState({ authCheck: true });

        console.log(username, password);
    }
}
