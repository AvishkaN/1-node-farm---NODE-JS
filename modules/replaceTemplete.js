module.exports =(templete,item)=>{
    let output=templete;
    output=output.replace(/{%ID%}/g,item.id);
    output=output.replace(/{%PRODUCTNAME%}/g,item.productName);
    output=output.replace(/{%IMAGE%}/g,item.image);
    output=output.replace(/{%PRICE%}/g,item.price);
    output=output.replace(/{%QUANTITY%}/g,item.quantity);
    output=output.replace(/{%PRODUCT_COUNTRY%}/g,item.from);
    output=output.replace(/{%MINARELS%}/g,item.nutrients);
    output=output.replace(/{%DESCRIPTION%}/g,item.description);

    if(!item.organic)    output=output.replace(/{%NOT_ORAGNIC%}/g,'not-organic');
    return output;
};