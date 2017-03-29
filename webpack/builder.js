import webpack from 'webpack'
import { clientConfig } from './webpack.config'

const build = webpack(clientConfig)

const web = new Promise((resolve, reject) =>
    build.run((err, stats) => {
        if (err) {
            console.log(err)
            return reject(err)
        }
        console.log(stats.toString(clientConfig.stats))
        return resolve()
    })
)




