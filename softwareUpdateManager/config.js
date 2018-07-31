'use strict'
/* eslint-disable comma-dangle */

let config = {
  mode: 2,
  commercialMode: 0,
  specialMode: {
    'SmartGit': 2,
    'Velocity': 2,
    'AnyDesk': 2,
    'DisplayFusion': 2,
    'Beyond Compare': 2,
    'Piriform CCleaner': 2,
    'Piriform Speccy': 2,
    'Piriform Defraggler': 2,
    '冰点文库下载器': 0
  },
  useProxy: 1,
  rootPath: 'D:/GreenSoftware',
  checkInterval: 1,
  userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
  urlWithProxy: [
    'sordum.org'
  ],
  urlWithoutProxy: [
    'sourceforge',
    'github'
  ],
  request: {
    timeout: 60,
    proxyHTTP: 'http://127.0.0.1:2346',
    proxySocks: true,
    proxySocksHost: '127.0.0.1',
    proxySocksPort: 2345,
    proxySocksUsername: '',
    proxySocksPassword: ''
  },
  download: {
    quiet: false,
    retry: 5,
    timeout: 600,
    proxy: '127.0.0.1:2346',
    urlWithoutHeader: [
      'sourceforge.net'
    ]
  },
  preserveArchive: true,
  saveVersion: true,
  excludeGlobal: [
    /^uninstall.exe/i,
    /^uninstaller.exe/i,
    /^uninst.exe/i,
    '\\$PLUGINSDIR',
    '^Setup.exe',
    '.msi$',
    /(^|\\)(README|Read_Me|HISTORY|LICENSE|COPYING|说明|what's new|whatsnew)($|\\|\.html|\.md|\.txt)/i,
  ],
  software: {
    // Basis
    '7-Zip': '_Basis/7-Zip/7z.exe',
    'Bandizip': '_Basis/Bandizip/Bandizip64.exe',
    'CentBrowser': '_Basis/CentBrowser/chrome.exe',
    'Chrome': '_Basis/Chrome/chrome.exe',
    'ChromeUpdateSharp': '_Basis/Chrome/ChromeUpdateSharp.exe',
    'Internet Download Manager': '_Basis/IDM/IDMan.exe',
    'Telegram': '_Basis/Telegram/Telegram.exe',
    'Tor Browser': '_Basis/Tor Browser/tor.exe', // 因为无法获取真正的版本，所以指向目录下的任一文件
    'uTorrent': '_Basis/uTorrent/uTorrent.exe',
    // Batch
    'aria2': '_Batch/aria2c.exe',
    'Inno Setup Unpacker': '_Batch/innounp.exe',
    'MediaInfo-CLI': '_Batch/MediaInfo.exe',
    // 'ffmpeg': '_Batch/ffmpeg/ffmpeg.exe',
    'ImageMagick': '_Batch/ImageMagick/magick.exe',
    // Enhancer
    '7+ Taskbar Tweaker': '_Enhancer/7+ Taskbar Tweaker/7+ Taskbar Tweaker.exe',
    'Actual Title Buttons': '_Enhancer/Actual Title Buttons/ActualTitleButtonsCenter64.exe',
    'Beyond Compare': '_Enhancer/Beyond Compare/BCompare.exe',
    'Piriform CCleaner': '_Enhancer/CCleaner/CCleaner64.exe',
    'Piriform Defraggler': '_Enhancer/Defraggler/Defraggler64.exe',
    'CLaunch': '_Enhancer/CLaunch/CLaunch.exe',
    'CopyQ': '_Enhancer/CopyQ/copyq.exe',
    'DiskGenius': '_Enhancer/PartitionGuru/PartitionGuru.exe',
    'Dism++': '_Enhancer/Dism++/Dism++x64.exe',
    'DisplayFusion': '_Enhancer/DisplayFusion/DisplayFusion.exe',
    'Everything': '_Enhancer/Everything/Everything.exe',
    'ExtremeCopy': '_Enhancer/ExtremeCopy/ExtremeCopy.exe',
    'FastCopy-M': '_Enhancer/FastCopy/FastCopy.exe',
    'MemReduct': '_Enhancer/MemReduct/64/memreduct.exe',
    'OnTopReplica': '_Enhancer/OnTopReplica/OnTopReplica.exe',
    'Registry Workshop': '_Enhancer/Registry Workshop/RegWorkshopX64.exe',
    'Right Click Enhancer Professional': '_Enhancer/Right Click Enhancer Professional/Right Click Enhancer Professional.exe',
    'Textify': '_Enhancer/Textify/Textify.exe',
    'Total Uninstall': '_Enhancer/Total Uninstall/Tu.exe',
    'Total Commander': '_Enhancer/TotalCMD64/Totalcmd64.exe',
    'TrafficMonitor': '_Enhancer/TrafficMonitor/TrafficMonitor.exe',
    'Universal Extractor 2': '_Enhancer/Universal Extractor 2/UniExtract.exe',
    'Volume2': '_Enhancer/Volume2/Volume2.exe',
    'WGestures': '_Enhancer/WGestures/WGestures.exe',
    'Windows System Control Center': '_Enhancer/WSCC/wscc.exe',
    // Media
    'AIMP': '_Media/AIMP/AIMP.exe',
    'Any Video Converter Ultimate': '_Media/Any Video Converter Ultimate/AVCUltimate.exe',
    'Calibre': '_Media/Calibre Portable/calibre-portable.exe',
    'ComicRack': '_Media/ComicRack/ComicRack.exe',
    'DocFetcher': '_Media/DocFetcher/DocFetcher.exe',
    'Honeyview': '_Media/Honeyview/Honeyview.exe',
    'JiJiDownForWPF': '_Media/JJDown/JiJiDownForWPF.exe',
    'LabelPlus': '_Media/LabelPlus/LabelPlus.exe',
    'MPC-BE': '_Media/MPC-BE/mpc-be64.exe',
    'PicGo': '_Enhancer/PicGo/PicGo.exe',
    'PicPick': '_Media/PicPick/picpick.exe',
    'PlayTime': '_Media/PlayTime/PlayTime.exe',
    'PotPlayer': '_Media/PotPlayer/PotPlayerMini64.exe',
    // Program
    'AutoHotkey': '_Program/AutoHotkey/AutoHotkeyU64.exe',
    'AutoIt': '_Program/autoit/AutoIt3_x64.exe',
    'Cmder Mini': '_Program/cmder/Cmder.exe',
    'golang': '_Program/go/bin/go.exe',
    'launch4j': '_Program/launch4j/launch4j.exe',
    'Lepton': '_Program/Lepton/Lepton.exe',
    'Nodejs-LTS': '_Program/nodejs/node.exe',
    'notepad++': '_Program/notepad++/notepad++.exe',
    'Git for Windows Portable': '_Program/PortableGit/git-bash.exe',
    'Resource Tuner': '_Program/Resource Tuner/Resource.Tuner.exe',
    'SmartGit': '_Program/SmartGit/bin/smartgit64.exe',
    // 'Velocity': '_Program/Velocity/Velocity.exe',
    'Visual Studio Code': '_Program/VSCode/Code.exe',
    'WinHex': '_Program/WinHex/WinHex.exe',
    // Proxy
    'Brook': '_Proxy/Brook/Brook.exe',
    'Brook Tools': '_Proxy/Brook/Brook Tools.exe',
    'cow': '_Proxy/cow/cow.exe',
    'FreeGate': '_Proxy/FreeGate/fgp.exe',
    'ultraSurf': '_Proxy/FreeGate/u.exe',
    'goflyway': '_Proxy/Goflyway/goflyway.exe',
    'Goflyway Tools': '_Proxy/Goflyway/Goflyway Tools.exe',
    'shadowsocks': '_Proxy/Shadowsocks/Shadowsocks.exe',
    'shadowsocksr-csharp': '_Proxy/Shadowsocks/ShadowsocksR-dotnet4.0.exe',
    'v2ray': '_Proxy/v2ray/v2ray.exe',
    'v2rayN': '_Proxy/v2ray/v2rayN.exe',
    'XX-Net': '_Proxy/XX-Net/start.bat',
    'ZeroNet': '_Proxy/ZeroNet/ZeroNet.exe',
    'firefly-proxy': '_Proxy/firefly.exe',
    // Study
    'Anki': '_Study/Anki/anki.exe',
    'QTranslate': '_Study/QTranslate/QTranslate.exe',
    'SpeedCrunch': '_Study/SpeedCrunch/speedcrunch.exe',
    // Tool
    'AnyDesk': '_Tool/AnyDesk.exe',
    'FileUploader': '_Tool/FileUploader.exe',
    'GifCam': '_Tool/GifCam.exe',
    'LICEcap': '_Tool/LICEcap.exe',
    'Hourglass': '_Tool/Hourglass.exe',
    'MDB Viewer Plus': '_Tool/MDBPlus.exe',
    'MiTec Task Manager DeLuxe': '_Tool/TMX64.exe',
    'MiTec EXE Explorer': '_Tool/EXE.exe',
    'notepad2-mod': '_Tool/Notepad2.exe',
    'Rapid Environment Editor': '_Tool/rapidee.exe',
    'Resource Hacker': '_Tool/ResourceHacker.exe',
    'Rufus': '_Tool/Rufus.exe',
    'Traymond': '_Tool/Traymond.exe',
    'ScreenToGif': '_Tool/ScreenToGif.exe',
    'Sordum BlueLife KeyFreeze': '_Tool/KeyFreeze_x64.exe',
    'Sordum Defender Injector': '_Tool/dInjector.exe',
    'Sordum Desktop.ini Editor': '_Tool/DeskEdit.exe',
    'Sordum Dns Jumper': '_Tool/DnsJumper.exe',
    'Sordum Drive Letter Changer': '_Tool/dChanger.exe',
    'Sordum Firewall App Blocker': '_Tool/Fab_x64.exe',
    'Sordum Reduce Memory': '_Tool/ReduceMemory.exe',
    'Sordum Reg Converter': '_Tool/RegConvert.exe',
    'Sordum Simple Run Blocker': '_Tool/RunBlock.exe',
    'Sordum Windows Update Blocker': '_Tool/Wub.exe',
    'SpeedyFox': '_Tool/SpeedyFox.exe',
    'WinCDEmu Portable': '_Tool/WinCDEmu.exe',
    'Xlideit Image Viewer': '_Tool/Xlideit.exe',
    '冰点文库下载器': '_Tool/冰点文库下载器.exe',
    '繁化姬': '_Tool/Fanhuaji.exe',
    // Tool/检测工具
    'Piriform Speccy': '_Tool/_检测工具/Speccy/Speccy64.exe',
  }
}

module.exports = config
