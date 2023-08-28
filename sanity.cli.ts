import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/sanity-cms'
  },
  api: {
    projectId: '6m6e8mul',
    dataset: 'production'
  }
})
