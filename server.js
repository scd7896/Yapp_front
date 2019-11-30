const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const fs = require('fs')
const handle = app.getRequestHandler()
const path = require('path')
const prod = process.env.NODE_ENV === 'production';
const morgan = require('morgan')
const uuid = require('uuid')

morgan.token('id', function getId(req, res){
    return req.id
})
function assignId (req, res, next) {
    req.id = uuid.v4()
    next()
  }
app.prepare().then(()=>{
    const server = express()
    server.use(express.json())
    server.use(express.urlencoded({extended: true}))
    server.use(assignId)
    server.use(morgan('common',{
        stream : fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a+' })
    }))
    
    server.get('/keyword/management', (req,res)=>{
        return app.render(req,res, '/keyword/management')
    })
    
    server.get('/error/:code', (req,res)=>{
        req.status = req.params.code;
        req.statusCode = req.params.code;
        res.status = req.params.code;
        res.statusCode = req.params.code;
        
        return app.render(req, res, "/_error")
    })
    server.get('/enrollment/:create/:level/:projectid' ,(req, res)=>{
        return app.render(req,res,'/enrollment', {projectid : req.params.projectid,create : req.params.create,level : req.params.level})
    })
    
    server.get('/', (req,res)=>{
        return app.render(req,res, '/',{});
    })
    
    server.get('*',(req, res)=>{
        return handle(req,res);
    })
    server.listen(prod? process.env.PORT : 10023,()=>{
        console.log('프론트 서버는 10023')
    })
})