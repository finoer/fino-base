const projectList = [
  {
      name: 'plantform_list',
      activeWhen: function (location: Location) {
        const route = window.location.href.split(window.location.origin)[1].split('/')[1]
        return route === 'plantform_list'
      },
      domain: "http://localhost:8081",
      entry: '/plantform_list/stats.js',
      prop: {},
      "context": "vue",
      "version": "2.6.2"
  },

  {
    name: 'yueqi',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1].split('/')[1]
      return route === 'yueqi'
    },
    domain: "http://localhost:8081",
    entry: '/yueqi/stats.js',
    prop: {},
    "context": "vue",
    "version": "2.6.2"
  },
  {
    name: 'jinzhao',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1].split('/')[1]
      return route === 'jinzhao'
    },
    domain: "http://localhost:8082",
    entry: '/jinzhao/stats.js',
    "context": "vue",
    "version": "2.6.2"
  },
  {
    name: 'blue',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1].split('/')[1].split('?')[0]
      return route === 'blue'
    },
    domain: "http://localhost:8007",
    entry: '/rcms/stats.js',
  },
]

export default projectList
