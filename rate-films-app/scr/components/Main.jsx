import React from "react";
import Constants from 'expo-constants'
import { Text, View} from 'react-native'
import ReposList from "./RepositoryList";

const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <Text> Film Application </Text>
            <ReposList/>
        </View>
    )
}

export default Main