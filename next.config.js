module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/',
        destination: process.env.CHEN_API || 'http://localhost:8000',
      },
    ]
  }
}
