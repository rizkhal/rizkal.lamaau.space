import { createStore } from 'vuex'
import projects from './modules/projects'

export default createStore({
  // namespaced: true,
  modules: {
    projects: projects,
  },
})
