const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const prod = process.env.NODE_ENV === 'production';
app.prepare().then(()=>{
    const server = express()
    server.use(express.json())
    server.use(express.urlencoded({extended: true}))
    server.get('/', (req,res)=>{
        return app.render(req,res, '/',{});
    })
    server.get('/mypage/:user_id/:routing', (req,res)=>{
        return app.render(req,res,'/mypage', {user_id : req.params.user_id, routing : req.params.routing})
    })
    server.get('*',(req, res)=>{
        return handle(req,res);
    })
    server.listen(prod? process.env.PORT : 10023,()=>{
        console.log('프론트 서버는 10023')
    })
})