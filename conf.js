jsproxy_config({
  // 1. 版本号 +1，确保 SW 会更新配置
  ver: '111', 

  static_boost: {
    enable: true,
    ver: 62
  },

  node_map: {
    'demo-hk': {
      label: '演示服务-香港节点',
      lines: {
        'node-aliyun-hk-1.etherdream.com:8443': 1,
        'node-aliyun-hk-2.etherdream.com:8443': 2,
      }
    },
    'demo-sg': {
      label: '演示服务-新加坡节点',
      lines: {
        'node-aliyun-sg.etherdream.com:8443': 1,
      },
    },
    'mysite': {
      label: '当前站点',
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

  /**
   * 2. 关键修改：清空 CDN 路径
   * 这样 SW 才会去当前域名下寻找 index_v4.html
   */
  jsproxy_config({
    ver: '120', // 记得升级版本号
  // ... 其他配置保持不变 ...

  /**
   * 关键修改：
   * 既然 bundle.js 在 assets 目录下，这里必须写上 'assets/'
   * 注意末尾要有斜杠
   */
    assets_cdn: 'assets/',

    index_path: 'index_v4.html',
  // ...
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
