import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      bodyHeight:0,
  },
    mutations: {

        commitLine(cxt,_h){
            this.state.lineItemsList.push(_h);
        }
    },

})
