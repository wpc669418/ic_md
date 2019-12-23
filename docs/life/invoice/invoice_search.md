### 第三方解密

- 请求地址：` http://baseUrl/api/smartcard/goldcard/1003 `

- 请求类型:  `POST`

- 请求:


| 参数        | 类型   | 必须 | 说明                                      |
| ----------- | ------ | ---- | ----------------------------------------- |
| appCode     | String | 是   | 授权码。由平台提供                        |
| companyCode | String | 是   | 公司编码。由平台提供                      |
| data        | String | 是   | 解析数据。[详见附录二](./appendix_two.md) |

- 响应：

| 参数                       | 类型   | 说明                                                                                                                             |
| -------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| echoCode                   | String | 响应码。[详见附录一](./appendix.md)                                                                                              |
| msg                        | String | 响应消息                                                                                                                         |
| meterType                  | String | 表类型。11、民用气量；12、工业气量，13、102卡金额表,14、两阶三价金额表，15、四阶五价金额表，16、温补表。在echoCode等于0000时返回 |
| cardType                   | String | 卡类型。0不是本厂家IC卡，1是本厂家用户卡，2可能是新卡。在echoCode等于0000时返回                                                  |
| cardNo                     | String | 卡号。表类型为11、12、13、14时长度为8位，其它为10位。在echoCode等于0000时返回                                                    |
| balance                    | String | 卡内金额。气量表是卡内气量，金额表是卡内金额。在echoCode等于0000时返回                                                           |
| buyCount                   | String | 购气次数。在echoCode等于0000时返回                                                                                               |
| meteringType               | String | 计量类型。在echoCode等于0000时返回                                                                                               |
| meterNo                    | String | 表号。在echoCode等于0000时返回                                                                                                   |
| readCardDate               | String | 表读卡日期。在echoCode等于0000时返回                                                                                             |
| surplus                    | String | 剩余量。在echoCode等于0000时返回                                                                                                 |
| cumulativeGas              | String | 累计用气量。在echoCode等于0000时返回                                                                                             |
| cumulativeMoney            | String | 累计用气金额。在echoCode等于0000时返回                                                                                           |
| price1                     | String | 价格1。在echoCode等于0000时返回                                                                                                  |
| price2                     | String | 价格2。在echoCode等于0000时返回                                                                                                  |
| price3                     | String | 价格3。在echoCode等于0000时返回                                                                                                  |
| price4                     | String | 价格4。在echoCode等于0000时返回                                                                                                  |
| price5                     | String | 价格5。在echoCode等于0000时返回                                                                                                  |
| ladderVolume1              | String | 阶梯气量1。在echoCode等于0000时返回                                                                                              |
| ladderVolume2              | String | 阶梯气量2。在echoCode等于0000时返回                                                                                              |
| ladderVolume3              | String | 阶梯气量3。在echoCode等于0000时返回                                                                                              |
| ladderVolume4              | String | 阶梯气量4。在echoCode等于0000时返回                                                                                              |
| priceEffectiveDate         | String | 价格生效日期。在echoCode等于0000时返回                                                                                           |
| priceCycleDate             | String | 价格周期开始日期。在echoCode等于0000时返回                                                                                       |
| cycleLength                | String | 周期长度。在echoCode等于0000时返回                                                                                               |
| priceVersion               | String | 价格版本。在echoCode等于0000时返回                                                                                               |
| deferredPrice1             | String | 延时价格1。在echoCode等于0000时返回                                                                                              |
| deferredPrice2             | String | 延时价格2。在echoCode等于0000时返回                                                                                              |
| deferredPrice3             | String | 延时价格3。在echoCode等于0000时返回                                                                                              |
| deferredPrice4             | String | 延时价格4。在echoCode等于0000时返回                                                                                              |
| deferredPrice5             | String | 延时价格5。在echoCode等于0000时返回                                                                                              |
| deferredLadderVolume1      | String | 延时阶梯气量1。在echoCode等于0000时返回                                                                                          |
| deferredLadderVolume2      | String | 延时阶梯气量2。在echoCode等于0000时返回                                                                                          |
| deferredLadderVolume3      | String | 延时阶梯气量3。在echoCode等于0000时返回                                                                                          |
| deferredLadderVolume4      | String | 延时阶梯气量4。在echoCode等于0000时返回                                                                                          |
| deferredPriceEffectiveDate | String | 延时价格生效日期。在echoCode等于0000时返回                                                                                       |
| deferredPriceCycleDate     | String | 延时价格周期开始日期。在echoCode等于0000时返回                                                                                   |
| deferredCycleLength        | String | 延时价格周期长度。在echoCode等于0000时返回                                                                                       |
| deferredPriceVersion       | String | 延时价格版本。在echoCode等于0000时返回                                                                                           |

### 请求数据示例

```json
{
  "appCode" : "20170313",
  "companyCode" : "20170313"
}
```

### 返回数据示例

```json
{
  "list": [
    {
      "ref_date": "20170313",
      "session_cnt": 142549,
      "visit_pv": 472351,
      "visit_uv": 55500,
      "visit_uv_new": 5464,
      "stay_time_session": 0,
      "visit_depth": 1.9838
    }
  ]
}
```