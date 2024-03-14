const handleBarsContext = {
    "/index.html": {
       "contactos": [
        {
            content:"Whatsapp: +504-9940-1659"
        },
        {
            content:"Email: deinarjaredz@gmail.com"
        }
       ]
    },
}

const pageContext = (page)=>{
    const context = {...handleBarsContext[page]}
    return context;
}
export default pageContext;