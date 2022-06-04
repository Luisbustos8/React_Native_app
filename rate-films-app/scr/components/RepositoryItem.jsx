import React from "react";
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText'

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 5, 
        paddingTop:5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom:5

    }
})
const RepositoryItem = (props) => {
    return (
            <View key={props.id} style={styles.container}>
                    <StyledText fontSize='subheading' fontWeight='bold' >Name:{props.name}</StyledText>
                    <StyledText   >Description:{props.description}</StyledText>
                    <StyledText  >Image:{props.image}</StyledText>
            </View>
    )
}

export default RepositoryItem