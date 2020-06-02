import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.less'
import DateTimePicker from '../compnonts/dateTimePicker';

export default class Index extends Component {
  state = {
    
  };

  componentWillMount () { }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPickerFinish = date => {
    console.log(date, 'date')
  }
  render () {
    return (
      <View>
          下方点击选择时间
          <View className='skeleton' style={{ height: '500px' }} >
            <DateTimePicker fullTime={false} type={'Time'} initValue={'2018-05-24 11:21'} wrap-class="my-class"  select-item-class="mySelector" onOk={this.onPickerFinish}/>
          </View>
        </View>
    )
  }
}
