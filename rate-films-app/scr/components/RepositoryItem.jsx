import React from "react";
import {Image, View, StyleSheet} from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
// import FilmItemHeader from "./FilmItemHeader";

const FilmItemHeader = (props) => {

    return (
        <View style={{flexDirection: 'row', paddingBottom: 2}}>
                <Image style={styles.image} source={{uri: props.image}} />
                <View style={{ paddingLeft: 4}}>
                    <StyledText fontSize='subheading' fontWeight='bold' >{props.name}</StyledText>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <StyledText style={styles.gender}> {props.gender}</StyledText>
                        <StyledText style={styles.year}>{props.year}</StyledText>
                    </View>
                </View>      
        </View>
    )
    }

const RepositoryItem = (props) => {
    return (
            <View key={props.id} style={styles.container}>
                    <FilmItemHeader {...props} />
                    <StyledText style={styles.description}>{props.description}</StyledText>
                    <RepositoryStats {...props} />
            </View>
    )
}

export default RepositoryItem

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

    },
    gender: {
        padding: 5,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
         borderRadius: 5,
        overflow: 'hidden'
    },
    year: {
        marginLeft: 5, 
        padding: 5,
        color: theme.colors.white,
        backgroundColor: theme.colors.yellow,
        alignSelf: 'flex-start',
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        width: 70,
        height: 100,
        borderRadius: 4
    },
    description: {
        textAlign: 'justify'
    }
})