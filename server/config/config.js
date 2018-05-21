const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default:{
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb://formago:9689086q@ds129780.mlab.com:29780/formago-ebank'
    }
}

exports.get = function get(env){
    return config[env] || config.default
}
