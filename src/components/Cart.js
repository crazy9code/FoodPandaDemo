import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import {
  Header,
  CardSection
} from './common';

class Cart extends Component {
    constructor() {
      super();
      this.state = {
        value: 1,
      };
    }

    onMinus() {
      if (this.state.value > 0) {
        this.setState({ value: this.state.value - 1 });
      }
    }
    onPlus() {
      this.setState({ value: this.state.value + 1 });
    }

    renderCard() {
      return(
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={require('../images/imgmenu1.png')}
            resizeMode="stretch"
          />
          <View
            style={{flexDirection: 'column', paddingLeft: 10}}>
            <Text style={{fontSize: 14}}>Noodle Soup</Text>
            <Text style={{fontSize: 12}}>Boilded noodle served in</Text>
            <Text style={{fontSize: 12}}>a pot with broth</Text>
          </View>
          <View
            style={{flexDirection: 'row', marginLeft: 20,
              justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 12}}>$2.99</Text>
            <TouchableWithoutFeedback onPress={() => this.onMinus()}>
              <Image
                style={{marginHorizontal:10,width:20,height:20}}
                source={require('../images/minus.png')}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
            <Text>{this.state.value}</Text>
            <TouchableWithoutFeedback onPress={() => this.onPlus()}>
              <Image
                style={{marginLeft:10,width:20,height:20}}
                source={require('../images/round-add-button.png')}
                resizeMode="stretch"
              />
            </TouchableWithoutFeedback>
          </View>
        </CardSection>
      );
    }
    render() {
      return(
        <View style={{backgroundColor: '#f2f2f2', flex: 1}}>
          <Header>
            Cart
          </Header>
            <Text style={{ marginTop: 10, paddingLeft: 10, fontSize: 12}}>MOETS CURRY LEAF</Text>
            {this.renderCard()}
            <Text style={{ marginTop: 10, paddingLeft: 10, fontSize: 12}}>CAFE BY THE KITCHEN</Text>
            {this.renderCard()}
            {this.renderCard()}
            <Text style={{ marginTop: 10, paddingLeft: 10, fontSize: 12}}>CAFE BY THE KITCHEN</Text>
            {this.renderCard()}
            {this.renderCard()}
        </View>
      );
    }
}
const styles = StyleSheet.create({
  imageStyle: {
       width: 50,
       height: 50
  }
});
export default Cart;
