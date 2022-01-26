const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/')
        res.end('Home Page');
    if (req.url == '/login')
        res.end('Login Page');
    if (req.url == '/register')
        res.end('Register Page');
    if (req.url == '/logout')
        res.end('Logout Page');
    res.end('404 Page Not Found!')
})

server.listen(3000, () => {
    console.log('server is running');
})
