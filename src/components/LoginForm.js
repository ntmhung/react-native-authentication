/**
 * Created by minhhung on 6/2/18.
 */
import React, {Component} from "react";
import {Text} from "react-native";
import {Button, Card, CardSection, Input, Spinner} from "./common";
import firebase from "firebase";

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const {email, password} = this.state;

        this.setState({
            error: '',
            loading: true
        });

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(
                this.onLoginSuccess.bind(this)
            )
            .catch(() => {
                firebase.auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        })
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <Spinner size="small"/>
            );
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@example.com"
                        value={this.state.email}
                        onChangeText={ email => this.setState({email}) }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={ password => this.setState({password}) }
                    />
                </CardSection>

                <Text style={styles.errorMessageStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorMessageStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};


export default LoginForm;