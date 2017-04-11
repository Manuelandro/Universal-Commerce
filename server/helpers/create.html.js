import React, { PropTypes } from 'react'

const Html = ({ content, state }) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Universal eCommerce</title>
            <link rel="stylesheet" href="reset.css" />
        </head>
        <body>
            <div id="react-root" dangerouslySetInnerHTML={{ __html: content }} />
            <script
                dangerouslySetInnerHTML={{ __html: `window.__PRELOADSTATE__=${JSON.stringify(state)};` }}
                charSet="UTF-8"
            />
            <script src="client.js" charSet="UTF-8" />
        </body>
    </html>
)

Html.propTypes = {
  content: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
}

export default Html