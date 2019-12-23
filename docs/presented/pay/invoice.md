# 电子发票平台对接

## 通讯方式

  -  实时处理业务采用HTTP或HTTPS协议。以Restful方式进行交互。
  -  实时处理业务由第三方支付渠道发起请求，第三方支付渠道发起请求的时间没有限制。
  -  本协议字符集默认为UTF-8，请勿使用其他字符集。
  -  统一HTTP头信息 


| 参数          | 类型   | 必须 | 说明                                                                                                                                                    |
| ------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accept        | String | 必选 | 客户端响应接收数据格式：application/json                                                                                                                |
| AccessToken   | String | 必选 | 访问令牌（请求api必须，否则不必须）使用MD5加密（appCode + appSecret + 时间戳）时间戳是当前系统时间，格式"yyyyMMddHHmmss"                                |
| Authorization | String | 必选 | 验证信息（请求api必须，否则不必须）使用Base64编码（appCode + 冒号(英文) + 时间戳）时间戳是当前系统时间，格式"yyyyMMddHHmmss"需与AccessToken中时间戳相同 |

## 业务概述

- 本通讯接口只适用于业务系统和电子发票平台对接，普通纸质发票平台对接暂不适用。

## 消息交换说明

### 电子发票开具

- 请求地址：` http://baseUrl/api/invoice/internet/1001 `

- 请求类型:  `POST`

- 请求:


| 参数             | 类型   | 必须 | 说明                                                                                                              |
| ---------------- | ------ | ---- | ----------------------------------------------------------------------------------------------------------------- |
| orderNo          | String | 是   | 订单号                                                                                                            |
| companyCode      | String | 是   | 公司编码                                                                                                          |
| orderTime        | String | 是   | 订单生成时间，格式yyyy-MM-dd HH:mm:ss                                                                             |
| contact          | String | 否   | 联系人                                                                                                            |
| contactMobile    | String | 否   | 联系人手机                                                                                                        |
| contactMail      | String | 否   | 联系人邮箱                                                                                                        |
| salerName        | String | 是   | 售方名称，不填则用纳税人注册的信息                                                                                |
| salerTaxCode     | String | 是   | 售方纳税识别号。销货方纳税人识别号                                                                                |
| salerAddress     | String | 是   | 售方地址。同上                                                                                                    |
| salerTel         | String | 是   | 售方电话。同上                                                                                                    |
| salerBankName    | String | 是   | 售方开户银行。同上                                                                                                |
| buyerName        | String | 是   | 购方名称。即发票抬头                                                                                              |
| buyerTaxCode     | String | 否   | 购货方纳税识别号                                                                                                  |
| buyerAddress     | String | 否   | 购方地址                                                                                                          |
| buyerTel         | String | 否   | 购方电话                                                                                                          |
| buyerBankName    | String | 否   | 购方开户银行                                                                                                      |
| buyerBankAccount | String | 否   | 购方银行账号                                                                                                      |
| drawer           | String | 是   | 开票人                                                                                                            |
| totalAmount      | String | 是   | 合计金额。不含税金额合计                                                                                          |
| totalPay         | String | 是   | 税价合计金额。必须大于等于 0.01元；必须等于明细合计金额；必须小于等于在税务局进行票种核定时确定的单张发票开票限额 |
| remark           | String | 否   | 发票备注                                                                                                          |
| items            | Array  | 是   | 发票项目明细                                                                                                      |
| ┣ code           | String | 否   | 商品编码                                                                                                          |
| ┣ name           | String | 是   | 商品名称                                                                                                          |
| ┣ spec           | String | 否   | 规格型号                                                                                                          |
| ┣ price          | String | 否   | 商品单价。必须等于金额/数量的四舍五入值                                                                           |
| ┣ quantity       | String | 否   | 数量。必须大于等于 0.000001，如价格不为空则数量也不能为空                                                         |
| ┣ unit           | String | 否   | 单位                                                                                                              |
| ┣ taxRate        | String | 是   | 税率                                                                                                              |
| ┣ noTaxAmount    | String | 是   | 不税金额                                                                                                          |
| ┣ tax            | String | 是   | 税额                                                                                                              |
| ┣ taxAmount      | String | 是   | 含税金额                                                                                                          |

- 响应：

| 参数     | 类型   | 说明                                     |
| -------- | ------ | ---------------------------------------- |
| echoCode | String | 响应码。[详见附录](#附录)                |
| message  | String | 处理结果消息                             |
| fpqqlsh  | String | 发票请求流水号。在echoCode等于0000时返回 |
| fpdm     | String | 发票代码。同上                           |
| fphm     | String | 发票号码。同上                           |
| url      | String | pdf地址。同上                            |


## 电子发票红冲

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
| echoCode | String | 响应码。[详见附录](#附录) |
| message  | String | 处理结果消息              |

## 电子发票查询

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

| 参数         | 类型   | 说明                                                                                                          |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| echoCode     | String | 响应码。[详见附录](#附录)                                                                                     |
| message      | String | 处理结果消息                                                                                                  |
| list         | Array  | 发票列表                                                                                                      |
| ┣ orderNo    | String | 订单号。原订单号                                                                                              |
| ┣ fpqqlsh    | String | 流水号。发票请求流水号                                                                                        |
| ┣ fpdm       | String | 发票代码                                                                                                      |
| ┣ fphm       | String | 发票号码                                                                                                      |
| ┣ status     | String | 开票状态。2为开票并签章成功，其他状态分别为20:未开票;21:提交服务器开票成功;22:提交服务器开票失败;24:签章失败; |
| ┣ msg        | String | 开票信息。成功或者失败的信息                                                                                  |
| ┣ url        | String | pdf地址。发票pdf可下载的地址                                                                                  |
| ┣ jpgUrl     | String | 详情地址。发票详情地址                                                                                        |
| ┣ kprq       | String | 开票日期                                                                                                      |
| ┣noTaxAmount | String | 不含税金额                                                                                                    |
| ┣ taxAmount  | String | 含税金额                                                                                                      |
| ┣ resultMsg  | String | 结果信息                                                                                                      |



## 附录

### 标准代码

| 代码 | 说明                        |
| ---- | --------------------------- |
| 0000 | 成功                        |
| 0101 | 报文为空                    |
| 0102 | 报文AccessToken校验验证失败 |
| 0103 | 报文域不完整                |
| 0104 | 报文必添域空                |
| 0404 | 平台寻址不存在              |
| 0405 | 平台寻址多条                |
| 9999 | 程序异常                    |



