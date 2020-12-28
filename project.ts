const projectList = [
  {
    name: 'yueqi',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1].split('/')[1]
      return route === 'yueqi'
    },
    domain: "http://localhost:8080",
    entry: '/yueqi/stats.js',
    prop: {},
    "context": "vue",
    "version": "2.6.2"
  },
]

export default []
