import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

function ArticleScreen({route}) {
    const {article} = route.params;

    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => { dispatch(addClip({clip: article}))} }>
                <Text style={{ margin:10, fontSize: 30}}>add Clip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { dispatch(deleteClip({clip: article}))} }>
                <Text style={{ margin:10, fontSize: 30}}>DELETE Clip</Text>
            </TouchableOpacity>
            <WebView source={{ uri: article.url}}></WebView>
        </SafeAreaView>
    );
}

export default ArticleScreen;
