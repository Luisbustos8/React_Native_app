import React from "react";
import {Image, View, StyleSheet} from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const FilmItemHeader = (props) => {

    return (
        <View style={{flexDirection: 'row', paddingBottom: 2}}>
            <StyledText fontSize='subheading' fontWeight='bold' >{props.name}</StyledText>
                    <Image style={styles.image} source={{uri: props.image}} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <StyledText style={styles.gender}> {props.gender}</StyledText>
                        <StyledText style={styles.year}>{props.year}</StyledText>
                    </View>
        </View>
    )
}

export default FilmItemHeader;