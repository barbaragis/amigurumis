const PRODUCTOS = [
    {
        id:1,
        title: "Pikachu ",
        category: "Peliculas",
        img:"https://images4-a.ravelrycache.com/uploads/Ashe1UpCrochet/842261428/20180619_112858_medium2.jpg",
    },
    {
        id:2,
        title: "Sonic",
        category: "Videojuegos",
        img:"https://images4-g.ravelrycache.com/uploads/suenhosblanditos/687349837/Sonic-amigurumi-05_small2.jpg",
    },
    {
        id:3,
        title: "Baby Yoda",
        category: "Star Wars",
        img:"https://medaami.com/cdn/shop/files/1polos.jpg?v=1688060674&width=1445",
    },
    {
        id:4,
        title: "Renos",
        category:"Varios",
        img:"https://www.lovelycraft.com/wp-content/uploads/2021/11/Pequeno-Reno-de-Navidad-PDF-Amigurumi-Patron-Gratis.jpg"
    },
    {
        id:5,
        title: "Manta de apego vaquita",
        category:"Mantas",
        img:"https://www.artesanum.com/content/upi/5/25045/4/15e1bbb76c3075f6.jpg?w=560"
    }
    

]


export const getProductos = (id) => {
    return new Promise ((res) =>{
        setTimeout(() =>{
            res(PRODUCTOS)
        },1000)
    })
}

