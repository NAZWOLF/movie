import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "MOHA",
    initialState: {
        movie: [
            {
                image: "baki.jpg",
                title: "Baki",
                description: "The protagonist, Baki Hanma, trains with an intense focus to become strong enough to surpass his father, Yujiro Hanma, the strongest fighter in the world...",
                actor1: "Baki Hanama",
                actor2: "Yujiro",
                actor3: "Kato"
            },
            {
                image: "dbz.jpg",
                title: "Dragon Ball Z",
                description: "Dragon Ball Z is a Japanese anime television series produced by Toei Animation.it is the sequel to the 1986 Dragon Ball anime series and adapts the latter 325 chapters ...",
                actor1: "Goku ",
                actor2: " Oob ",
                actor3: "Frezeer "
            },


            {
                image: "death.jpg",
                title: "Deathnote",
                description: "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata.   a teen genius who discovers a mysterious notebook...",
                actor1: "Kira ",
                actor2: "Ryuk ",
                actor3: "Ryuzaaki "
            },
            {
                image: "drstone.jpg",
                title: "Dr.stone",
                description: "Dr. Stone is a Japanese manga series written by Riichiro Inagaki and illustrated by the South Korean artist Boichi. It was serialized in Shueisha's Weekly Shōnen...",
                actor1: "Senku Ishigami ",
                actor2: "Taiju Oki ",
                actor3: "Yuzuriha Ogawa "
            },
            {
                image: "hunter.jpg",
                title: "Hunter x Hunter",
                description: "Hunter × Hunter is an anime television series that aired from 2011 to 2014 based . The story begins with a young boy named Gon Freecss, who one day discovers that the father...",
                actor1: " Gon Freecss",
                actor2: "Kirua Zoldik ",
                actor3: "Kurapika "
            },
            {
                image: "violet.jpg",
                title: "Violet Garden",
                description: "The war is over, and Violet Evergarden needs a job. Scarred and emotionless, she takes a job as a letter writer to understand herself and her past. Watch all you want. The war is over...",
                actor1: "Violet Garden ",
                actor2: "Gilbert Bougainvillea ",
                actor3: "Claudia Hodgins "
            },
            {
                image: "saitama.jpg",
                title: "One Punsh Man",
                description: "Saitama is the main protagonist of the series and the titular One-Punch Man. He is the most powerful being to exist in the series. as he is now too powerful to gain any thrill from battle...",
                actor1: "Saitama",
                actor2: " Hero Association ",
                actor3: " Tornado"
            },
            {
                image: "naruto.jpg",
                title: "Naruto",
                description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition of becoming the Hokage...",
                actor1: "Naruto ",
                actor2: "  Shikamaru ",
                actor3: " Shakra"
            },
        ],
        movieBackup : [
            {
                image: "baki.jpg",
                title: "Baki",
                description: "The protagonist, Baki Hanma, trains with an intense focus to become strong enough to surpass his father, Yujiro Hanma, the strongest fighter in the world...",
                actor1: "Baki Hanama",
                actor2: "Yujiro",
                actor3: "Kato"
            },
            {
                image: "dbz.jpg",
                title: "Dragon Ball Z",
                description: "Dragon Ball Z is a Japanese anime television series produced by Toei Animation.it is the sequel to the 1986 Dragon Ball anime series and adapts the latter 325 chapters ...",
                actor1: "Goku ",
                actor2: " Oob ",
                actor3: "Frezeer "
            },


            {
                image: "death.jpg",
                title: "Deathnote",
                description: "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata.   a teen genius who discovers a mysterious notebook...",
                actor1: "Kira ",
                actor2: "Ryuk ",
                actor3: "Ryuzaaki "
            },
            {
                image: "drstone.jpg",
                title: "Dr.stone",
                description: "Dr. Stone is a Japanese manga series written by Riichiro Inagaki and illustrated by the South Korean artist Boichi. It was serialized in Shueisha's Weekly Shōnen...",
                actor1: "Senku Ishigami ",
                actor2: "Taiju Oki ",
                actor3: "Yuzuriha Ogawa "
            },
            {
                image: "hunter.jpg",
                title: "Hunter x Hunter",
                description: "Hunter × Hunter is an anime television series that aired from 2011 to 2014 based . The story begins with a young boy named Gon Freecss, who one day discovers that the father...",
                actor1: " Gon Freecss",
                actor2: "Kirua Zoldik ",
                actor3: "Kurapika "
            },
            {
                image: "violet.jpg",
                title: "Violet Garden",
                description: "The war is over, and Violet Evergarden needs a job. Scarred and emotionless, she takes a job as a letter writer to understand herself and her past. Watch all you want. The war is over...",
                actor1: "Violet Garden ",
                actor2: "Gilbert Bougainvillea ",
                actor3: "Claudia Hodgins "
            },
            {
                image: "saitama.jpg",
                title: "One Punsh Man",
                description: "Saitama is the main protagonist of the series and the titular One-Punch Man. He is the most powerful being to exist in the series. as he is now too powerful to gain any thrill from battle...",
                actor1: "Saitama",
                actor2: " Hero Association ",
                actor3: " Tornado"
            },
            {
                image: "naruto.jpg",
                title: "Naruto",
                description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition of becoming the Hokage...",
                actor1: "Naruto ",
                actor2: "  Shikamaru ",
                actor3: " Shakra"
            },
        ]

    }

    ,
    reducers: {
        filter(state, action) {

            state.movie = [...state.movie.filter(item => item.title.includes(action.payload))]
        },

        setValue(state){
            state.movie = state.movieBackup    
           },
        add(state,action) {

        state.movie = [...state.movie, action.payload]
        }  
    


    }
}
);
export const { filter, setValue, setReverse, add } = filterSlice.actions
export default filterSlice.reducer