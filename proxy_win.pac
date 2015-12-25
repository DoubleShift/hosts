// pac for shadowsocks

var domains = {
  "cnblogs.com": 1, 
  "iqiyi.com": 1, 
  "qiyipic.com": 1, 
  "qiyi.com": 1, 
  "dygod.net": 1, 
  "taobao.com": 1, 
  "csdn.net": 1, 
  "douban.com": 1, 

};

var proxy = "__PROXY__";

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
