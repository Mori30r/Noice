import React from 'react';
import {Text, View, StyleSheet, Dimensions, Button} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.circle}/>
            <View style={styles.header}>
                <View style={styles.iconsContainer} >
                    <Button color="#354895" title="Settings" style={styles.iconHeader} onPress={()=>{}}/>
                    <Button color="#354895" title="Search" style={styles.iconHeader} onPress={()=>{}}/>
                </View>
                <View style={styles.nav}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Your {'\n'}Noices</Text>
                        <View style={styles.progressBarContainer}>
                            <View style={styles.progressBarEmpty}/>
                            <View style={styles.progressBarFull}/>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        </View>
    );
};

const {height, width} = Dimensions.get('screen')


const styles = StyleSheet.create({
    container:{
        height: height,
        width: width,
        backgroundColor: '#001341'
    },
    header:{
        backgroundColor: "#a68eff",
        height: height/3.5,
        borderBottomLeftRadius: width/10,
        borderBottomRightRadius: width/10,
        justifyContent: 'space-around'
    },
    iconsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: '5%',
        minHeight: '8%'
    },
    iconHeader:{},
    circle: {
        width: width,
        height: width,
        borderRadius: width/2,
        backgroundColor: "#ffffff",
        position: "absolute",
        top: height/1.5,
        left: width/2.3,
        opacity: .2
    },
    nav:{
        width: '100%',
        flex: 1,
        paddingHorizontal: width/20,
    },
    headerTextContainer:{
        paddingTop: 30,
        paddingLeft: 5,
        // backgroundColor: 'black',
    },
    headerText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    progressBarContainer:{

    },
    progressBarEmpty:{
        position: 'absolute',
        width: width/4,
        height: 5,
        backgroundColor: 'white',
        borderRadius: 10
    },
    progressBarFull:{
        position: 'absolute',
        width: width/5,
        height: 5,
        backgroundColor: 'green',
        borderRadius: 10
    },
})

export default HomeScreen;
