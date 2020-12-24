export const state = () => ({
  data: {
    menu: [{
      name: 'صفحه اصلی',
      path: '/',
      sub: []
    }],
    auth: {
      id: null,
      name: 'مهمان'
    },
    
  }
});

export const getters = {
  getData: (state) => {
    return state.data;
  },
};

export const mutations = {
  setAuth: (state, auth) => {
    state.data.auth = auth;
  }
}

export const actions = {
  setAuth: async ({
    commit
  }) => {
    setTimeout(() => {
      let auth = {
        id: 1,
        name: 'akbar'
      };
      commit('setAuth', auth);
    }, 1000);
  }
};
