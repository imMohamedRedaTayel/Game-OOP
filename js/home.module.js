// import { Detalise } from "./detailes.module.js"
// import { Ui } from "./ui.module.js"


// export class Home {
//     constructor() {
//         this.loading = document.querySelector( '.loading' )
//         // لازم اعمل لووب عليهم 
        // document.querySelectorAll('.nav-link').forEach((link) => {
        //     // link كدا عملت لوب وبق كل لفه بضغط ع واحد فيهم 
        //     link.addEventListener('click', (e) => {
        //         this.changeActiveLink( link )
        //         const category = link.getAttribute('data-category')
                
        //         this.getGames( category )
        //         // self invoked function 
        //         // عشان ال await
                
        //     })
        // })
        
//         this.ui = new Ui()
        

//         this.getGames( 'MMORPG' )

//     }

//      changeActiveLink( link ) {
//         document.querySelector('.active').classList.remove('active')
//         link.classList.add('active') 
//         // e.target.classList.add( 'active' )
//         // const category = link.getAttribute('data-category')
//         // عملت custom atrepute 
//         // وبعتلو اسامي الينكات عشان كل م ابعت واخد يكول ليا api جديد
//         // const dataCategory = await this.getGames(category)
//         // this.ui.displayGames(dataCategory)
//         // في مشكله اول م اعمل ريلود الداتا مش بتيجي
//     }

//     async getGames(category) {
//         this.loading.classList.remove( 'd-none' )
//         const apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
//             method: 'get',
//             headers: {
//                 'X-RapidAPI-Key': '836b408d02msh590f237c9c2960bp175d04jsne2f2646b10b9',
//                 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         })
//         const response = await apiResponse.json()
//         this.loading.classList.add( 'd-none' )

//         console.log(response);
        
//         this.ui.displayGames( response )
//         // هظهر السيكشن بعد الجزئيه دي بحيث ان الكود يكون خلاص اضاف 
//         document.querySelectorAll( '.card' ).forEach( (card) => {
//             card.addEventListener( 'click' , () => {
//                 // console.log( 'Hello' );
//                 document.querySelector( '.details' ).classList.remove( 'd-none' )
//                 document.querySelector( '.games' ).classList.add( 'd-none' )
//                  new Detalise( card.dataset.id )
//             } )
//         } )
//     }
// }

import { Ui } from './ui.module.js'
import { Detalise } from "./detailes.module.js"

export class Home{
    constructor(){
        this.loading = document.querySelector( '.loading' )
        document.querySelectorAll( '.nav-link' ).forEach(  ( link ) => {
            link.addEventListener( 'click' , (e) => {
                document.querySelector('.active').classList.remove('active')
                link.classList.add('active')

                const category = link.getAttribute( 'data-category' )
                this.getGames( category )

            } )
        }  )
        this.ui = new Ui()
        this.getGames( 'MMORPG' )
  
    }
    


    async getGames( category ){
        this.loading = document.querySelector( '.loading' )
        const apiResponse = await fetch( `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` , {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '836b408d02msh590f237c9c2960bp175d04jsne2f2646b10b9',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
        } )
        const response = await apiResponse.json()
        this.loading = document.querySelector( '.loading' )
        console.log( response );
        this.ui.displayGames( response )

        document.querySelectorAll( '.card' ).forEach( ( card ) => {
            card.addEventListener( 'click' ,  () => {
                document.querySelector( '.details' ).classList.remove( 'd-none' )
                document.querySelector( '.games' ).classList.add( 'd-none' )
                new Detalise( card.dataset.id )
            } )
        } )
        
    }



}