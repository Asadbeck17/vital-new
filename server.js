// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// require('dotenv').config(); 


// const app = express();
// const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// const CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;

// // const PORT =  3000;

// if (!BOT_TOKEN || !CHANNEL_ID) {
//     console.error("Xatolik: .env faylida TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHANNEL_ID topilmadi!");
//     process.exit(1);
// }

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

// app.post('/submit-form', async (req, res) => {
//     console.log("Qabul qilingan so'rov body:", req.body);

//     const { name, family, email, number, region, address, turi, count, latitude, longitude} = req.body;

//     if (!name || !family || !email || !number || !region || !address || !turi || !count || !latitude || !longitude) {
//         return res.status(400).json({ success: false, message: "Barchasi to'ldirilishi shart!" });
//     }

//     const messageText = 
//         `<b>❗Yangi Murojaat!</b>\n\n` +
//         `<b>👤Ism:</b> ${name}\n` +
//         `<b>👤Familiya:</b> ${family}\n` +
//         `<b>📧Pochta:</b> ${email}\n` +
//         `<b>📞Telefon raqam:</b> ${number}\n` +
//         `<b>🌏Viloyat:</b> ${region}\n` +
//         `<b>📍Manzil:</b> ${address}\n` +
//         `<b>📌Suv turi:</b> ${turi}\n` +
//         `<b>✔Soni:</b> ${count} ta\n\n` +
//         `<b>📍Joylashuv:</b> <a href="https://google.com/maps?q=${latitude},${longitude}">Xaritada ko'rish</a>\n\n` +
//         `<b>🕒Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}`;

//     const payload = {
//         chat_id: CHANNEL_ID,
//         text: messageText,
//         parse_mode: 'HTML', 
//     };

//     try {
//         const telegramResponse = await axios.post(TELEGRAM_API_URL, payload);

//         console.log('Telegram API javobi:', telegramResponse.data);

        

//         if (telegramResponse.data.ok) {
//             return res.status(200).json({ success: true, message: "Telegramga muvaffaqiyatli yuborildi!" });
//         } else {
//             console.error("Telegram API xatosi:", telegramResponse.data.description);
//             return res.status(500).json({ success: false, message: `Telegramga yuborishda xato: ${telegramResponse.data.description}` });
//         }
//     } catch (error) {
//         console.error("Serverda xatolik:", error.message);
//         if (error.response) {
//             console.error('Telegram API Error Data:', error.response.data);
//             console.error('Telegram API Error Status:', error.response.status);
//             return res.status(500).json({ success: false, message: `Telegram API bilan bog'lanishda xato: ${error.response.data.description || error.message}` });
//         } else if (error.request) {
//             console.error('Telegram API ga so\'rov ketdi, lekin javob kelmadi:', error.request);
//             return res.status(500).json({ success: false, message: "Telegram API dan javob olinmadi." });
//         } else {
//             console.error('So\'rovni yuborishda xatolik:', error.message);
//             return res.status(500).json({ success: false, message: "So'rovni yuborishda kutilmagan xatolik." });
//         }
//     }
// });


// app.listen(process.env.PORT, () => {
//     console.log(`Server ${process.env.PORT} portda ishga tushdi`);
// });








const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID

if (!BOT_TOKEN || !CHANNEL_ID) {
    console.error('Xatolik! .env fayildan BOT TOKEN yoki CHANNEL ID topilmadi!')
    process.exit(1)
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

app.post('/submit-form', async (req, res) => {
    console.log('Qabul qilingan so\'rov body:', req.body);

    const {name, family, email, number, region, address, turi, count, latitude, longitude} = req.body

    const fields = [name, family, email, number, region, address, turi, count, latitude, longitude]

    if (fields.some(field => !field)) {
        return res.status(400).json({success: false, message: 'Barchasi to\'ldirilishi shart!'})
    }

    const messageText = 
        `<b>❗Yangi Murojaat!</b>\n\n` +
        `<b>👤Ism:</b> ${name}\n` +
        `<b>👤Familiya:</b> ${family}\n` +
        `<b>📧Pochta:</b> ${email}\n` +
        `<b>📞Telefon raqam:</b> ${number}\n` +
        `<b>🌏Viloyat:</b> ${region}\n` +
        `<b>📍Manzil:</b> ${address}\n` +
        `<b>📌Suv turi:</b> ${turi}\n` +
        `<b>✔Soni:</b> ${count} ta\n\n` +
        `<b>📍Joylashuv:</b> <a href="https://google.com/maps?q=${latitude},${longitude}">Xaritada ko'rish</a>\n\n` +
        `<b>🕒Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}`

    const payload = {
        chat_id: CHANNEL_ID,
        text: messageText,
        parse_mode: 'HTML',
    }

    try {
        const TelegramResponse = await axios.post(TELEGRAM_API_URL, payload)

        console.log('Telegram API javobi:', TelegramResponse.data)

        if (TelegramResponse.data.ok) {
            return res.status(200).json({success: true, message: 'Telegramga muvaffaqiyatli yuborildi!'})
        } else {
            return res.status(500).json({success: false, message: `Telegramga yuborishda xatolik: ${TelegramResponse.data.description}`})
        }
    } catch (error) {
        console.error(`Serverda xatolik:`, error.message)
        if (error.response) {
            console.error(`Telegram API Error data:`, error.response.data)
            console.error(`Telegram API Error status:`, error.response.status)
            return res.status(500).json({success: false, message: `Telegram API bilan bog\'lanishda xato: ${error.response.data.description || error.message}`})
        } else if (error.request) {
            console.error(`Telegram API ga so\'rov ketdi, lekin javob qaytmadi:`, error.request)
            return res.status(500).json({success: false, message: 'Telegram API dan javob olinmadi'})
        } else {
            console.error(`So\'rov yuborishda xatolik:`, error.message)
            return res.status(500).json({success: false, message: 'So\'rov yuborishda xatolik.'})
        }
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.PORT} portda ishlayabdi...`);
})