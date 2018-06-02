/**
 * Created by minhhung on 6/2/18.
 */
import React from "react";
import {Text, TouchableOpacity} from "react-native";

const Button = ({onPress, children}) => {
    const {buttonStyle, buttonTextStyle} = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={buttonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export {Button};
