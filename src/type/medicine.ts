export interface medicine{
    id:string;
    brandname:string;
    genericname:string;
    manufacturer:string;
    productType:string;
    route:string;
    purpose:string;
    indication:string;
    warning:string;
    dosage:string;
    activeIngredients:string;
}
export interface Response{
    meta:{
        disclaimer:string;
        trems:string
        license:string
        lastUpdated:string
        results:{
            skip:string
            limit:string
            total:string
        };
    };
    result:medicineResult[];
}

export interface medicineResult{
    id:string;
    activeIngredient:string[];
    purpose:string[];
    indication:string[];
    warning:string[];
    dosage:string[];
    openfda:{
        brand_name?: string[]
        generic_name?: string[]
        manufacturer_name?: string[]
        product_type?: string[]
        route?: string[]
    }
}