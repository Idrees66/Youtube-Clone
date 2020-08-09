import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, KeyboardAvoidingView,TouchableOpacity, ScrollView } from 'react-native';
 import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import youtube from './Api/Youtube';
import VideoDetail from './Components/VideoDetail';
import VideoList from './Components/VideoList';

export default class App extends Component {

  state = {
    // searchItem: '',
    searchTerm : '',
    videos : [],
    selectedVideo : null,
    video : [
      {
        thumbnail : "https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp",
        title : "A very beautiful amazing Scene"
      },
      {
        thumbnail : "https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg",
        title : "A very beautiful amazing Scene from Mountain"
      },
      {
        thumbnail : "https://www.popsci.com/resizer/2tN5JhomrdxbKVnC3I27_XOz1Zw=/760x570/filters:focal(600x450:601x451)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/UQL4MLA6MXE6ECSZHOSXA3LA4E.jpg",
        title : "A very beautiful amazing Scene Sky"
      },
    ]
  }

componentDidMount() {
  this.fetchData();
}


  keyPress = (event)=> {
    if(event.nativeEvent.key === 'Enter'){
      console.log("Enter Pressed")
    }
    else{
      console.log("Nothing")
    }
  }
 
   fetchData = async (searchItem) =>{
     console.log("Searched Item: ",searchItem);
    
     try{
       const response = await youtube.get("search", {
         params: {
           part: "snippet",
           maxResults: 5,
           key: "AIzaSyA85-n-g4r2TiM-dUISTFYLLcAKBEf8GRY",
           q: searchItem,
         }
       })
      this.setState({videos: response.data.items, selectedVideo : response.data.items[0]})
     }
     catch(error){
       console.log("Ooops Couldnt get Response",error);
     }
 
   }

   onVideoSelect = (video)=>{
    //  console.log("Video Selection Called: ",video);
    this.setState({ selectedVideo : video});
  }

  render(){
  return (
    <KeyboardAvoidingView style={styles.container} 
  >
      <View style={styles.header}>
      <View style={{flex:1, flexDirection:'column',paddingVertical:0}}>
          <Image style={styles.pic} source={require('./assets/youtubePic.gif')} resizeMode='contain' />
        </View>
        <View style={{ flexDirection: 'row'}}  >

        <TextInput  style={styles.textInput}
          placeholder="Search..."
           onChangeText={(text)=>this.setState({searchTerm : text})}
      
             />   
      <Button
                type="clear"
                onPress={()=>this.fetchData(this.state.searchTerm)}
                icon ={
                  <Icon
                  style={{paddingLeft: 10,marginTop:5}}
                  name="search"
                  size={25}
                  color="rgba(255,255,255,0.9)"         
              />
                }
              />
        </View> 
        


      </View>
      <View style={styles.footer}>

        <VideoDetail  video={this.state.selectedVideo}  />

        <VideoList videos={this.state.videos}  onVideoSelect={this.onVideoSelect}  />
         
      </View>
    </KeyboardAvoidingView>
  );
  }
}

const w = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'rgb(33,33,33)',
    // backgroundColor:'white',
    paddingBottom:30,
  },
  header:{
    flex:1,
    backgroundColor:'rgb(224, 74, 40)',
    borderBottomEndRadius:80,
    borderWidth:3,
    shadowColor:'white',
    elevation:10,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  footer : {
    flex:3,
    alignItems: 'center',
    backgroundColor : 'rgb(34,34,34)',
  },
  pic:{
    width:160,
    height:160,
  },
  clone:{
    fontSize:35,
    fontWeight:'bold',
    color:'rgba(0,0,0,0.6)',
  },
textInput:{
  fontSize:20,
  padding: 10,
  paddingHorizontal: 20,
  borderWidth:2,
  borderColor:'rgba(0,0,0,0.6)',
  width:w-110,
  marginBottom:20,
  elevation:10,
  backgroundColor:'rgba(255,255,255,1)',
  borderRadius:15,
  
}

});
