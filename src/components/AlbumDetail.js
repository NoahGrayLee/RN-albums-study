import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// class AlbumDetail extends Component {
//     render() {
//         return (

//         );
//     }
// }

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.albumData.title}</Text>
            </CardSection>
        </Card>
    )
};

export default AlbumDetail;