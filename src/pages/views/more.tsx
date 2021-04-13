import React, {useEffect} from 'react';
import {setNavigationBarTitle, View, Textarea,Text,Image} from 'remax/wechat';
import './more.less';

export default () => {
  useEffect(() => {
    setNavigationBarTitle({
      title: `景点详情`,
    });
  }, []);
  return (

    <View className="wrapper">
      <View className="header">
        <View className="header-left">预定须知</View>
        <View className="header-right">景点简介</View>
      </View>
      <View className="policy">
        <View className="policy-title">
          <View className="policy-title-line"/>
          <View className="policy-title-text">门票优待政策</View>
        </View>
        <Text>咩咩咩咩咩咩咩咩咩咩咩咩哇;
          哇哇哇哇哇哇哇嗡嗡嗡嗡嗡嗡</Text>
      </View>
      <View className="info">
          *以上信息仅供参考，具体以景区当日信息为准
      </View>
      <View className="button">
        <View className="button-border">
          <Image src="/images/phone.png"/>
          <View className="button-text">电话咨询景区</View>
        </View>
      </View>

    </View>
  );
};
