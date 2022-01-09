
apiReq = async (path, data, type) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
        method: type,
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };
    
    const response = await fetch(path, requestOptions);
    console.log(response);
    return response.json(); 
};

module.exports = apiReq;
