const fs=require('fs');
const http=require('http');
const url=require('url');
const replceTemplete=require('./modules/replaceTemplete');

const slugify=require('slugify');

const tempOrerview=fs.readFileSync(`${__dirname}/templates/templete-overview.html`,'utf-8');
const tempCard=fs.readFileSync(`${__dirname}/templates/templete-card.html`,'utf-8');
const tempProduct=fs.readFileSync(`${__dirname}/templates/templete-product.html`,'utf-8');


const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    console.log(req.url); 
    

    const {query,pathname}=url.parse(req.url,true);

    // ORVERVIEW PAGE
    if(pathname=='/' || pathname=='/overview'){
        res.writeHead(200,{'Content-type':'text/html'});


        const cardsHTML=dataObj.map(el=>replceTemplete(tempCard,el));
        const output=tempOrerview.replace('%PRODUCT_CARTS%',cardsHTML);

       console.log(slugify('hello-kohomada dfg edf'));    
        res.end(output); 
        
    }

    // PRODUCT PAGE
    else if(pathname=='/product'){ 
        
        res.writeHead(200,{'Content-type':'text/html'});
        const product=dataObj[query.id];
        const output =replceTemplete(tempProduct,product);
        
        res.end(output); 
    }
    
    // API
    else if(pathname=='/api'){ 
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(data);
    } 

    else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-number':'hello-world'
        });
        console.log(pathname);
        res.end('<h1>page nott</h1>'); 
    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log(`live in port 8000`);
});
