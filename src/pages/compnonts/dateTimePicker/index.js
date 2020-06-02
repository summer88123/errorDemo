// 时间类型 ① Time 时间类型 ② YearMonthDay 年月日 ③ YearMonth 年月 ④ Year 年
// fullTime ①true 全部时间; ②false 今天及以后  
import React from "react";
import { View, Text, PickerView, PickerViewColumn, Icon } from '@tarojs/components';
import { getPickerViewList, getDate, getArrWithTime, formatDate, getDayList } from './utils';
import './index.less';

const fullMonthLsit = ["1","2","3","4","5","6","7","8","9","10","11","12"];
const now = new Date();

export default class DateTimePicker extends React.Component {
    static externalClasses = ['wrap-class', 'select-item-class'];
    constructor(props) {
        super(props);
        this.nowYear = now.getFullYear();
        this.nowMonth = 5;
        this.nowDay = 28;
        this.state = {
            yearList: [],   //年 -下拉
            monthLsit: [], //月 -下拉
            dayList: [], //日 -下拉
            hourList: [], //时 -下拉
            minuteList: [], //分 -下拉
            selectIndexList: [1, 1, 1, 1, 1], //PickerViewColumn选择的索引
            fmtInitValue: "", //初始值
            current: '', //当前选择的数据
            visible: false, //是否可见
            hasChange: false, //是否更改
            year: '',  //时间值
            month: '',
            day: '',
            hour: '',
            minute: '',
        };
    }
    
