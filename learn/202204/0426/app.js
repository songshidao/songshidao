// console.log(window);

// Vue.createApp($options) $options:配置对象
Vue.createApp({
    // DOM:类
    // template:''
    // 数据类:填充DOM数据
    data(){
        return{
            message:'Hello Vue!',
            say:'Hello World!',
            firstName:'谢',
            lastName:'永强',
            email:'654987@qq.com',
            gender:'male',
            img:'https://randomuser.me/api/portraits/med/men/21.jpg'
        }
        },
        methods:{
            async getUser(){
                const data = await fetch('https://randomuser.me/api/')
                const {results} =await data.json()
                this.firstName = results[0].name.first
                this.lastName = results[0].name.last
                this.email = results[0].email
                this.gender = results[0].gender
                this.img = results[0].picture.medium

            // this.firstName = 
        }
    }
}).mount('#app')
   