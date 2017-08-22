import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

const CardView = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex:1,
    // borderWidth: 1,
    // borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    // shadowColor: 'lightgray',
    // shadowOffset: { width: 3, height: 3 },
    // shadowOpacity: .5,
    //shadowRadius: 2,
    elevation: 1,
    // marginLeft: 15,
    // marginRight: 15,
     marginTop: 15,
    // padding: 15,
  }
};

export { CardView };
