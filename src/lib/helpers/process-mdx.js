// eslint-disable-next-line @typescript-eslint/no-var-requires
const matter = require('gray-matter')

module.exports = function (src) {
  const callback = this.async()
  const { content, data } = matter(src)
  const frontmatter = JSON.stringify(data)

  const code = [
    `export const frontmatter = ${frontmatter}`,
    `import Post from '@/components/layouts/Post'`,
    `export default function Layout(props) {`,
    `  return <Post frontmatter={${frontmatter}} {...props} />`,
    `}`,
    content,
  ].join('\n')

  return callback(null, code)
}
