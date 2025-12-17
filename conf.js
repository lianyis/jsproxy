jsproxy_config({
  ver: '130', // 猛加版本号，确保不缓存
  static_assets: [],
  
  // 必须是这个，末尾要有斜杠
  assets_cdn: 'assets/',

  // 你的首页文件名，确保这个文件在根目录或者 assets 目录能访问到
  // 建议把 index_v4.html 复制一份到根目录叫 index.html
  index_path: 'index.html', 
  
  node_map: {
    'mysite': { label: 'Local', lines: { [location.host]: 1 } }
  },
  node_default: 'mysite',
  node_acc: 'cfworker',
})
