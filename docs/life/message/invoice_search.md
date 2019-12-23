# 电子发票查询

- 请求地址：` http://baseUrl/api/invoice/internet/1002 `
- 请求类型:  `POST`
- 请求:

| 参数        | 类型   | 必须 | 说明           |
| ----------- | ------ | ---- | -------------- |
| orderNo     | String | 是   | 订单号         |
| companyCode | String | 是   | 公司编码       |
| fpqqlsh     | String | 是   | 发票请求流水号 |
| fpdm        | String | 是   | 发票代码       |
| fphm        | String | 是   | 发票号码       |

- 响应：

| 参数         | 类型   | 说明                                                         |
| ------------ | ------ | ------------------------------------------------------------ |
| echoCode     | String | 响应码。[详见附录](./appendix.md)                                       |
| message      | String | 处理结果消息                                                 |
| list         | Array  | 发票列表                                                     |
| ┣ orderNo    | String | 订单号。原订单号                                             |
| ┣ fpqqlsh    | String | 流水号。发票请求流水号                                       |
| ┣ fpdm       | String | 发票代码                                                     |
| ┣ fphm       | String | 发票号码                                                     |
| ┣ status     | String | 开票状态。2为开票并签章成功，其他状态分别为20:未开票;21:提交服务器开票成功;22:提交服务器开票失败;24:签章失败; |
| ┣ msg        | String | 开票信息。成功或者失败的信息                                 |
| ┣ url        | String | pdf地址。发票pdf可下载的地址                                 |
| ┣ jpgUrl     | String | 详情地址。发票详情地址                                       |
| ┣ kprq       | String | 开票日期                                                     |
| ┣noTaxAmount | String | 不含税金额                                                   |
| ┣ taxAmount  | String | 含税金额                                                     |

| ┣ resultMsg  | String | 结果信息

### 请求数据示例

```json
{
  "begin_date" : "20170313",
  "end_date" : "20170313"
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

