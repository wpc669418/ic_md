### 获取102卡密码

- 请求地址：` http://baseUrl/api/smartcard/goldcard/1002 `

- 请求类型:  `POST`

- 请求:


| 参数        | 类型   | 必须 | 说明                                      |
| ----------- | ------ | ---- | ----------------------------------------- |
| appCode     | String | 是   | 授权码。由平台提供                        |
| companyCode | String | 是   | 公司编码。由平台提供                      |
| data        | String | 是   | 解析数据。[详见附录二](./appendix_two.md) |

- 响应：

| 参数     | 类型   | 说明                                                                            |
| -------- | ------ | ------------------------------------------------------------------------------- |
| echoCode | String | 响应码。[详见附录一](./appendix.md)                                             |
| msg      | String | 响应消息                                                                        |
| rdata    | String | 解析数据。在echoCode等于0000时返回                                              |
| cardType | String | 卡类型。0不是本厂家IC卡，1是本厂家用户卡，2可能是新卡。在echoCode等于0000时返回 |
| cardPwd  | String | 卡密码。在echoCode等于0000时返回                                                |

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