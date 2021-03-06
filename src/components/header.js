import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerTitle}</Text>)
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
      color: '#333',
      fontSize: 16,
    }
  });

export default Header;