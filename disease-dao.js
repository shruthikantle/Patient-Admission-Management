const diseaseModel = require('../model/disease-model');

const diseaseDAO={

    createData:(dataFromService) =>{

        console.log('inside the DAO page',dataFromService);

       
        return new diseaseModel({
            name:dataFromService.name
            

        }).save();
    }
}

module.exports = diseaseDAO;