/**
 * Created by minhhung on 6/2/18.
 */
import React, {Component} from "react";
import {View} from "react-native";
import {Header, Button, Spinner} from "./components/common";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

class App extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        let config = {
            apiKey: "AIzaSyDpJ45k3et5eNP3z3WqfDWKvH4eoCGj458",
            authDomain: "react-native-authenticat-cbd94.firebaseapp.com",
            databaseURL: "https://react-native-authenticat-cbd94.firebaseio.com",
            projectId: "react-native-authenticat-cbd94",
            storageBucket: "react-native-authenticat-cbd94.appspot.com",
            messagingSenderId: "662030659105"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return (<LoginForm/>);
            default:
                return (<Spinner size='large'/>);
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;