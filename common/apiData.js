const attributes = [
  [],
  [ // icon_button
    { name: 'icon', type: 'String', deff: '', detail: '图标资源路径' },
    { name: 'text', type: 'String', deff: '', detail: '文本' },
    { name: 'iconWidth', type: 'String', deff: '50', detail: '图标宽度' },
    { name: 'iconHeight', type: 'String', deff: '50', detail: '图标高度' },
    { name: 'size', type: 'String', deff: '188', detail: '组件大小,默认188rpx*188rpx' },
    { name: 'spacing', type: 'String', deff: '14', detail: '图标与文字间距' },
    { name: 'fontSize', type: 'String', deff: '24', detail: '文字大小' },
    { name: 'fontColor', type: 'String', deff: '#333333', detail: '文本颜色' },
  ],
  [ // base_list
    { name: 'title', type: 'String', deff: '', detail: '左边标题' },
    { name: 'subTitle', type: 'String', deff: '', detail: '右边副标题' },
    { name: 'lineColor', type: 'String', deff: '#E0E0E0', detail: '底部线条颜色' },
  ],
  [ // title_view
    { name: 'titleMarginTop', type: 'String', deff: '26', detail: '标题上边距' },
    { name: 'titleMarginBottom', type: 'String', deff: '16', detail: '标题底部边距' },
    { name: 'margin', type: 'String', deff: '25', detail: '组件左右边距' },
    { name: 'titleColor', type: 'String', deff: '#666666', detail: '标题颜色' },
    { name: 'fontSize', type: 'String', deff: '26', detail: '标题字体大小' },
    { name: 'title', type: 'String', deff: 'title', detail: '标题内容，支持数据绑定动态更新' },
    { name: 'contentMargin', type: 'String', deff: '30', detail: '组件内容部分上下边距' },
    { name: 'bgColor', type: 'String', deff: '#fff', detail: '组件内容背景色' },
  ],
  [ // base_button
    { name: 'text', type: 'String', deff: '', detail: '按钮文本内容，支持数据绑定动态更新' },
    { name: 'theme', type: 'String', deff: '', detail: '按钮主题，详情见展示页面' },
    { name: 'width', type: 'String', deff: '', detail: '按钮宽度' },
    { name: 'height', type: 'String', deff: '', detail: '按钮高度' },
    { name: 'radius', type: 'String', deff: '', detail: '圆角，单位rpx' },
    { name: 'textSize', type: 'String', deff: '', detail: '字体大小' },
    { name: 'color', type: 'String', deff: '', detail: '颜色，根据主题变换' },
    { name: 'endColor', type: 'String', deff: '', detail: '渐变主题必填此项，否则没有渐变效果' },
    { name: 'icon', type: 'String', deff: '', detail: '按钮图标，不填写则默认没有图标' },
    { name: 'iconSize', type: 'String', deff: '36', detail: '设置图标大小，默认36*36rpx' },
    { name: 'iconPosition', type: 'String', deff: 'left', detail: '图标位置，默认在文字左边。right表示右边' },
    { name: 'spacing', type: 'String', deff: '18', detail: '图标与文字间距，默认18rpx' },
    { name: 'inline', type: 'String', deff: 'true', detail: 'true表示行内元素，false表示块级元素，即独占一行' },
  ],
  [ // head_portrait
    { name: 'inline', type: 'String', deff: 'true', detail: 'true表示行内元素，false表示块级元素，即独占一行' },
    { name: 'src', type: 'String', deff: '', detail: '头像资源文件路径' },
    { name: 'size', type: 'String', deff: '120', detail: '头像大小，默认120*120rpx' },
    { name: 'radius', type: 'String', deff: '120', detail: '头像圆角，默认120rpx' },
    { name: 'border', type: 'String', deff: '1px solid #fff', detail: '头像边框，语法参考css中的border属性' },
    { name: 'text', type: 'String', deff: '', detail: '昵称文本，默认不显示' },
    { name: 'textSize', type: 'String', deff: '32', detail: '如需显示昵称则使用此属性设置昵称字体大小' },
    { name: 'textColor', type: 'String', deff: '#fff', detail: '如需显示昵称则使用此属性设置昵称文本颜色' },
    { name: 'spacing', type: 'String', deff: '10', detail: '如需显示昵称则使用此属性设置昵称与头像图片间距' },
  ],
  [ // search
    { name: 'icon', type: 'String', deff: '', detail: '搜索图标资源文件路径' },
    { name: 'iconSize', type: 'String', deff: '36', detail: '搜索图标大小' },
    { name: 'textSize', type: 'String', deff: '28', detail: '搜索框中文字大小' },
    { name: 'placeholder', type: 'String', deff: '输入搜索内容', detail: '搜索框为空时显示的占位字符' },
    { name: 'buttonText', type: 'String', deff: '搜索', detail: '搜索按钮文本，默认为“搜索”，不需要按钮则可以设置为空字符串' },
    { name: 'bgColor', type: 'String', deff: '#F4F4F4', detail: '搜索框背景色' },
    { name: 'radius', type: 'String', deff: '60', detail: '圆角' },
    { name: 'color', type: 'String', deff: '#333', detail: '搜索框文字颜色' },
    { name: 'buttonTextSize', type: 'String', deff: '30', detail: '按钮文本字体大小，如不需要搜索按钮则可以不设置' },
    { name: 'buttonColor', type: 'String', deff: '#333', detail: '按钮文本颜色，如不需要搜索按钮则可以不设置' },
    { name: 'spacing', type: 'String', deff: '26', detail: '按钮与搜索框间距，如不需要搜索按钮则可以不设置' },
    { name: 'width', type: 'String', deff: '460', detail: '搜索框宽度' },
  ],
  [ // enhance_text
    { name: 'icon', type: 'String', deff: '', detail: '图标资源文件路径，支持动态更新' },
    { name: 'iconSize', type: 'String', deff: '38', detail: '图标资源文件大小' },
    { name: 'title', type: 'String', deff: '', detail: '标题文本' },
    { name: 'titleFontSize', type: 'String', deff: '28', detail: '标题文字大小' },
    { name: 'titleColor', type: 'String', deff: '#666', detail: '标题文字颜色，支持动态更新' },
    { name: 'titleSpacing', type: 'String', deff: '10', detail: '图标与标题间距' },
    { name: 'text', type: 'String', deff: '', detail: '文本内容，支持动态更新' },
    { name: 'textFontSize', type: 'String', deff: '28', detail: '文本字体大小' },
    { name: 'textColor', type: 'String', deff: '#666', detail: '文本文字颜色，支持动态更新' },
    { name: 'textSpacing', type: 'String', deff: '10', detail: '标题与文本间距' },
  ]
]

