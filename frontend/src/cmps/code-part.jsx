//APP-HEADER-CMP:
{/* <div className='header-bg' style={{ backgroundColor: `${color}`, opacity: `${opacity}` }}></div>

//ON HOVE/ON CHOOSING COLOR
async function onSetBGColor(url) {
    try {
        const color = await utilService.getMainColor(url)
        setColor(color)
    } catch (err) {
        console.log('Cannot set color', err)
    }
}

//SEVICE FUNCTION 
async function getMainColor(url) {
    if (!url) return
    const fac = new FastAverageColor()
    try {
        const color = await fac.getColorAsync(url)
        return color.rgba
    } catch (err) {
        console.log(err)
    }
} */}
