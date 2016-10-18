'use strict';

var React = require('react');
var ReactNative = require('react-native');
var PropTypes = React.PropTypes;

var {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} = ReactNative;

var CheckBox = React.createClass({
  propTypes: {
    checkboxStyle: Image.propTypes.style,
    checked: PropTypes.bool,
    checkedImage: PropTypes.number,
    containerStyle: View.propTypes.style,
    label: PropTypes.string,
    labelContainerStyle: View.propTypes.style,
    labelStyle: Text.propTypes.style,
    onChange: PropTypes.func,
    touchableStyle: TouchableHighlight.propTypes.style,
    uncheckedImage: PropTypes.number,
    underlayColor: PropTypes.string,
  },

  getDefaultProps() {
    return {
      label: 'Label',
      labelBefore: false,
      checked: false,
      checkedImage: require('./cb_enabled.png'),
      uncheckedImage: require('./cb_disabled.png'),
      underlayColor: 'white'
    }
  },

  onChange() {
    if(this.props.onChange){
      this.props.onChange(!this.props.checked);
    }
  },

  render() {
    var source = this.props.uncheckedImage;

    if(this.props.checked){
      source = this.props.checkedImage;
    }

    var container = (
      <View
        style={[
          styles.container,
          this.props.containerStyle
        ]}
      >
        <Image
          style={[
            styles.checkbox,
            this.props.checkboxStyle
          ]}
          source={source}
        />
        <View
          style={[
            styles.labelContainer,
            this.props.labelContainerStyle
          ]}
        >
          <Text
            style={[
              styles.label,
              this.props.labelStyle
            ]}
          >
            {this.props.label}
          </Text>
        </View>
      </View>
    );

    if (this.props.labelBefore) {
      container = (
        <View
          style={[
            this.props.containerStyle,
            styles.container
          ]}
        >
          <View
            style={[
              styles.labelContainer,
              this.props.labelContainerStyle
            ]}
          >
            <Text
              style={[
                styles.label,
                this.props.labelStyle
              ]}
            >
              {this.props.label}
            </Text>
          </View>
          <Image
            style={[
              styles.checkbox,
              this.props.checkboxStyle
            ]}
            source={source}
          />
        </View>
      );
    }

    return (
      <TouchableHighlight
        onPress={this.onChange}
        underlayColor={this.props.underlayColor}
        style={this.props.touchableStyle}
      >
        {container}
      </TouchableHighlight>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: 26,
    height: 26
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  label: {
    fontSize: 15,
    color: 'grey'
  }
});

module.exports = CheckBox;
