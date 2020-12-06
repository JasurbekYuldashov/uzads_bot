const { Atributes } = require("../../components/Atributes")
const { DocType } = require("../../constants/docType")

let questions = [
    {
        id:1,
        ask:"Kompyuter rasmini jo'nating:",
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
        ask:"Kompyuter narxini kiriting (SO'M):",
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
        ask:"Kompyuter modelini kiriting:",
        send:"💻 Modeli",
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
        ask:"Kompyuter nechanchi yil olingan:",
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
        ask:"Kompyuter xotirasi qancha (gb):",
        send:"💾 Xotira xajmi (gb)",
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
        id:11,
        ask:"Kompyuter tezkor xotirasi qancha (gb):",
        send:"💽 Tezkor xotira xajmi (gb)",
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
        ask:"Kompyuter haqida qisqacha ma'lumot bering:",
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

function Comp(ctx){
    Atributes(ctx,questions,"#Computer")
}

exports.Comp=Comp