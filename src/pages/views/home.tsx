import React, {useEffect} from 'react';
import {setNavigationBarTitle, View, Image, Text,Navigator} from 'remax/wechat';
import {Button, DatePicker, Popup} from 'annar';
import './home.less'

export default () => {
  const [value, setValue] = React.useState(undefined);
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    setNavigationBarTitle({
      title: `景点详情`,
    });
  }, []);
  return (
    <View className="Wrapper">
      <View className="picture">
        <Image
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1114%2F0FR0104017%2F200FQ04017-6-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620631649&t=ffb6b6a0107239129813770c03f0a034">
        </Image>
        <View>图片100张</View>
      </View>
      <View className="title">
        <View className="title-text">太原植物园</View>
        <View className="title-info">
          <View className="title-info-time">最晚17:00入园</View>
          <View className="title-info-time">购票须知</View>
          <View className="title-info-show">景点简介</View>
        </View>
        <View className="title-line-border">
          <View className="title-line"/>
        </View>
        <View className="title-address">
          <View className="title-address-border">
            <View className="title-address-left">
              <Image src="/images/location.png"/>
              <View className="title-address-location">
                山西省太原市晋源区晋阳大道太原植物园东门
              </View>
            </View>
            <View className="title-address-right">
              <Image src="/images/right.png"/>
            </View>
          </View>
        </View>
      </View>
      <View className="ticket">
        <View className="ticket-wrapper">
          <View className="ticket-title">
            门票
          </View>
          <View className="ticket-date">
            <Button type="default" shape="square" plain hairline size="small" className="ticket-date-button1">
              今日出游
            </Button>
            <Button type="default" shape="square" plain hairline size="small" className="ticket-date-button2">
              明日出游
            </Button>
            <DatePicker value={value} onChange={v => setValue(v)}>
              <Button type="primary" shape="square" plain hairline size="small">
                指定日期
              </Button>
              <Text style={{marginLeft: '30px'}}>{value}</Text>
            </DatePicker>
          </View>
        </View>
        <View className="ticket-card">
          <View className="ticket-card-border1">
            <View className="ticket-card-title">门票</View>
            <View className="ticket-card-sale">已售1万+</View>
            <View className="ticket-card-border2">
              <View className="ticket-card-border3" onClick={
                ()=>{
                  setShow(true);
                  wx.hideTabBar({})}
              }>
                <View className="ticket-card-type">
                  <View className="ticket-card-type-left">
                    <View className="left-t">门票</View>
                    <View className="left-g">可约明日</View>
                    <View className="left-m">官方</View>
                    <View className="left-d">已售 | <View> 购买须知 </View>
                    </View>

                  </View>
                  <View className="ticket-card-type-right">
                    <View className="right-price">
                      <View className="right-price-1">¥</View>
                      <View className="right-price-2">50</View>
                      <View className="right-price-3">起</View>
                      <View className="right-price-4">¥50</View>
                    </View>
                    <View className="right-button">
                      <Button  type="primary" size="default" danger>预定</Button>
                    </View>
                  </View>
                </View>
              </View>
              <View className="ticket-card-border3">
                <View className="ticket-card-type">
                  <View className="ticket-card-type-left">
                    <View className="left-t">门票</View>
                    {/*<View className="left-g">可约明日</View>*/}
                    <View className="left-m">官方</View>
                    <View className="left-d">已售 | <View> 购买须知 </View>
                    </View>

                  </View>
                  <View className="ticket-card-type-right">
                    <View className="right-price">
                      <View className="right-price-1">¥</View>
                      <View className="right-price-2">50</View>
                      <View className="right-price-3">起</View>
                      <View className="right-price-4">¥50</View>
                    </View>
                    <View className="right-button">
                      <Button  type="primary" size="default" danger>预定</Button>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

      </View>
      <View className="info">
        <View className="info-border">
          <View className="info-title">景点信息</View>
          <View className="info-policy">
            <View className="info-policy-left">优待政策</View>
            <View className="info-policy-right">免费政策免费政策免费政策免费政策免费政策免费政策免费政策免费政策</View>
          </View>
          <View className="info-time">
            <View className="info-time-left">开放时间</View>
            <View className="info-time-right">
              {/*<View className="info-time-right-status">营业中</View>*/}
              <View className="info-time-right-text">免费政策免费政策免费政策</View>
            </View>
          </View>
          <View className="info-suggest">
            <View className="info-suggest-left">用时建议</View>
            <View className="info-suggesr-right">一天</View>
          </View>
          <View className="info-line"/>
          <Navigator className="info-more" url="/pages/views/more">
            <View className="info-more-text">查看全部景点信息</View>
            <View className="info-more-right">
              <Image src="/images/right.png"/>
            </View>
          </Navigator>
        </View>
      </View>
      <Popup
        position="bottom"
        title="成人票"
        closeable
        open={show}
        onClose={() => {
          setShow(false);
          wx.showTabBar({})
        }}
      >
        <View
          style={{
            height: '800px',
            padding: '0 24px',
          }}
        >
          <View className="popup">
            <View className="buy">
              <View className="buy-title">购买须知</View>
              <View className="buy-content">
                <View className="buy-content-left">可订明日</View>
                <View className="buy-content-right">可订明日</View>
              </View>
              <View className="buy-content">
                <View className="buy-content-left">可订明日</View>
                <View className="buy-content-right">可订明日</View>
              </View>
              <View className="buy-content">
                <View className="buy-content-left">可订明日</View>
                <View className="buy-content-right">可订明日我哦喔喔喔喔喔喔喔喔喔喔喔喔哦生生世世生生世世事实上生生世世</View>
              </View>
              <View className="buy-content">
                <View className="buy-content-left">可订明日</View>
                <View className="buy-content-right">可订明日事实上生生世世生生世世生生世世</View>
              </View>
            </View>

            <View className="use">
              <View className="use-title">使用说明</View>
              <View className="use-content">
                <View className="use-content-left">入园时间</View>
                <View className="use-content-right">09:00-17:00</View>
              </View>
              <View className="use-content">
                <View className="use-content-left">入园地址</View>
                <View className="use-content-right">太原植物园入园处</View>
              </View>
            </View>
            <View className="cost"></View>
            <View className="other"></View>
          </View>
          <View className="order">

          </View>
        </View>
      </Popup>
    </View>
  );
};
