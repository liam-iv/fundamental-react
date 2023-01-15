import About from "../pages/About";
import AboutPost from "../pages/AboutPost";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/posts', component: Posts, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '//posts/:id', component: AboutPost, exact: true},
]
export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/about', component: About, exact: true},
]