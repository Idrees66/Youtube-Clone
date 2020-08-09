import React from 'react'
import { Text, View,StyleSheet, Image,Dimensions } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'


const VideoDetail = (props) => {
    const {video} = props;
    if(!video){ 
    return (
    <View>
        <Text>.</Text>
    </View>
    )}

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        const {videoId}= video.id;
    const {channelTitle,description,thumbnails} = video.snippet;
    return ( 
        <View style={styles.container}>
            <View style={styles.info} >
             <Text  style={styles.channel} >{channelTitle} </Text>
             </View>
            <YoutubePlayer
                    // ref={playerRef}
                    height={300}
                    width={360}
                    style={{alignSelf: 'stretch',  marginHorizontal:0, backgroundColor:'rgb(33,33,33)',  }}
                    // resizeMode="cover"
                //    webViewStyle={{}}
                    videoId={videoId}
                    
                    // play={playing}
                    // onChangeState={event => console.log(event)}
                    // onReady={() => console.log("ready")}
                    // onError={e => console.log(e)}
                    // onPlaybackQualityChange={q => console.log(q)}
                    volume={50}

                    // playbackRate={1}
                    // playerParams={{
                    //     cc_lang_pref: "us",
                    //     showClosedCaptions: true
                    // }}
                    />

            {/* <Image style={styles.thumbnail} source={{ uri : thumbnails.default.url}}   resizeMode='contain' /> */}
            {/* <View style={styles.info} > */}
            {/* <Text  style={styles.title} >{props.video.snippet.title} - {props.video.snippet.channelTitle} </Text> */}
            {/* <Text  style={styles.channel} >{channelTitle} </Text> */}
            {/* <Text  style={styles.desc}  >" {description} "</Text> */}
            {/* </View> */}
        </View>
     );
}
 
export default VideoDetail;

const w = Dimensions.get('screen').width;
const styles= StyleSheet.create({
    container:{
        // backgroundColor:'white',
        // elevation:10,
        // marginVertical:20,
        // marginHorizontal:10,
        // padding: 15,
    },

      thumbnail:{
          width: w-60,
          height:w,
      },
      title :{
          color:'rgba(0,0,0,0.7)',
          fontSize:15,
          fontWeight:'bold',
          borderBottomWidth:2,
          borderColor:'rgba(0,0,0,0.3)',
          paddingBottom:10
      },
      channel : {
        fontSize:17,
        fontWeight:'bold',
        marginBottom:10,
        color:'rgb(224, 74, 40)',
        marginTop:10,
        borderLeftWidth:4,
        borderColor:'rgb(224, 74, 40)',
        paddingHorizontal:10,
      },
      desc:{
        color:'rgba(0,0,0,0.7)',
      },
      info:{
        marginHorizontal:10,
        padding: 15,
    },

});


