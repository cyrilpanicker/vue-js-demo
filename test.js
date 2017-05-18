Vue.component('transclude',{
    template:`
        <div class="transclude">
            <div>transclude</div>
            <div><slot>fallback content</slot></div>
        </div>
    `
});

var app = new Vue({
    template:`
        <div>
            <transclude>
                inner text
            </transclude>
            <transclude></transclude>
        </div>
    `
});

app.$mount('#app');