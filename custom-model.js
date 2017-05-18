

Vue.component('wrapped-input',{
    props:['value'],
    template:`
        <div>
            <input :value="value" @input="$emit('input',$event.target.value)"  />
        </div>
    `
});

var app = new Vue({
    data:{
        text:'hi',
    },
    template:`
        <div>
            <!--<wrapped-input :value="text" @input="newText => text = newText"></wrapped-input>-->
            <wrapped-input v-model="text"></wrapped-input>
            {{text}}
        </div>
    `
});

setInterval(updateText,2000);

function updateText(){
    app.text = getRandomString();
}

function getRandomString(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

app.$mount('#app');