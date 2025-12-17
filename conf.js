jsproxy_config({
  ver: '125', // 再次升级版本号
  static_assets: [],
  
  // 【关键修改】使用基于域名的绝对路径
  // 这样 sw.js 里的 importScripts 就会拼接成：
  // /jsproxy/assets/bundle.c33e24c5.js
  assets_cdn: '/jsproxy/assets/',

  index_path: 'index_v4.html',
  
  // 其他配置保持默认即可
  node_map: {
    'mysite': {
      label: 'Local',
      lines: {
        [location.host]: 1,
      }
    },
    'cfworker': {
      label: '',
      hidden: true,
      lines: {}
    }
  },
  node_default: 'mysite',
  node_acc: 'cfworker',
})


  direct_host_list: 'cors_v1.txt',
  inject_html: '<!-- custom html -->',
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
