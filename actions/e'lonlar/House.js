const { Atributes } = require("../../components/Atributes")
const { DocType } = require("../../constants/docType")

let questions = [
    {
        id:1,
        ask:"Uyning rasmini jo'nating:",
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
        ask:"Uyning narxini kiriting (SO'M):",
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
        ask:"Uyning manzilini kiriting:",
        send:"🏘 Joylashuvi",
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
        ask:"Uyning yer maydoni (sotix):",
        send:"🏠 Yer maydoni (sotix)",
        field:"Sana: ",
        left:false,
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
        ask:"Uyning sharoitlari haqida yozing:",
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

function House(ctx){
    Atributes(ctx,questions,"#House")
}

exports.House=House