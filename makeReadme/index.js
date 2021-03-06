// ==Headers==
// @Name:               makeReadme
// @Description:        根据 Headers 生产 README.md
// @Version:            1.0.0
// @Author:             dodying
// @Date:               2018-02-19 20:59:38
// @Last Modified by:   dodying
// @Last Modified time: 2018-02-19 23:54:29
// @Namespace:          https://github.com/dodying/Nodejs
// @SupportURL:         https://github.com/dodying/Nodejs/issues
// @Require:            glob
// ==/Headers==

// 设置
const _ = {
  'E:\\Desktop\\_\\GitHub\\UserJs': {
    repo: 'https://github.com/dodying/UserJs/tree/master/',
    ext: ['js']
  },
  'E:\\Desktop\\_\\GitHub\\Nodejs': {
    repo: 'https://github.com/dodying/Nodejs/tree/master/',
    ext: ['js'],
    ignore: '**\\node_modules\\**'
  }
}
const START = ['// ==UserScript==', '// ==Headers==', '# ==Headers==']
const END = ['// ==/UserScript==', '// ==/Headers==', '# ==/Headers==']

// 导入原生模块
const fs = require('fs')
const path = require('path')
const url = require('url')

// 导入第三方模块
const glob = require('glob')

// Function

// Main
Object.keys(_).forEach(i => {
  let lst = glob.sync('**\\*.@(' + _[i].ext.join('|') + ')', {
    cwd: i,
    ignore: _[i].ignore || ''
  })
  // console.log(lst)
  let md = ''
  if (fs.existsSync(path.resolve(i, 'README_RAW.md'))) md = fs.readFileSync(path.resolve(i, 'README_RAW.md'), 'utf-8') + '\r\n\r\n'
  let info = {}
  lst.forEach(j => {
    let jsPath = path.resolve(i, j)
    let content = fs.readFileSync(jsPath, 'utf-8').split(/[\r\n]+/)
    let start
    for (let k = 0; k < content.length; k++) {
      if (START.includes(content[k])) {
        start = k
        break
      }
    }
    if (start === undefined) return
    let folder = path.parse(j)
    if (!(folder.dir in info)) info[folder.dir] = {}
    info[folder.dir][folder.base] = {}
    for (let k = start; k < content.length; k++) {
      if (END.includes(content[k])) break
      if (!content[k].match('@')) continue
      let arr = content[k].replace(/.*?@/, '').replace(/:\s/, ' ').split(/\s+/)
      info[folder.dir][folder.base][arr[0].toLowerCase()] = arr.splice(1).join(' ')
    }
  })
  // console.log(info)
  for (let j in info) {
    md += `##### ${j}\r\n\r\n`
    for (let k in info[j]) {
      md += `[${info[j][k]['name:zh-CN'] || info[j][k]['name']}](${j + '/' + k}) [Raw](${url.resolve(_[i].repo, j + '/' + k).replace('/tree/', '/raw/')}) v${info[j][k]['version']}: ${info[j][k]['description:zh-CN'] || info[j][k]['description'] || ''}\r\n\r\n`
    }
  }
  fs.writeFileSync(path.resolve(i, 'README.md'), md)
})
