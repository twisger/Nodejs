'use strict'

let data = {
  // ?commercial: true/false,
  // ?useProxy: true/false,
  useProxy: true,
  url: 'https://github.com/telegramdesktop/tdesktop/releases/latest',
  version: {
    selector: '.release-title'
    // attr:
    // 1. text or omitted => text()
    // 2. html => html()
    // 3. other => attr(other)
    //
    // ?match:
    // 1. omitted => /([\d.]+)/[1]
    // 2. /other/ => /other/[1]
    // ---
    // or func: (res, $) => { return version }
  },
  /**
   * download:
   * omitted => open url
   */
  download: {
    // --- mode 0
    // selector: 'a:contains("Download Portable Zip 64-bit")',
    // attr: 'href',
    // match: '', // omitted => /(.*)/[1]
    // --- mode 1
    // plain: 'url/to/download'
    //   you can use variables with {}
    //   defined variables:
    //     version: the latest version
    // --- mode 2
    // func: (res, $) => { return url }
    selector: 'a[href$=".zip"]:has(small.text-gray)',
    attr: 'href',
    // ?output:
    // save to which
    // if start with .(dot), it'll be named as software + output
    // or omitted: software + extension according to download url
    output: 'Telegram.zip' // this is same as '.zip' or omitted
  },
  /**
   * download:
   * omitted => install manually
   */
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data