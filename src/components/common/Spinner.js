import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ sizeData }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={ sizeData || 'large' } />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { Spinner };