    // 打开时间选择的模态框 - 根据当前时间初始化picker-view的数据
    openModal = () => {
        console.log('ready打开选时间')
        const { current, fmtInitValue } = this.state;
        const { type } = this.props;
        const selectIndexList = [];
        const arr = getArrWithTime(current || fmtInitValue || getDate(undefined, this.props.type), type); //优先当前选择的值，其次默认值，其次当前值
        let { yearList, monthLsit, dayList, hourList, minuteList } = getPickerViewList(this.props.fullTime);
        let [year, month, day, hour, minute] = arr;
        let _monthLsit, _dayList;
        if(this.props.fullTime){
            _monthLsit = monthLsit;
            dayList = getDayList(year, month);
            _dayList = dayList;
        }else{
            if(year < this.nowYear){
                arr[0] = this.nowYear + '';
                arr[1] = this.nowMonth + '';
                arr[2] = this.nowDay + '';
                if(this.props.type !== 'Time'){
                    arr[3] = '0';
                    arr[4] = '0';
                    hour = 0;
                    minute = 0;
                }
                year = this.nowYear;
                month = this.nowMonth;
                day = this.nowDay;
               
            }
            if(year == this.nowYear && month < this.nowMonth){
                arr[1] = this.nowMonth + '';
                arr[2] = this.nowDay + '';
                month = this.nowMonth;
                day = this.nowDay;
                if(this.props.type !== 'Time'){
                    arr[3] = '0';
                    arr[4] = '0';
                    hour = 0;
                    minute = 0;
                }
            }
            if(year == this.nowYear && month == this.nowMonth && day < this.nowDay){
                arr[2] = this.nowDay + '';
                day = this.nowDay;
                if(this.props.type !== 'Time'){
                    arr[3] = '0';
                    arr[4] = '0';
                    hour = 0;
                    minute = 0;
                }
            }
            _monthLsit = monthLsit.slice(monthLsit.indexOf(this.nowMonth + ''));
            dayList = getDayList(year, month)
            _dayList = dayList.slice(dayList.indexOf(this.nowDay + ''));
        }
        //根据arr  数据索引
        selectIndexList[0] = yearList.indexOf(arr[0]);
        selectIndexList[1] = _monthLsit.indexOf(arr[1]);
        selectIndexList[2] = _dayList.indexOf(arr[2]);
        selectIndexList[3] = hourList.indexOf(arr[3]);
        selectIndexList[4] = minuteList.indexOf(arr[4]);
        this.setState({
            selectIndexList,
            visible: true,
            yearList,
            monthLsit: _monthLsit,
            dayList: _dayList,
            hourList,
            minuteList,
            year,
            month,
            day,
            hour,
            minute
        });
    };
    // 取消
    cancelHandel = () => {
        this.setState({
            visible: false,
            hasChange: false,
        });

        const { year, month, day, hour, minute } = this.state;
        const current = formatDate(year, month, day, hour, minute, this.props.type);
        this.props.onCancel && this.props.onCancel({ current });
    };
    // 确定
    okHandel = () => {
        const { year, month, day, hour, minute } = this.state;
        const current = formatDate(year, month, day, hour, minute, this.props.type);

        this.setState({
            current,
            hasChange: false,
            visible: false,
        });
        console.log(current, 'current1')
        this.props.onOk && this.props.onOk(current);
    };
    // 切换
    changeHandel = (e) => {
        const { type } = this.props;
        let selectIndexList = e.detail.value;
        let [yearIndex, monthIndex, dayIndex, hourIndex, minuteIndex] = selectIndexList;
        const { yearList, monthLsit, dayList, hourList, minuteList } = this.state;
        let month, day, hour, minute;   // 当前滚动显示的时间
        const yearStr = yearList[yearIndex];
        const monthStr = monthLsit[monthIndex];
        const dayStr = dayList[dayIndex];
        const hourStr = hourList[hourIndex];
        const minuteStr = minuteList[minuteIndex];
        const year = Number(yearStr.substr(0, yearStr.length));
        if(type === 'Time' || type === 'YearMonthDay' || type === 'YearMonth'){
            month = Number(monthStr.substr(0, monthStr.length));
        }
        if(type === 'Time' || type === 'YearMonthDay'){
            day = Number(dayStr.substr(0, dayStr.length));
        }
        if(type === 'Time'){
            hour = Number(hourStr.substr(0, hourStr.length));
            minute = Number(minuteStr.substr(0, minuteStr.length));
        }
        let newDayList = getDayList(year, month);
        let nowMonthList = monthLsit;
        if(!this.props.fullTime){
            // ① 滚动的年份大于当前
            if(year > this.nowYear){
                // 重置月份为全月份列表和全月份下的index
                const newMonthIndex = fullMonthLsit.indexOf(month + '');
                selectIndexList[1] = newMonthIndex;
                nowMonthList = fullMonthLsit;
                // 重置天天数列表
                const newDayIndex = newDayList.indexOf(day + '');
                selectIndexList[2] = newDayIndex;
            }else if(year == this.nowYear){
                // 比较滚动月份和今日月份
                if(month <= this.nowMonth){
                    // 重置 月份为今日月份及以后列表、今日月份及以后列表下的index、月份
                    nowMonthList = fullMonthLsit.slice(fullMonthLsit.indexOf(this.nowMonth + ''));
                    selectIndexList[1] = 0;
                    month = this.nowMonth;
                    // 重置 天数为今日及以后列表、今日及以后列表下的index、今日
                    newDayList = getDayList(year, this.nowMonth).slice(getDayList(year, this.nowMonth).indexOf(this.nowDay + ''));
                    if(newDayList.indexOf(day + '') == -1){
                        if(day <= newDayList[0]){
                            selectIndexList[2] = 0;
                            day = Number(newDayList[0])
                        }else if(day >= newDayList[newDayList.length - 1]){
                            selectIndexList[2] = newDayList.length - 1;
                            day = Number(newDayList[newDayList.length - 1])
                        }
                    }else{
                        selectIndexList[2] = newDayList.indexOf(day + '');
                    }
                }
                else if(month > this.nowMonth){
                    // 重置天全列表下的index
                    if(newDayList.indexOf(day + '') == -1){
                        if(day <= newDayList[0]){
                            selectIndexList[2] = 0
                        }else if(day >= newDayList[newDayList.length - 1]){
                            selectIndexList[2] = newDayList.length - 1
                        }
                    }else{
                        selectIndexList[2] = newDayList.indexOf(day + '');
                    }
                }
            }
        }
        // 更新年、天数
        this.setState({
            dayList: newDayList,
            monthLsit: nowMonthList,
            selectIndexList,
            year,
            month: month || this.state.month,
            day: day || this.state.day,
            hour: hour || this.state.hour,
            minute: minute || this.state.minute,
            hasChange: true,
        });
        // setTimeout(() => {
        //     this.setState({
        //         selectIndexList,
        //     })
        // }, 0)
    };
    // 清除数据
    clear = () => {
        this.setState({
            current: ''
        });
        this.props.onClear && this.props.onClear({ current: '' });
    };

