import React, { Component } from 'react'
import { Text, View,StyleSheet,FlatList, Dimensions,TouchableOpacity,Image,Button} from 'react-native'

export default class VideoList extends Component {



    renderItem = ({item})=>{
      
       const {thumbnails, title } = item.snippet;
        return(
          
            <View style={styles.albumItem}>
              
                    <Text style={styles.title} >{title}</Text>
                    <TouchableOpacity  onPress={()=>this.props.onVideoSelect(item)} >
                    <Image source={{uri : thumbnails.medium.url}}  style={styles.image}   resizeMode="cover"  />
                    </TouchableOpacity> 
              
            </View>
      
        )}

    
    ItemSeparatorComponent = ()=>(
        <View style={{ height:10}} ></View>
    )

    render() {
        const {videos,onVideoSelect} = this.props;
    //    console.log("Video Album :", videos )
        return (

        <View style={styles.flatList} >
     
           <FlatList
               data = {videos}
               renderItem = {this.renderItem}
               keyExtractor = {(item,id)=> id.toString()}
               ItemSeparatorComponent={this.ItemSeparatorComponent}
               horizontal={true}
               onVideoSelect={onVideoSelect} 
               showsHorizontalScrollIndicator={true}
              
           />         
       </View>

        )
    }
}


const w = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    flatList: {
        // flex:1,
        marginTop:-80,
        width: w-25,
        // marginBottom:90,
    //    alignItems:'center',
    //    justifyContent:'center',
    //    alignSelf:'center,'
        // backgroundColor:'beige',
        // flexDirection:'row'
      },
    albumItem: {
        backgroundColor:'rgb(33,33,33)',
        // backgroundColor : 'rgba(185, 18, 118,0.4)',
        // flex:1,
        // position:'relative',
        // flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center',
        padding:0,
        elevation:5,

        marginHorizontal:10,

        // padding:20,
        borderColor:'black',
        // borderWidth:1,
        // margin: 10,
        // borderTopLeftRadius:40,
        // borderBottomRightRadius:60,
        borderRadius:10,
        // padding:20,
        // margin:10,
        
    },
    image: {
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        width: w-45,
        height:250,
        // marginTop:20,
        // borderTopLeftRadius:100,
        // borderBottomRightRadius:100,
        
    },
    title:{
        paddingLeft:13,
        marginBottom:20, 
        color:'rgb(224, 74, 40)', 
        width:w-35 ,
        borderLeftWidth:5,
        borderColor:'rgb(224, 74, 40)',
    
       
    }


})