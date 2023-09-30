const PRODUCTOS = [
    {
        id:1,
        title: "Pikachu ",
        category: "Peliculas",
        description: "TAMAÑO: 15 cm de alto",
        img: "https://images4-a.ravelrycache.com/uploads/Ashe1UpCrochet/842261428/20180619_112858_medium2.jpg",
        images: [ 
            "https://images4-a.ravelrycache.com/uploads/Ashe1UpCrochet/842261428/20180619_112858_medium2.jpg", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWsBuSUFoXLXgO70xf5ZVaWBZBVzRMn3tbg&usqp=CAU"],
    },
    {
        id:2,
        title: "Sonic",
        category: "Videojuegos",
        description: "TAMAÑO: 15 cm de alto",
        img:"https://images4-g.ravelrycache.com/uploads/suenhosblanditos/687349837/Sonic-amigurumi-05_small2.jpg",
        images: [ 
            "https://images4-g.ravelrycache.com/uploads/suenhosblanditos/687349837/Sonic-amigurumi-05_small2.jpg", 
            "https://www.suenhosblanditos.es/wp-content/uploads/2020/03/Sonic-amigurumi-02.jpg"],
    },
    {
        id:3,
        title: "Baby Yoda",
        category: "Star Wars",
        description: "TAMAÑO: 15 cm de alto",
        img:"https://medaami.com/cdn/shop/files/1polos.jpg?v=1688060674&width=1445",
        images: [ 
            "https://medaami.com/cdn/shop/files/1polos.jpg?v=1688060674&width=1445", 
            "https://www.lovelycraft.com/wp-content/uploads/2021/07/baby-yoda-head-600x850_c.jpg"],
    },
    {
        id:4,
        title: "Renos",
        category:"Varios",
        description: "TAMAÑO: 15 cm de alto",
        img:"https://amigurumi.meteoorfiles.com/images/amigurumi-170Devin-the-Deer2.jpeg",
        images: [ 
            "https://amigurumi.meteoorfiles.com/images/amigurumi-170Devin-the-Deer2.jpeg", 
            "https://www.theresascrochetshop.com/cdn/shop/products/Deerback_1024x1024@2x.jpg?v=1631757205"],
    },
    {
        id:5,
        title: "Manta de apego vaquita",
        category:"Mantas",
        description: "TAMAÑO: 15 cm de alto",
        img:"https://www.artesanum.com/content/upi/5/25045/4/15e1bbb76c3075f6.jpg?w=560",
        images: [ 
            "https://www.artesanum.com/content/upi/5/25045/4/15e1bbb76c3075f6.jpg?w=560", 
            "https://www.artesanum.com/content/upi/5/25045/4/66ef74e58a75d51a.jpg"],
    }
    

]


export const getProductos = () => {

    return new Promise ((res) =>{
        setTimeout(() =>{
            res(PRODUCTOS)
        },1000)
    })
}



export const getProducto = (id) => {

    const producto= PRODUCTOS.filter((producto) => producto.id === id) [0];

    return new Promise ((res) => {
        setTimeout(() =>{
            res(producto);
        },500);
    })
};