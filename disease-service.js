const diseaseDAO = require('../DAO/disease-dao');

const diseaseService={
    
    createData:(dataFromController) =>{

        console.log('inside the service page',dataFromController);

        return new Promise((resolve,reject) =>{

            diseaseDAO.createData(dataFromController).then((result) =>{
                resolve(result);
            }).catch((error) =>{

                console.log('error',error);
                reject(error);
            })
        })

    }
}

module.exports = diseaseService;