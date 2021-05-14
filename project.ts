const projectList = [
  {
      name: 'plantform_list',
      activeWhen: function (location: Location) {
        const route = window.location.href.split(window.location.origin)[1].split('/')[1]
        return route === 'plantform_list'
      },
      domain: "http://localhost:8080",
      entry: '/plantform_list/stats.js',
      prop: {},
      "context": "vue",
      "version": "2.6.2"
  },
  {
    // http://localhost:8080/lc-fino-module-phaser/stats.js
    name: 'phaser',
    activeWhen: function (location: Location) {
      const route = window.location.href.split(window.location.origin)[1].split('/')[1]
      return route === 'phaser'
    },
    domain: " http://localhost:8080",
    entry: '/lc-fino-module-phaser/stats.js',
    context: 'phaser',
    version: '3.23.0'
  },

  {
    name: 'yueqi',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1].split('/')[1]
      return route === 'yueqi'
    },
    domain: "http://localhost:8083",
    entry: '/yueqi/stats.js',
    prop: {},
    "context": "vue",
    "version": "2.6.2"
  },
  {
    name: 'module-001',
    activeWhen: function (location: Location) {
      const route= window.location.href.split(window.location.origin)[1].split('/')[1]
      return route === 'module-001'
    },
    domain: "http://localhost:8085",
    entry: '/module-001/stats.js',
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
