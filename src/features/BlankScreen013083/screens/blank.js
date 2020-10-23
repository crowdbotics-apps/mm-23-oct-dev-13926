import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { CheckBox_3: true, CheckBox_4: true }

  render = () => (
    <View>
      <Icon name="star" />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Icon_2: {},
  CheckBox_3: {},
  CheckBox_4: {}
})
