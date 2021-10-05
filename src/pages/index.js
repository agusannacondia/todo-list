import NotFound from './404'
import Dashboard from './Dashboard'
import Login from './Login'
import { getUserLogged } from '../services/auth.service'

const user = getUserLogged()

const pages = [
    {
        path: `${process.env.NAME}/`,
        component: user ? Dashboard : Login
    },
    {
        path: `${process.env.NAME}/login`,
        component: Login
    },
    {
        path: `${process.env.NAME}/*`,
        component: NotFound
    },
]

export default pages