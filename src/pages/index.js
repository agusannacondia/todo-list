import NotFound from './404'
import Dashboard from './Dashboard'
import Login from './Login'
import { getUserLogged } from '../services/auth.service'

const user = getUserLogged()

const pages = [
    {
        path: '/',
        component: user ? Dashboard : Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        component: NotFound
    },
]

export default pages