const mClass = [
  [],
  [ // icon_button

  ],
  [ // base_list
    { name: 'cus-component', detail: '组件最外层view自定义样式类' },
    { name: 'cus-title', detail: '标题自定义样式类' },
    { name: 'cus-subTitle', detail: '副标题自定义样式类' }
  ],
  [ // title_view

  ],
  [ // base_button

  ],
  [], // head_portrait
  [], // search
  [ // enhance_text
    { name: 'cus-component', detail: '组件最外层view自定义样式类' },
  ],
]

const method = [
  [],
  [ // icon_button

  ],
  [ // base_list

  ],
  [ // title_view

  ],
  [ // base_button
    { name: 'buttontap', parameter: '事件对象', detail: '按钮点击事件' }
  ],
  [ // head_portrait
    { name: 'headtap', parameter: '事件对象', detail: '头像点击事件' }
  ],
  [ // search
    { name: 'onsearch', parameter: '事件对象', detail: '搜索事件，搜索关键字在事件对象的detail.value字段中。如果不带搜索按钮则用户开始输入后触发该事件，如果带有搜索按钮则在用户输入完成并点击按钮后触发该事件。' }
  ],
  [ // enhance_text
    { name: 'texttap', parameter: '事件对象', detail: '点击事件' }
  ],
]

const slot = [
  [],
  [ // icon_button

  ],
  [ // base_list

  ],
  [ // title_view
    { name: '', detail: '组件内容插槽，根据需要插入自定义节点或者组件' }
  ],
  [ // base_button

  ],
  [ // head_portrait
    { name: '', detail: '头像底部标签插槽，根据需要插入自定义节点或者组件' }
  ],
  [], // search
  [], // enhance_text
]

const other = [
'',
'基础库1.6.3以上使用', // icon_button
`基础库1.9.90以上使用。
tip：样式类属性后需要加!important。`, // base_list
`基础库1.9.90以上使用。`, // title_view
`基础库1.9.90以上使用。`, // base_button
`基础库1.9.90以上使用。`, // head_portrait
`基础库1.9.90以上使用。`, // search
`基础库1.9.90以上使用。`, // enhance_text
]

module.exports = {
  attributes: attributes,
  mClass: mClass,
  method: method,
  slot: slot,
  other: other
};