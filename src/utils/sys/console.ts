import { upgradeLogList } from '@/mock/upgrade/changeLog'

// ANSI 转义码生成网站  https://patorjk.com/software/taag/#p=display&f=Big&t=ABB%0A
const asciiArt = `
\x1b[32m✨ 你好！欢迎使用 Art Design，本项目以 MIT 协议开源，请勿相信任何收费转卖服务！
\x1b[0m
\x1b[36m如果您觉得项目对您有帮助，请点击下面的链接为我点个 ★Star 支持一下！祝您使用愉快！
\x1b[0m
\x1b[33m🌟 GitHub 开源仓库: https://github.com/Barry-Flynn/art-design
\x1b[0m
\x1b[33m🌟 Gitee 开源仓库: https://gitee.com/Barry-Flynn/art-design
\x1b[0m
\x1b[31m✨ 技术支持（QQ群）: 1045381331，如果你有任何问题，请加入QQ群，我们会在第一时间为你解答！
\x1b[0m
`

console.log(asciiArt)

console.info(
  '%c Art-Design %c' + 'https://github.com/Barry-Flynn/art-design',
  'padding: 4px 6px; border-radius: 3px 0 0 3px; color: #fadfa3; background: #030307; font-weight: bold;',
  'padding: 4px 6px; border-radius: 0 3px 3px 0; color: #2500c9; background: #fadfa3; font-weight: bold;'
)
console.info(
  '%c Art-Design-Pro %c' + upgradeLogList.value[0].version,
  'padding: 4px 6px; border-radius: 3px 0 0 3px; color: #ffffff; background: #005aff; font-weight: bold;',
  'padding: 4px 6px; border-radius: 0 3px 3px 0; color: #2500c9; background: #b9ddff; font-weight: bold;'
)
