import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../token/token";


export const getalltelecallerallocation = async(params)=>{
   var res=await axios.get(`${apiurl()}/telecallerallocation/apigetalltelecallerallocation`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const savetelecallerallocation = async(datas)=>{
    try {
       var data = datas.Category?{...datas, Category:datas.Category.split(',')}:datas
       var res=await axios.post(`${apiurl()}/telecallerallocation/apisavetelecallerallocation`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
       return res.data;
    }
    catch(err){
       console.log(err);
    }
 }

 export const updatetelecallerallocation = async (id, data) => {
   try {
     const res = await axios.put(
       `${apiurl()}/telecallerallocation/apiupdatetelecallerallocation?_id=${id}`,
       data,
       { headers: { Authorization: `Bearer ${gettoken()}` } }
     );
     return res.data;
   } catch (error) {
     console.error('Error updating telecaller allocation:', error);
     throw error;
   }
 };
 
 

export const deletetelecallerallocation=async(id)=>{
   var res=await axios.delete(`${apiurl()}/telecallerallocation/apideletetelecallerallocation`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}