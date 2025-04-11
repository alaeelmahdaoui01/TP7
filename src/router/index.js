import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PasswordView from '../views/ForgotPassword.vue'
import WelcomeView from '../views/WelcomeView.vue'


const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'LoginV',
        component: LoginView
    },
    {
        path: '/register',
        name: 'RegisterV',
        component: RegisterView
    },
    {
        path: '/password',
        name: 'Password',
        component: PasswordView
    }
    /*,
        {
            path: '/welcome',
            name: 'Welcome',
            component: WelcomeView
        }*/
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router