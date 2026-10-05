import axios from "axios";
import { medicine, medicineResult, Response } from "@/type/medicine";
const baseURL = "https://api.fda.gov/drug/";

function medicineAPI(medicine: medicineResult):medicine{
    return{
        id:medicine.id,
        brandname:medicine.openfda.brand_name?.[0] ?? "unknown",
        genericname:medicine.openfda.generic_name?.[0] ?? "unknow",
        manufacturer:medicine.openfda?.manufacturer_name?.[0]??"unkonwn",
        productType:medicine.openfda?.product_type?.[0]??"unkonwn",
        route:medicine.openfda?.route?.[0]??"unkonwn",
        purpose:medicine.purpose?.[0],
        indication:medicine.indication?.[0],
        warning:medicine.warning?.[0],
        dosage:medicine.dosage?.[0],
        activeIngredients:medicine.activeIngredient?.[0]
    }
}

export async function searchMedicine(searchInput:string): Promise<medicine[]>{
    try {
        const response = await axios.get<Response>(
            baseURL!,
            {
                params:{
                    search:`openfda.brand_name:"${searchInput}"`,
                    limit:20,
                }
            }
            
        )
        return response.data.result.map(medicineAPI);
    } catch (error) {
        throw error;
    }
}