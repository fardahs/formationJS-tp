const _= require('lodash');

function addition(nbre1, nbre2){

    if(_.isNumber(nbre1) && _.isNumber(nbre2) ){
        console.log("Addition ", _.add(nbre1,nbre2));
        return _.add(nbre1,nbre2);
    }

}

function soustraction(nbre1, nbre2){

    if(_.isNumber(nbre1) && _.isNumber(nbre2) ){
        console.log("Soustraction ", _.subtract(nbre1, nbre2));
        return _.subtract(nbre1, nbre2);
    }

}

function mutiplication(nbre1, nbre2){
    if(_.isNumber(nbre1) && _.isNumber(nbre2) ){
        console.log("Multiplication ", _.multiply(nbre1, nbre2));
        return _.multiply(nbre1, nbre2);
    }

}

function division(nbre1, nbre2){
    if(_.isNumber(nbre1) && _.isNumber(nbre2) ){
       console.log("Division ", _.divide(nbre1,nbre2));
       return _.divide(nbre1,nbre2);
    }

}

module.exports = {
    addition: addition,
    soustraction:soustraction,
    mutiplication:mutiplication,
    division:division
};