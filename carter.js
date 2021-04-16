import react from 'react';
import LottieView from 'lottie-react-native'
export default class BookSanta extends React.Component{
    render(){
        return(
            <LottieView source={require('../assets/santa.json')} style={{width:'60%'}} autoPlay loop>
            </LottieView>
        )
    }
}