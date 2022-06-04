import React from "react";
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText'



const RepositoryStats =  props => {
    return (
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View>
                <StyledText align='center' fontWeight='bold'>Starts:</StyledText>
                 <StyledText align='center' >{props.stars}</StyledText>
            </View>
            <View>
                <StyledText align='center'  fontWeight='bold'>Ratings:</StyledText>
                  <StyledText align='center' > {props.ratings}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Watch:</StyledText>
                 <StyledText align='center' >{props.view ? 'View' : 'Not seen'}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats