
const menuConfig =[
    {
        title: '首页',
        key: '/home',
        icon: 'home'
    },
    {
        title: '其他',
        key: '/form',
        icon: 'form',
        children: [
            {
                title: '登录',
                key: '/admin/form/login',
                icon: 'login'
            }
        ]
    }
]


export default menuConfig