const path =  require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (dir)=>{
    return path.resolve(__dirname,dir)
}

module.exports = {
    webpack:{
        alias:{
            '@':resolve('src')
        }
    },
    plugins:[
        {
            plugin:CracoLessPlugin,
            options:{
                lessLoaderOptions:{
                    lessOptions:{
                        modifyvars:{
                            '@primary-color':'#10A57A'
                        },
                        javascriptEnabled:true
                    }
                }
            }
        }
    ]   
}