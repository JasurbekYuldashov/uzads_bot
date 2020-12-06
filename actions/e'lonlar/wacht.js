const { Atributes } = require("../../components/Atributes")
const { DocType } = require("../../constants/docType")

let questions = [
    {
        id:1,
        ask:"Soat rasmini jo'nating:",
        send:"",
        field:null,
        answer:null,
        required:true,
        left:false,
        isEnter:false,
        isAsk:false,
        isTest:false,
        isLeft:false,
        type:DocType.img
    },
    {
        id:10,
        ask:"Soat narxini kiriting (SO'M):",
        send:"💰 Narxi (SO'M)",
        field:"Model: ",
        left:false,
        answer:null,
        required:true,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.text
    },
    {
        id:2,
        ask:"Soat markasi kiriting:",
        send:"⌚️ Markasi",
        field:"Model: ",
        left:true,
        answer:null,
        required:true,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.text
    },
    {
        id:3,
        send:"",
        ask:"Soat nechanchi yil olingan:",
        send:"📅 Olingan yili",
        field:"Sana: ",
        left:true,
        answer:null,
        required:false,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.text
    },
    {
        id:4,
        ask:"Soat holati:",
        send:"🛤 holati",
        field:"Yurgan (km):",
        left:false,
        answer:null,
        required:true,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.num
    },
    {
        id:7,
        ask:"Simkarta tushadimi:",
        send:"💳 Sim Karta",
        field:"Yurgan (km):",
        left:true,
        answer:null,
        required:true,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.num
    },
    {
        id:5,
        ask:"Soat haqida qisqacha ma'lumot bering:",
        field:"Ma'lumot :",
        send:"🖥 Qo'shimcha ma'lumot",
        left:true,
        answer:null,
        required:true,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.text
    },
    {
        id:68712,
        ask:"Sizga murojat qilishlari uchun telefon raqamingizni kiriting : \n shunday shaklda bo'lsin : +998 94 123 45 67",
        send:"📞 E'lon beruvchining telefon raqami: ",
        field:"Murojat uchun tel:",
        left:false,
        answer:null,
        required:true,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.phone
    },
    {
        id:6,
        ask:"Sizga murojat qilishlari uchun telefon raqamingizni kiriting : \n shunday shaklda bo'lsin : +998 94 123 45 67",
        send:"📞 Tel nomer",
        field:"Murojat uchun tel:",
        left:false,
        answer:null,
        required:true,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.text
    }
]

function Wacht(ctx){
    Atributes(ctx,questions,"#Wacht")
}

exports.Wacht=Wacht