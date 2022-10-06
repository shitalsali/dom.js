function itShouldResolve(num){

    const promise=new Promise(function(res,rej){
        if(num%2==0){
            res("the no is even");
        }else{
            rej("the no is odd");
        }
    })
    return promise
}

foo(2).then((data)=>{
    console.log(data);
})
