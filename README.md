![](https://ask.qcloudimg.com/draft/1000046/ytga2y857g.png)



### Can ICO一套免费开源图标库（WEB版）

1. 将整个Can ICO图标库的目录复制到你的项目中
2. 在 `<head>` 标签中添加 `<link rel="stylesheet" href="canico.css">`
3. 在需要图标的地方添加对应 `class` 的 `<i>` 即可，已logo图标为例：`<i class="cd-candesign"></i>`



本地运行demo即可查看更多图例。



### Can ICO一套免费开源图标库（For Mini Program）

#### 使用指南：

1.将`canico（for mini program）`目录下的“canico”  上传到任意小程序目录

2.在 app.json 或 index.json 中引入组件

```json
"usingComponents": {
  "can-ico": "canico/icon/index"
}
```

#### 代码演示：

设置`name`属性为对应的图标名称即可，所有可用的图标名称见后续官网或html版demo

```html
<can-ico name="candesign" />
```

#### API参数：

| 数           | 说明                       | 类型     | 默认值    |
| ------------ | -------------------------- | -------- | --------- |
| name         | 图标名称                   | `String` | -         |
| color        | 图标颜色                   | `String` | `inherit` |
| size         | 图标大小，如 `20px`，`2em` | `String` | `inherit` |
| custom-style | 自定义样式                 | `String` | -         |

如：

```html
<can-ico name="candesign"  color="red" size="5em" />  
```

实例表示，插入图标 `“candesign”` 并且颜色为红色，大小为5em。

#### 加速CDN地址说明：

如果直接调用icon文件，所使用的URL即：

```css
src:url(https://d.canmeng.net/css/fonts/Can-ico.ttf)
```

此地址可修改为自己的CDN加速地址，当然也可拆封即用。

修改路径为：

```html
/canico/icon/index.wxss  
```

本人并非专职设计，ICO有自己画有搜集，遵循：



### 开源协议

- Can ICO图标库中的字体遵循 [SIL OFL 1.1](http://scripts.sil.org/OFL) 协议
- Can ICO图标库中的 css 遵循 [MIT](https://opensource.org/licenses/mit-license.html) 协议
- Can ICO图标库中的文档遵循 [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/) 协议
- 

### 更新日志：

2018.11.6：初始版本 图标数 327个

2018.11.13：新增 xcx，xcx-i 图标ICO

2018.11.27： 上线微信小程序版ICO



