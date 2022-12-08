import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    const success = (message) => toast.success(message);
    const error = (message) => toast.error(message);


export async function guidedSelling(destinyCountry){
    let handled_datas = [];
    let user_destiny_country = removeAccents(destinyCountry);


      const requestGSMA = await axios.get(`/api/countries.json?attributes=id,name&count=true&page=1&per_page=300&sort_direction=asc&sort_property=name&name`);
      let respGSMA = requestGSMA.data.countries;
        

      const handling_datas = () => { 
        let cities = [];
       
        respGSMA.forEach(obj => {
            cities=[];
            obj.cities.map((citi) => { return cities.push(...removeAccents( [citi.name] )) });
             
      
            handled_datas.push(
              {
                country_name: [...removeAccents( [obj.default_name] )][0],//this function it's reponsible per taking out all accents 
                country_id: obj.id,
                cities: cities//preciso tiras todos os assentos e letras maiúsculas das cidades, iual eu fix com o países.
              }
            );

          })

        };
        handling_datas()// I need to create this function because in the dataBase of GSMA, the datas are storade with accents and capital letters;
        


      //this code block it's responsible per formulate the request according with the user's destiny countries.
      let consult_on_api = '';
      user_destiny_country.forEach(destiny_country => {
          try{

              const users_country_id = handled_datas.find((country) => { return country.country_name === destiny_country } );
              
              if(users_country_id === undefined){ //if i can't catch the country id, probably the user texted a city. If this conditionanl by triggered, this alghorithim will catch the country id of city   
                console.log("city")
                
                for(let i = 0; i <= handled_datas.length; i++){//this for will verify if the city texted math with the city of each country that i have within of my dataBase
                  let country = handled_datas[i];
                
                    if(country.cities.length === 0){//if the country hasn't any city, my code will go to the next country
                        continue;

                    }else{        
                      let validate =  country.cities.find((cit) => {if(cit === destiny_country) return consult_on_api += `country_ids[]=${country.country_id}&` });
                      if(validate !== undefined)//if the variable "validate by different that undefined, this mean that my code find out the country of city texted, therefore i break my looping and will to the next city" 
                      break
                      
                    }
                  }
                
              }
              else{
                consult_on_api += `country_ids[]=${users_country_id.country_id}&`;console.log(`country`)
              }
              

          }catch(err){
              error("O país digitado não existe. Verifique se há algo de errado.")
            }
          
        });


        
        //this code block it's responsible per execute the request.
         consult_on_api = consult_on_api.slice(0,-1);console.log(consult_on_api)
         return await axios.get(`/api/distributor_products/183/by_countries?${consult_on_api}`); 

  }





const removeAccents = (countries) => {
    let destinyCountry = [];

    countries.forEach(c => {
      let country = (c.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")).toLowerCase() ;//this code it's responsible per take out all accents of a string
      destinyCountry.push( country.trim() );
    });

    return destinyCountry;
}






   export async function country_request(){
    const country_request = await axios.get(`/api/countries.json?attributes=id,name&count=true&page=1&per_page=300&sort_direction=asc&sort_property=name`);
    let countries = [];
    
     country_request.data.countries.forEach((country) => {
      countries.push(country.name)
     });

     return countries;
   }