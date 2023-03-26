import IMAGES from "../constrants/images";
import AUDIOS from "../constrants/audios";

const data = [
  { sbj: "ar", slug: "العربية", data: [{ word: "", img: "", sound: "" }] },
  {
    sbj: "fr",
    slug: "Français",
    data: [
      {
        word: "apple",
        img: IMAGES.apple,
        sound: AUDIOS.apple,
      },
      {
        word: "orange",
        img: IMAGES.orange,
        sound: AUDIOS.orange,
      },
      { word: "moon", img: IMAGES.moon, sound: AUDIOS.moon },
      {
        word: "table",
        img: IMAGES.table,
        sound: AUDIOS.table,
      },
      { word: "man", img: IMAGES.man, sound: AUDIOS.man },
      {
        word: "juice",
        img: IMAGES.juice,
        sound: AUDIOS.juice,
      },
      {
        word: "coffee",
        img: IMAGES.coffee,
        sound: AUDIOS.coffee,
      },
      {
        word: "chair",
        img: IMAGES.chair,
        sound: AUDIOS.chair,
      },
      { word: "cat", img: IMAGES.cat, sound: AUDIOS.cat },
      { word: "car", img: IMAGES.car, sound: AUDIOS.car },
    ],
  },
  { sbj: "en", slug: "English", data: [{ word: "", img: "", sound: "" }] },
];

// const shuffleArr = (arr) => {

//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     // const f = arr[2]

//     // arr[2] = arr[1]
//     // arr[1] = f
//     // [arr[i], arr[j]] = [arr[j], arr[i]]
//     // console.log("J:  ", f);
//   }
//   // console.log(arr)
//   return arr
// }

// const choices = [...data[1].data]
// const answers = [...data[1].data]

// const i =  Math.floor(Math.random() * answers.length)
// const answer = answers.splice(i, 1)[0]

// const arr = []

// let jh
// for (let i = 0; i < 3; i++) {
//   if (i === 0) jh = [...choices.filter(el => el.word !== answer.word)]
//   const j =  Math.floor(Math.random() * jh.length)

//   arr.push(jh.splice(j, 1)[0])
// }

// // arr.push(answer)
// arr.push(answer)
// // console.log(answer, "ANWSER")
// // console.log(arr, "LENGTH1")
// const newa = shuffleArr([...arr]);
// console.log(newa)
// // console.log(newa, "LENGTH2",newa.length)

// // console.log(answer, "dsd",  Math.floor(answer))

export default data;
