import express from 'express'
import cookieParser from 'cookie-parser' // parses cookies
import session from 'express-session' // parses sessions
import favicon from 'serve-favicon' // serves favicon
import cors from 'cors' // allows cross-domain requests
import createError from 'http-errors' // better JS errors
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
const IS_PRODUCTION = app.get('env') === 'production'

if(IS_PRODUCTION){
    app.set('trust proxy', 1)
}

app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false })); // allows POST requests with GET-like parameters
app.use(cookieParser()); // Parses cookies
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico'))) // <-- location of your favicon
app.use(express.static(path.join(__dirname, '../public'))); // <-- location of your public dir

app.use(session({ // handles sessions
        secret: 'keyboard cat', // <-- this should be a secret phrase
        cookie: { secure: IS_PRODUCTION }, // <-- secure only in production
        resave: true,
        saveUninitialized: true
    })
)

export default app