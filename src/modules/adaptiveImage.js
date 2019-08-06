function AdaptiveImage( img ) {
    this.data = img
}

AdaptiveImage.prototype = {
    get uri() {
        if( !this.data.autoMode && typeof window !== 'undefined' && typeof window.devicePixelRatio !== 'undefined' ) {
            if( window.devicePixelRatio > 2 && this.data['uri@3x'] ) {
                return this.data['uri@3x']
            } else if( window.devicePixelRatio > 1 && this.data['uri@2x'] ) {
                return this.data['uri@2x']
            }
        }

        return this.data.uri['uri@3x'] || this.data.uri['uri@2x'] || this.data.uri['uri'];
    },
    get width() {
        return this.data.width
    },
    get height() {
        return this.data.height
    },
    toString() {
        return this.data.uri
    }
}

module.exports = AdaptiveImage
