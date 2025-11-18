import express from 'express'
import { signUp } from '../controller/auth.controller.js'
const router = express.Router()


router.post("/signup",signUp)
router.get("/signin",(req,res)=>{
    res.send("Signin endpoint")
})
router.get("/signout",(req,res)=>{
    res.send("Signout endpoint")
})


export default router