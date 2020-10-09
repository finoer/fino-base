const projectList = [
  {
    name: 'yueqi1',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1]
      return route.startsWith('/yueqi')
    },
    domain: "http://localhost:8080",
    entry: '/rcms/stats.js',
  },
  {
    name: 'jinzhao',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1]
      return route.startsWith('/jinzhao')
    },
    domain: "http://localhost:8081",
    entry: '/rcms/stats.js',
  },
  {
    name: 'blue',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1]
      return route.startsWith('/blue')
    },
    domain: "http://localhost:8007",
    entry: '/rcms/stats.js',
  },
]

export default projectList
