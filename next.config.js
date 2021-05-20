module.exports = {
  async redirects() {
    return [
      {
        source: '/produto/:id/:departamento/:slug',
        destination: '/p/:slug',
        permanent: true,
      },
    ]
  },
}