    componentDidMount() {
        const { initValue } = this.props;
        const fmtInitValue = getDate(initValue);
        this.setState({ fmtInitValue, current: initValue });
    }

    render() {
        const { visible, current, yearList, monthLsit, dayList, hourList, minuteList, selectIndexList } = this.state;
        const { placeholder = '请选择', type = 'Time' } = this.props;
        let textColor = !current ? '#D3D3D3' : '#222';
        let dateText;
        if(current){
            const strArr = ['年', '月', '日'];
            const currentArr = current.split(' ');
            if(currentArr && currentArr.length){
                dateText = ''
                currentArr[0].split('-').map((item, index) => {
                    dateText = dateText + item + strArr[index]
                })
                if( type === 'Time'){
                    dateText = dateText + ' ' + currentArr[1];
                }
            }
        }
        console.log(selectIndexList, 'selectIndexList')
        return (
            <View className="datetime-picker-wrap wrap-class">
                <View className="selector-wrap" onClick={this.openModal} style={{width: '100%', position: 'relative', height: '20px'}}>
                    <View className="select-item select-item-class"  style={{marginTop: '40px', backgroundColor: '#eee', fontSize: '15px', lineHeight: '20px', color: `${textColor}`, position: 'absolute', left: '0', width: 'calc(100%)'}}>
                        {dateText || placeholder}
                    </View>
                </View>
                {visible
                && <View className="wrapper">
                    {/*日期模态框 */}
                    <View className="model-box-bg" onTouchStart={this.cancelHandel}></View>
                    <View className="model-box">
                        <View className="model-picker">
                            <View className="button-model" style={{height: '40px', position: 'relative'}}>
                                <View className="btn-txt" onClick={this.cancelHandel} style={{height: '40px', position: 'absolute', left: '32px', lineHeight: '40px'}}>取消</View>
                                <View className="btn-txt" onClick={this.okHandel} style={{height: '40px', position: 'absolute', right: '32px', lineHeight: '40px'}}>确定</View>
                            </View>
                            <View className="cont_model">
                                <PickerView className="pick-view" indicatorStyle="height: 50px;" value={selectIndexList} onChange={this.changeHandel}>
                                    {/*年*/}
                                    <PickerViewColumn className="picker-view-column">
                                        {
                                            yearList.length && yearList.map((item, index) =>
                                                <View key={String(index)} className="pick-view-column-item">{item}</View>)
                                        }
                                    </PickerViewColumn>
                                    {/*月*/}
                                    { (type === 'Time' || type === 'YearMonthDay' || type === 'YearMonth') && 
                                    <PickerViewColumn className="picker-view-column">
                                        {
                                            monthLsit.length && monthLsit.map((item, index) =>
                                                <View key={String(index)} className="pick-view-column-item">{item}</View>)
                                        }
                                    </PickerViewColumn>
                                    }
                                    {/*日*/}
                                    { (type === 'Time' || type === 'YearMonthDay') && 
                                    <PickerViewColumn className="picker-view-column">
                                        {
                                            dayList.length && dayList.map((item, index) =>
                                                <View key={String(index)} className="pick-view-column-item">{item}</View>)
                                        }
                                    </PickerViewColumn>
                                    }
                                    {/*时*/}
                                    { type === 'Time' && 
                                    <PickerViewColumn className="picker-view-column">
                                        {
                                            hourList.length && hourList.map((item, index) =>
                                                <View key={String(index)} className="pick-view-column-item">{item}</View>)
                                        }
                                    </PickerViewColumn>
                                    }
                                    {/*分*/}
                                    { type === 'Time' && 
                                    <PickerViewColumn className="picker-view-column">
                                        {
                                            minuteList.length && minuteList.map((item, index) =>
                                                <View key={String(index)} className="pick-view-column-item">{item}</View>)
                                        }
                                    </PickerViewColumn>
                                    }
                                </PickerView>
                            </View>
                        </View>
                    </View>
                </View>}
            </View>
        );
    }
}