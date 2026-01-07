# China Railway Station

[![npm version](https://img.shields.io/npm/v/china-railway-station?logo=npm)](https://www.npmjs.com/package/china-railway-station)
[![npm version](https://img.shields.io/github/package-json/v/pomerun/china-railway-station?logo=github)](https://github.com/pomerun/china-railway-station/pkgs/npm/china-railway-station)
[![MIT Licence](https://img.shields.io/github/license/pomerun/china-railway-station)](https://github.com/pomerun/china-railway-station/blob/master/LICENSE)

> 中国铁路车站信息

## 支持环境
- Node.js >= 21
- Chrome >= 117

在更低版本中使用需要自行根据框架处理降级或polyfill
## 使用
### Script
```html
<script src="build/index.iife.js"></script>
<script>
    const station = new ChinaRailwayStation();

    station.list; // 全部车站列表
    station.find("北京西"); // 获取 北京西 相关车站
</script>
```
### ES Module
安装依赖：
```shell
npm i china-railway-station
```
引用依赖：
```javascript
import ChinaRailwayStation from "china-railway-station";

const station = new ChinaRailwayStation();

station.list; // 全部车站列表
station.find("北京西"); // 获取 北京西 相关车站
```
### CommonJS
安装依赖：
```shell
npm i china-railway-station
```
引用依赖：
```javascript
const ChinaRailwayStation = require("china-railway-station");

const station = new ChinaRailwayStation();

station.list; // 全部车站列表
station.find("北京西"); // 获取 北京西 相关车站
```
## 属性、方法
#### list
获取车站全部列表
- 类型：`Station[]`
#### group
获取车站全部列表（城市分组格式）
- 类型：`Record<string, Station[]>`
#### find
模糊搜索车站
- 类型：`function`
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| keyword | `string` | 否 | - | 搜索关键词 |

- 返回值：`Station[]`
#### findByName
通过车站名获取车站信息
- 类型：`function`
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| name | `string` | 否 | - | 车站名 |

- 返回值：`Station | undefined`
#### findByTelecode
通过电报码获取车站信息
- 类型：`function`
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| telecode | `string` | 否 | - | 电报码 |

- 返回值：`Station | undefined`
#### findByPinyinCode
通过拼音码获取车站信息
- 类型：`function`
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| pinyinCode | `string` | 否 | - | 拼音码 |

- 返回值：`Station[]`
#### findByCity
通过城市名或城市编码获取车站信息
- 类型：`function`
- 参数：

| 参数名 | 类型 | 是否可选 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|---|
| city | `string` | 否 | - | 城市名/城市编码 |

- 返回值：`Station[]`
