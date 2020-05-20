import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components'
import './index.less'
import ListView, { LazyBlock } from 'taro-listview';

const blankList = [{
  author: {},
  title: 'this is a example',
},{
  author: {},
  title: 'this is a example',
},{
  author: {},
  title: 'this is a example',
},{
  author: {},
  title: 'this is a example',
}]
let pageIndex = 1;

export default class Index extends Component {
  state = {
    isLoaded: false,
    error: false,
    hasMore: true,
    isEmpty: false,
    list: blankList,
  };

  componentWillMount () { }

  componentDidMount () { 
    this.refList.fetchInit()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getData = async (pIndex = pageIndex) => {
    if (pIndex === 1) this.setState({isLoaded: false})
    const { data: { data } } = await Taro.request({
      url: 'https://cnodejs.org/api/v1/topics',
      data: {
        limit: 10,
        page: pIndex
      }
    })
    return {list : data, hasMore: true, isLoaded: pIndex === 1};
  };
  pullDownRefresh = async (rest) => {
    pageIndex = 1;
    const res = await this.getData(1);
    this.setState(res);
  };

  onScrollToLower = async () => {
    const {list} = this.state;
    const {list: newList, hasMore} = await this.getData(++pageIndex);
    this.setState({
      list: list.concat(newList),
      hasMore
    });
  };

  refList = {};

  insRef = (node) => {
    this.refList = node;
  };

  render () {
    const {isLoaded, error, hasMore, isEmpty, list} = this.state;
    return (
      <View>
          Demo开启AutoHeight
          <View className='skeleton lazy-view' style={{ height: '500px' }} >
            <ListView
              autoHeight
              lazy
              ref={node => this.insRef(node)}
              isLoaded={isLoaded}
              isError={error}
              hasMore={hasMore}
              // style={{height: '100vh'}}
              isEmpty={isEmpty}
              onPullDownRefresh={this.pullDownRefresh}
              onScrollToLower={this.onScrollToLower}
              renderCustomizeLoading={(<View>自定义</View>)}
              customizeLoading
              lazyStorage='listView'
            >
              {list.map((item, index) => {
                return (
                  <View className='item skeleton-bg' key={`item_${index}`}>
                    <LazyBlock current={index} className='avatar' lazyStorage='listView'>
                      <Image className='avatar skeleton-radius' src={item.author.avatar_url} />
                    </LazyBlock>
                    <View className='box'>
                      <View className='tab'>{item.tab}{item.visit_count}次</View>
                      <View className='time'>{item.create_at}</View>
                      <View className='content'>
                        {item.content}
                      </View>
                      <View className='title skeleton-rect'>
                        {item.title}
                      </View>
                    </View>
                  </View>
                )
              })}
            </ListView>
          </View>
        </View>
    )
  }
}
