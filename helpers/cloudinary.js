const cloudinary = require('cloudinary').v2;
const multer = require('multer');


cloudinary.config({
    cloud_name: 'dxff6q5bg',
    api_key: '548428112289778',
    api_secret: 'qG-eEoqdTRA-jHMSZ4FEc9V5Fm4',

});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file , {
        resource_type: 'auto',
    })
    return result;
}


const upload = multer({storage: storage});
module.exports = {upload, imageUploadUtil};