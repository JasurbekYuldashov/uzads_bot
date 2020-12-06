const { Atributes } = require("../../components/Atributes")
const { DocType } = require("../../constants/docType")

let questions = [
    {
        id:1,
        ask:"Telefon rasmini jo'nating:",
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
        ask:"Telefon narxini kiriting (SO'M):",
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
        ask:"Telefon markasi kiriting:",
        send:"📱 Markasi",
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
        id:3,
        send:"",
        ask:"Telefon nechanchi yil olingan:",
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
        id:7,
        send:"",
        ask:"Karobka documentlari bormi(ha yoki yo'q):",
        send:"🗂 Karobka document",
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
        id:8,
        ask:"Telefon holati:",
        send:"📲 Telefon holati",
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
        id:9,
        send:"",
        ask:"Boshqa telefonga almashinish bormi(ha yoki yo'q):",
        send:"🤳 Almashinish",
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
        id:10,
        send:"",
        ask:"Telefon xotira hajmi:",
        send:"💾 Xotira hajmi",
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
        id:5,
        ask:"Telefon haqida qisqacha ma'lumot bering:",
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
        id:1812,
        ask:"Qoshimcha telefon raqam kiriting : \n shunday shaklda bo'lsin : +998 94 123 45 67",
        send:"📞 Tel nomer",
        field:"Murojat uchun tel:",
        left:true,
        answer:null,
        required:true,
        isEnter:false,
        isAsk:false,
        isTest:true,
        isLeft:false,
        type:DocType.text
    }
]

function Phone(ctx){
    Atributes(ctx,questions,"#Phone")
}

exports.Phone=Phone