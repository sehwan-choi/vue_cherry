import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
// import CreateListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import store from '../store/index.js'

Vue.use(VueRouter);

const router = new VueRouter({
    // url에서 #을 제거해준다
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path : url 주소
            path: '/news',
            name: 'news',
            // component : url주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
            // component: CreateListView('NewsView')
            beforeEnter: (to , from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('FETCH_LIST COMPLETE', to.name);
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error)
                });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: CreateListView('AskView')
            beforeEnter: (to , from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('FETCH_LIST COMPLETE', to.name);
                        next();
                    })
                    .catch((error) => {
                        console.log(error)
                });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: CreateListView('JobsView')
            beforeEnter: (to , from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('FETCH_LIST COMPLETE', to.name);
                        next();
                    })
                    .catch((error) => {
                        console.log(error)
                });
            }
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        }
    ]
});

export default router