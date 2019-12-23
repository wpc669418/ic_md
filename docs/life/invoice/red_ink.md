# 电子发票红冲

- 请求地址：` http://baseUrl/api/invoice/internet/1002 `
- 请求类型:  `POST`
- 请求:

| 参数             | 类型   | 必须 | 说明                                                      |
| ---------------- | ------ | ---- | --------------------------------------------------------- |
| orderNo          | String | 是   | 订单号                                                    |
| companyCode      | String | 是   | 公司编码                                                  |
| orderTime        | String | 是   | 订单生成时间                                              |
| contact          | String | 否   | 联系人                                                    |
| contactMobile    | String | 否   | 联系人手机                                                |
| contactMail      | String | 否   | 联系人邮箱                                                |
| shoppingAddress  | String | 否   | 配送地址                                                  |
| salerName        | String | 是   | 售方名称。不填则用纳税人注册的信息                        |
| salerTaxCode     | String | 是   | 售方纳税识别号。销货方纳税人识别号                        |
| salerAddress     | String | 是   | 售方地址。同上                                            |
| salerTel         | String | 是   | 售方电话。同上                                            |
| salerBankName    | String | 是   | 售方开户银行。同上                                        |
| salerBankAccount | String | 是   | 售方银行账号。同上                                        |
| buyerName        | String | 是   | 购方名称。即发票抬头                                      |
| buyerTaxCode     | String | 否   | 购方纳税识别号。购货方纳税识别号                          |
| buyerAddress     | String | 否   | 购方地址                                                  |
| buyerTel         | String | 否   | 购方电话                                                  |
| buyerBankName    | String | 否   | 购方开户银行                                              |
| buyerBankAccount | String | 否   | 购方银行账号                                              |
| fpdm             | String | 是   | 发票代码                                                  |
| fphm             | String | 是   | 发票号码                                                  |
| drawer           | String | 是   | 开票人                                                    |
| totalAmount      | String | 是   | 合计金额。不含税金额合计                                  |
| totalTax         | String | 是   | 合计税额。纳税金额合计                                    |
| totalPay         | String | 是   | 价税合计                                                  |
| remark           | String | 是   | 发票备注                                                  |
| orderItems       | Array  | 是   | 发票项目明细                                              |
| ┣ code           | String | 否   | 商品编码                                                  |
| ┣ name           | String | 是   | 商品名称                                                  |
| ┣ spec           | String | 否   | 规格型号                                                  |
| ┣ price          | String | 否   | 商品单价。必须等于金额/数量的四舍五入值                   |
| ┣ quantity       | String | 否   | 数量。必须大于等于 0.000001，如价格不为空则数量也不能为空 |
| ┣ unit           | String | 否   | 单位                                                      |
| ┣ taxRate        | String | 是   | 税率。只能为 0、 0.03、 0.04、0.06、 0.11 或 0.17         |
| ┣ noTaxAmount    | String | 是   | 不税金额。                                                |
| ┣ tax            | String | 是   | 税额                                                      |
| ┣ taxAmount      | String | 是   | 含税金额                                                  |

- 响应：

| 参数     | 类型   | 说明                      |
| -------- | ------ | ------------------------- |
| echoCode | String | 响应码。[详见附录](./appendix.md)      |
| message  | String | 处理结果消息           

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