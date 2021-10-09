var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name :'student-project',
    api_key: '961236115642533',
    api_secret: '05-bLymoWvfCWYw9ajCGhG27UYs'
})

module.exports = cloudinary ;