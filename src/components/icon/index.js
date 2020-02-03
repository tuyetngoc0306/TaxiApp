import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

class IconComponent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    fontFamily: PropTypes.oneOfType([
      'AntDesign',
      'Entypo',
      'EvilIcons',
      'Feather',
      'FontAwesome',
      'Ionicons',
      'MaterialCommunityIcons',
      'MaterialIcons',
    ]),
    style: Text.propTypes.style,
    color: PropTypes.string,
  };

  static defaultProps = {
    name: 'Home',
    fontFamily: 'Entypo',
    style: PropTypes.string,
    color: 'black',
  };
  render() {
    const {fontFamily, ...rest} = this.props;
    switch (fontFamily) {
      case 'AntDesign':
        return <AntDesign {...rest} />;
      case 'EvilIcons':
        return <EvilIcons {...rest} />;
      case 'Entypo':
        return <Entypo {...rest} />;
      case 'Feather':
        return <Feather {...rest} />;
      case 'MaterialIcons':
        return <MaterialIcons {...rest} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons {...rest} />;
      case 'FontAwesome':
        return <FontAwesome {...rest} />;
      default:
        return <Ionicons {...rest} />;
    }
  }
}

export default IconComponent;
