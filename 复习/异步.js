function 摇色子(猜测){
    return new Promise((resolve, reject)=>{
        let sino = parseInt(Math.random() * 6 +1)
        if(sino > 3){
            if(猜测 === '大'){
                resolve(sino)
            }else{
                reject(sino)
            }
        }else{
            if(猜测 === '大'){
                reject(sino)
            }else{
                resolve(sino)
            }
        }
        setTimeout(()=>{
            resolve(sino)
        },300)
    })
}
async function test(){
    try{
        //把await及获取它的值的操作放在try里
        let n =await 摇色子('大')
        console.log('赢了' + n)
    }catch(error){
        //失败的操作放在catch里
        console.log('输了' + error)
    }
}
test()