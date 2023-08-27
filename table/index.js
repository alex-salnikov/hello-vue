'use strict';
var Table = httpVueLoader('./table/table.vue')

var app = new Vue({
	router: new VueRouter({
        routes: [
            {
                path: '*',
                redirect: '/table'
            },
            {
                path: '/table',
                name: 'table',
                component: Table
            }
        ]
    }),
    methods: {
        getData: (url, handler) => {
            const req = new XMLHttpRequest();
            req.addEventListener('load', function(){
                handler(this.responseText);
            });
            req.open('GET', url);
            req.send();
        }
    }
}).$mount('#app');
