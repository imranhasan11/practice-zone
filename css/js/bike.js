document.getElementById('btn-apply').addEventListener('click' ,function(){
     
    const priceField=document.getElementById('fix-price' );
    const priceFieldvalueString=priceField.innerText;
    const priceFieldvalue=parseFloat(priceFieldvalueString)

    const buyField=document.getElementById('buy-fix' );
    const buyFieldPricestring=buyField.innerText;
    const buyFieldPrice=parseFloat(buyFieldPricestring)
     
    
    const discountField=document.getElementById('code');
    const discount=discountField.value;
    discountField.value='';
    if(discount==='DOC30 '){
    const percentx=30;
    const currentPrice= (priceFieldvalue*percentx)/100;
    const offerPrice=priceFieldvalue-currentPrice;
    buyField.innerText=offerPrice;
    }
    else{
        buyFieldPrice
    }
    

}  )








