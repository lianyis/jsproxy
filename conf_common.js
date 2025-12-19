jsproxy_config({
  ver: '150', // 新版本号
  static_assets: [],
  
  assets_cdn: 'assets/', 

  index_path: 'index_v5.html', 
  
  node_map: {
    'mysite': { label: 'Local', lines: { [location.host]: 1 } }
  },
  node_default: 'mysite',
  node_acc: 'cfworker',
})
