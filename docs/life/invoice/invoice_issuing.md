### 第三方购气数据加密

- 请求地址：` http://baseUrl/api/smartcard/goldcard/1001 `

- 请求类型:  `POST`

- 请求:


| 参数                       | 类型   | 必须 | 说明                                                                                                   |
| -------------------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------ |
| appCode                    | String | 是   | 授权码。由平台提供                                                                                     |
| meterType                  | String | 是   | 表类型。11、民用气量；12、工业气量，13、102卡金额表,14、两阶三价金额表，15、四阶五价金额表，16、温补表 |
| opType                     | String | 是   | 操作类型。1发开户卡，2购气,3补卡                                                                       |
| companyCode                | String | 是   | 公司编码。由平台提供                                                                                   |
| cardNo                     | String | 是   | 卡号。                                                                                                 |
| gas                        | String | 是   | 购气量或金额。金额表填购气金额，气量表填购气量                                                         |
| price1                     | String | 否   | 价格1。金额表必填                                                                                      |
| price2                     | String | 否   | 价格2                                                                                                  |
| price3                     | String | 否   | 价格3                                                                                                  |
| price4                     | String | 否   | 价格4                                                                                                  |
| price5                     | String | 否   | 价格5                                                                                                  |
| ladderVolume1              | String | 否   | 阶梯气量1                                                                                              |
| ladderVolume2              | String | 否   | 阶梯气量2                                                                                              |
| ladderVolume3              | String | 否   | 阶梯气量3                                                                                              |
| ladderVolume4              | String | 否   | 阶梯气量4                                                                                              |
| priceEffectiveDate         | String | 否   | 价格生效日期。格式YYYYMMDDHH，金额表必填                                                               |
| priceCycleDate             | String | 否   | 价格周期开始日期。格式YYYYMMDDHH，金额表必填                                                           |
| cycleLength                | String | 否   | 周期长度。不能<1，金额表必填                                                                           |
| priceVersion               | String | 否   | 价格版本。不能<1，金额表必填                                                                           |
| deferredPrice1             | String | 否   | 延时价格1                                                                                              |
| deferredPrice2             | String | 否   | 延时价格2                                                                                              |
| deferredPrice3             | String | 否   | 延时价格3                                                                                              |
| deferredPrice4             | Array  | 否   | 延时价格4                                                                                              |
| deferredPrice5             | String | 否   | 延时价格5                                                                                              |
| deferredLadderVolume1      | String | 否   | 延时阶梯气量1                                                                                          |
| deferredLadderVolume2      | String | 否   | 延时阶梯气量2                                                                                          |
| deferredLadderVolume3      | String | 否   | 延时阶梯气量3                                                                                          |
| deferredLadderVolume4      | String | 否   | 延时阶梯气量4                                                                                          |
| deferredPriceEffectiveDate | String | 否   | 延时价格生效日期                                                                                       |
| deferredPriceCycleDate     | String | 否   | 延时价格周期开始日期                                                                                   |
| deferredCycleLength        | String | 否   | 延时价格周期长度                                                                                       |
| deferredPriceVersion       | String | 否   | 延时价格版本。等于0表示不启用，金额表必填                                                              |
| data                       | String | 是   | 读卡数据。[详见附录二](./appendix_two.md)                                                              |

- 响应：

| 参数        | 类型   | 说明                                                                             |
| ----------- | ------ | -------------------------------------------------------------------------------- |
| echoCode    | String | 响应码。[详见附录一](./appendix.md)                                              |
| msg         | String | 响应消息                                                                         |
| rdata       | String | 加密的数据。[详见附录二]()。在echoCode等于0000时返回                             |
| cardpassOld | String | 旧密码。4442卡使用，写卡前核对。在echoCode等于0000时返回                         |
| cardpassNew | String | 新密码。4442卡使用，若与旧密码相同则忽略，否则修改密码。在echoCode等于0000时返回 |

### 请求数据示例

```json
{
  "appCode": "00000062",
  "companyCode": "057101",
  "data": "BF00303030300000000030303030C0F400000000F08F1D2140CF0C84BDA0FDC6FC10000634057102A77588C74FD4F4312DA8FFFFFFFFFFFFFFFFFFFFFFFFFFFF",
  "meterType": "11",
  "opType": "2",
  "cardNo": "10000634",
  "gas": "1.0",
  "buyCount": "8",
  "price1": "2.40000",
  "price2": "2.88000",
  "price3": "3.60000",
  "price4": "0",
  "price5": "0",
  "ladderVolume1": "1.00000",
  "ladderVolume2": "600.00000",
  "ladderVolume3": "0",
  "ladderVolume4": "0",
  "priceEffectiveDate": "2019120500",
  "priceCycleDate": "2019010100",
  "cycleLength": "12",
  "priceVersion": "8",
  "deferredPrice1": "0",
  "deferredPrice2": "0",
  "deferredPrice3": "0",
  "deferredPrice4": "0",
  "deferredPrice5": "0",
  "deferredLadderVolume1": "0",
  "deferredLadderVolume2": "0",
  "deferredLadderVolume3": "0",
  "deferredLadderVolume4": "0",
  "deferredPriceEffectiveDate": "",
  "deferredPriceCycleDate": "",
  "deferredCycleLength": "1",
  "deferredPriceVersion": "0"
}

```

### 返回数据示例

```json
{
    "echoCode": "0000",
    "msg": "成功",
    "rdata": "BF00303030310000000030303031C100000000005589B5C802746F66F851C8CCB81000063405710106AEE1B899A985BCCDD4FFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    "cardPassOld": "0f0",
    "cardPassNew": ""
}
```