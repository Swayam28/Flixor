import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import { isNull } from 'util';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary= async(localFilePath)=>{
    try {
        if(!localFilePath)return null;
        //upload file
        const response=await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto",

            })
            //file uploaded
            console.log("file is uploaded on cloaudinary",response.url)

    }catch(error){
        fs.unlinkSync(localFilePath);
        return  null;
    }
}

export {uploadOnCloudinary};

