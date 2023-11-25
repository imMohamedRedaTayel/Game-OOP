// import { Ui } from "./ui.module.js";


// export class Detalise{
//     constructor(id){
//         this.loading = document.querySelector( '.loading' )

//         document.getElementById( 'btnClose' ).addEventListener( 'click' , () => {
//             document.querySelector( '.details' ).classList.add( 'd-none' )
//             document.querySelector( '.games' ).classList.remove( 'd-none' )
//         } )
//         this.getDetailes(id);
//     }

//     async getDetailes(id){
//         this.loading.classList.remove( 'd-none' )

//         const responseApi = await fetch( `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '836b408d02msh590f237c9c2960bp175d04jsne2f2646b10b9',
//                 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         } )
//         const response = await responseApi.json()
//         this.loading.classList.add( 'd-none' )

//         console.log( response );
//         new Ui().displayDetails( response )
//     }


// }
import { Ui } from "./ui.module.js";

export class Detalise{
    constructor(id){
            this.loading = document.querySelector( '.loading' )
            document.getElementById( 'btnClose' ).addEventListener( 'click' , () => {
            document.querySelector( '.details' ).classList.add( 'd-none' )
            document.querySelector( '.games' ).classList.remove( 'd-none' )
        } )
        this.getDetailes( id )
    }

        async getDetailes(id){
        this.loading.classList.remove( 'd-none' )

        const responseApi = await fetch( `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '836b408d02msh590f237c9c2960bp175d04jsne2f2646b10b9',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        } )
        const response = await responseApi.json()
        this.loading.classList.add( 'd-none' )

        console.log( response );
        new Ui().displayDetails( response )
        }
} 