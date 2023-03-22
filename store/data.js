import IMAGES from "../constrants/images";
import AUDIOS from "../constrants/audios";

const data = [
  { sbj: "ar", slug: "Arabic", data: [{ word: "", img: "", sound: "" }] },
  {
    sbj: "fr",
    slug: "French",
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
];

export default data;
