const products =[
    {name:"redmi" , brand : "xaomi1" , price : 1000},
    {name:"smsng" , brand : "usa2" , price : 2000},
    {name:"api" , brand : "ph3" , price : 3000}
]
const result=products.map(produc => produc.brand)
const result2=products.map(produc => {
    console.log(produc)
});
console.log(result2)


products.forEach(product=>console.log(product.price))

// filter array return kkore
const result3 = products.filter(product=> product.brand==="usa2")
console.log(result3)

// find object hishabe return kore
const result4 = products.find(product=> product.brand==="ph3")
console.log("result4")
console.log(result4)


