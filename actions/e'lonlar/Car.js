const { Atributes } = require("../../components/Atributes")
const { DocType } = require("../../constants/docType")

let questions = [
	{
		id:1,
		ask:"Mashina rasmini jo'nating:",
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
		id:7,
		ask:"Mashina narxini kiriting (SO'M) :",
		send:"💰 Narxi (SO'M)",
		field:"",
		answer:null,
		required:true,
		left:false,
		isEnter:false,
		isAsk:false,
		isTest:false,
		isLeft:false,
		type:DocType.num
	},
	{
		id:2,
		ask:"Mashina modelini kiriting:",
		send:"🚚 Modeli",
		field:"Model: ",
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
		id:3,
		ask:"Mashina nechanchi yil zavoddan olingan:",
		send:"📅 Zavoddan olingan yili",
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
		ask:"Mashina qancha masofa yurgan(km):",
		send:"🛤 Yurgan masofasi (km)",
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
		id:5,
		ask:"Mashina haqida qisqacha ma'lumot bering:",
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

function Car(ctx) {
	return Atributes(ctx,questions,"#Car")
}

exports.Car = Car